---
title: Containerizing Rust Applications
slug: containerizing-rust-applications-best-practices
coverImage: /images/posts/rust-crab-carrying-a-shipping-container.jpeg
date: 2023-11-09T12:08:04.295Z
excerpt: Torrust services (Tracker and Index)support docker, we want to ensure that contributors understand our containerfile and we also want to share good practices for containerizing Rust applications.
tags:
  - Documentation
  - Docker
  - Containers
  - Rust
hidden: false
---

<script>
  import Callout from "$lib/components/molecules/Callout.svelte";
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
  import Image from "$lib/components/atoms/Image.svelte";
</script>

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [We Use Docker (OCI) Containers](#we-use-docker-(oci)-containers)
- [Basic Dockerized Rust Application](#basic-dockerized-rust-application)
- [Use Multi-Stage Builds to Minimize the Image Size](#use-multi-stage-builds-to-minimize-the-image-size)
- [Image Variants](#image-variants)
- [Introduction to Docker Layers Cache](#introduction-to-docker-layers-cache)
- [Caching Cargo Dependencies](#caching-cargo-dependencies)
  - [Demonstration of Caching Cargo Dependencies using a Custom Solution](#demonstration-of-caching-cargocdependencies-using-a-custom-solution)
  - [Caching Cargo Dependencies With Cargo Chef](#caching-cargo-dependencies-with-cargo-chef)
- [Installing Rust Binaries With Cargo Binstall](#installing-rust-binaries-with-cargo-binstall)
- [Archiving And Reusing Builds With Cargo Nextest](#archiving-and-reusing-builds-with-cargo-nextest)
- [Running Container Without Sudo](#running-container-without-sudo)
  - [Use The `docker run --user` Argument](#use-the-docker-run---user-argument)
  - [Create The User At Runtime](#create-the-user-at-runtime)
- [Decomposing the Torrust Tracker Containerfile](#decomposing-the-torrust-tracker-containerfile)
- [Other Good Practices](#other-good-practices)
- [Other Considerations](#other-considerations)
- [Links](links)
- [Conclusion](#conclusion)

## Introduction

BitTorrent, an age-old protocol, is a powerful way to share data over the internet.
In our journey to building robust BitTorrent projects, we've chosen the Rust
programming language for its memory safety and concurrency features. To streamline
the development and distribution of our projects, we've also employed Docker and
Podman.

In this post, we'll dive deep into the best practices we've adopted for
dockerizing our Rust applications.

Our [Containerfiles](https://docs.docker.com/engine/reference/builder/), _commonly called a `"Dockerfile"`_, are stored in the roots of the our two main rust repositories, for reference:
- Torrust-Tracker [Containerfile](https://github.com/torrust/torrust-tracker/blob/develop/Containerfile).
- Torrust-Index [Containerfile](https://github.com/torrust/torrust-index/blob/develop/Containerfile).

### Example:
All of the examples included in this blog post are publicly available in our "[Containerizing Rust Apps Examples](https://github.com/torrust/containerizing-rust-apps-examples)"
GitHub Repository.

> ___Please Note:___ The actual `Containerfile` for the **Tracker** and **Index** services builds images for
both `debug` and `release` modes. For learning purposes we are using a simplified
version here which only builds the `release` mode:

<CodeBlock lang="dockerfile">

```dockerfile
# Extracted example of our Containerfile.

## Base Builder Image
FROM rust:bookworm as chef
WORKDIR /tmp
RUN curl -L --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/cargo-bins/cargo-binstall/main/install-from-binstall-release.sh | bash
RUN cargo binstall --no-confirm cargo-chef cargo-nextest

## Tester Image
FROM rust:slim-bookworm as tester
WORKDIR /tmp
RUN apt-get update; apt-get install -y curl; apt-get autoclean
RUN curl -L --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/cargo-bins/cargo-binstall/main/install-from-binstall-release.sh | bash
RUN cargo binstall --no-confirm cargo-nextest

## Su Exe Compile
FROM docker.io/library/gcc:bookworm as gcc
COPY ./contrib/dev-tools/su-exec/ /usr/local/src/su-exec/
RUN cc -Wall -Werror -g /usr/local/src/su-exec/su-exec.c -o /usr/local/bin/su-exec; chmod +x /usr/local/bin/su-exec

## Chef Prepare (look at project and see wat we need)
FROM chef AS recipe
WORKDIR /build/src
COPY . /build/src
RUN cargo chef prepare --recipe-path /build/recipe.json

## Cook (release)
FROM chef AS dependencies
WORKDIR /build/src
COPY --from=recipe /build/recipe.json /build/recipe.json
RUN cargo chef cook --tests --benches --examples --workspace --all-targets --all-features --recipe-path /build/recipe.json --release
RUN cargo nextest archive --tests --benches --examples --workspace --all-targets --all-features --archive-file /build/temp.tar.zst --release  ; rm -f /build/temp.tar.zst

## Build Archive (release)
FROM dependencies AS build
WORKDIR /build/src
COPY . /build/src
RUN cargo nextest archive --tests --benches --examples --workspace --all-targets --all-features --archive-file /build/full-example.tar.zst --release

# Extract and Test (release)
FROM tester as test
WORKDIR /test
COPY . /test/src
COPY --from=build \
  /build/full-example.tar.zst \
  /test/full-example.tar.zst
RUN cargo nextest run --workspace-remap /test/src/ --extract-to /test/src/ --no-run --archive-file /test/full-example.tar.zst
RUN cargo nextest run --workspace-remap /test/src/ --target-dir-remap /test/src/target/ --cargo-metadata /test/src/target/nextest/cargo-metadata.json --binaries-metadata /test/src/target/nextest/binaries-metadata.json

RUN mkdir -p /app/bin/; cp -l /test/src/target/release/full-example /app/bin/full-example
RUN chown -R root:root /app; chmod -R u=rw,go=r,a+X /app; chmod -R a+x /app/bin

## Runtime
FROM gcr.io/distroless/cc-debian12:debug as runtime
RUN ["/busybox/cp", "-sp", "/busybox/sh","/busybox/cat","/busybox/ls","/busybox/env", "/bin/"]
COPY --from=gcc --chmod=0555 /usr/local/bin/su-exec /bin/su-exec
ARG USER_ID=1000
COPY --chmod=0555 ./share/container/entry_script_sh /usr/local/bin/entry.sh
ENTRYPOINT ["/usr/local/bin/entry.sh"]

## Release Runtime
FROM runtime as release
COPY --from=test /app/ /usr/
CMD ["/usr/bin/full-example"]
```

</CodeBlock>

The real version in production contains some duplicate stages to build the `debug`
mode. Those stages are almost identical to the ones in this example and are therefore omitted. Only some flags and names change.

Don't be scared of the example, next we will go through all the lines and explain what
they do, but before doing that, we will explain some basic concepts and the patterns
applied one by one.

## Requirements

In order to run some of the examples in this article you will need to install:

- [Docker version 24.0.6, build ed223bc](https://docs.docker.com/get-docker/)

## We Use Docker (OCI) Containers

The standardized [Open Container Initiative (OCI)](https://opencontainers.org/) Containers allows Torrust possibility of reliable and cross-platform distribution and deployment of our Software.

This allows in turn allows for administrators who may be interested in our software to to quickly and easily test-out our software and see if it suits their needs. It also allows administrators to more easily deploy our software, as most of the web-hosting systems have great support for OCI Containers.

In addition, our End-to-End testing infrastructure is made easier by using a [docker-compose](https://docs.docker.com/compose/) configuration, that is taking advantage of our docker containers.


## Basic Dockerized Rust Application

The simplest Dockerfile for a Rust application is as follows:

<CodeBlock lang="dockerfile">

```dockerfile
# We start from full base defacto Debian image
FROM rust:latest
WORKDIR /app
RUN cargo init
RUN cargo build --release
CMD ["./target/release/app"]
```

</CodeBlock>

And you can build the image and run it with:

<CodeBlock lang="console">

```console
docker build -t docker-rust-app-basic .
docker run --rm -it docker-rust-app-basic

Hello, world!
```

</CodeBlock>

That creates a docker image which is **1.39 GB**!.

<CodeBlock lang="console">

```console
$ docker image ls | grep docker-rust-app-basic
docker-rust-app-basic                            latest          7294f20bb52c   2 minutes ago   1.39GB
```

</CodeBlock>

We are going to see how to improve
that and other things like common patters, good practices and other considerations.

## Use Multi-Stage Builds to Minimize the Image Size

A common pattern to build smaller docker images is to use multi-stage Dockerfiles.

You can compile your application with all of the Rust tooling and then use the
final binary in a slim operating system. This image does not contain the common
packages contained in the default tag and only contains the minimal packages
needed to run your compiled Rust application.

<CodeBlock lang="dockerfile">

```dockerfile
# This is the first stage. This image is used to compile the Rust application.
FROM rust:bookworm as builder
WORKDIR /app
RUN cargo init
# Install the package in the current directory
RUN cargo install --path .
CMD ["./target/release/app"]

# This is the production stage.
# The slim image does not contain the common packages contained in the default tag and only contains the minimal packages needed to run rust.
FROM debian:bookworm-slim
COPY --from=builder /usr/local/cargo/bin/app /usr/local/bin/app
CMD ["app"]
```

</CodeBlock>

The example is very easy and you can build and run the image with:

<CodeBlock lang="console">

```console
docker build -t docker-rust-app-multi-stage .
docker run --rm -it docker-rust-app-multi-stage
Hello, world!
$ docker image ls | grep docker-rust-app-multi-stage
docker-rust-app-multi-stage                             latest          bc3ae797b55e   11 seconds ago   84.7MB
```

</CodeBlock>

As you can see this new image is only 84.7MB. That's a huge improvement!

## Image Variants

As you can see in our `Containerfile`, the images we are using are the followings:

### rust:bookworm

```Dockerfile
FROM rust:bookworm
```

At the time of writing this article the latest release is [Debian 12.2](https://www.debian.org/releases/bookworm/).
It is also (currently) known as stable or by its codename "Bookworm". You will
see that we use that one because it's the latest one.

### rust:slim-bookworm

```Dockerfile
FROM rust:slim-bookworm
```

Images with the `slim` suffix do not contain the common packages contained in the
default tag and only contain the minimal packages needed to run rust. We are using
it for the "tester" stage.

### gcc:bookworm

```Dockerfile
FROM docker.io/library/gcc:bookworm
```

The GCC image is used to compile an small C program which is a simple tool that
simply executes a program with different privileges. When we start the container
we run it with a USER ID passed by an environment variable and not with `root` 
privileges.

### cc-debian12:debug

```Dockerfile
FROM gcr.io/gcr.io/distroless/cc-debian12:debug
```

And finally a "Distroless" container image is used for runtime. [Why should you use distroless images?](https://github.com/GoogleContainerTools/distroless#why-should-i-use-distroless-images).

- They are small.
- The only have what you need to run your app.
- It reduces the risk of vulnerabilities.

<Callout type="info">

We use the `:debug` variant of the distroless cc, as it includes the busybox binary,
giving us a shell; that is needed to run the entry-script. We will explain this later.

</Callout>

## Introduction To Docker Layers Cache

Caching is a pivotal aspect of optimizing Docker builds, especially with Rust projects. Proper caching ensures faster builds, as unchanged dependencies don't have to be recompiled. By leveraging Docker's layer caching mechanism, we can effectively cache Rust dependencies and speed up our Docker builds.

Docker uses a layered filesystem to store images. Each layer is a set of changes to the filesystem. When you create a new container, you add a new writable layer on top of the underlying layers. This layer is often called the "container layer". All changes made to the running container, such as writing new files, modifying existing files, and deleting files, are written to this thin writable container layer.

## Caching cargo dependencies

A common pattern used in all languages is to separate the dependencies installation from the application build. This is done to take advantage of the Docker layer caching mechanism. The dependencies installation is done in a separate layer, and the application build is done in a separate layer. This way, if the application code changes, the dependencies installation layer is not rebuilt, and only the application build layer is rebuilt.

This improves build times because dependencies installation is usually a time-consuming process and it is something you normally do not change often. The application build, on the other hand, is something you change often, and it is usually a quick process.

Docker build is executed in the order that you define instructions so you put things that change less frequently at the beginning of the Dockerfile and things that change more frequently at the end of the Dockerfile.

There are two levels of dependencies:

- System dependencies. For instance `SQLite`, `curl` and other libraries your application depends on.
- Rust dependencies. These are the Rust packages that you want to install using cargo. Rust packages are called `crates` and you can find them on <https://crates.io/>

### Demonstration of Caching Cargo Dependencies using a Custom Solution

First we demonstrate how cargo dependencies caching works but showing a custom solution:

We first create an **empty application configuration** which uses the same dependencies.
We build the application, downloading and building all the dependencies and creating a docker cache layer.

Then we build the application. With these layers yo do not need to re-build the dependencies
when you change the application code.

<CodeBlock lang="dockerfile">

```dockerfile
FROM rust:latest as builder

WORKDIR /app

# Copy over the manifest files
COPY Cargo.toml Cargo.lock /app/

# Create a dummy main.rs to build dependencies
RUN mkdir src && echo "fn main() { println!(\"if you see this, the build broke\"); }" > src/main.rs

# This build step will cache the dependencies as they're not changed
RUN cargo build --release

# Now, remove the dummy main.rs and copy your source code
COPY . /app

# You'll need to update the last modified of the main.rs file to inform cargo to rebuild it
RUN touch -a -m ./src/main.rs

# Build the application for release. Since dependencies are cached, this will only build your code
RUN cargo build --release

CMD ["./target/release/custom-dependencies-cache"]
```

</CodeBlock>

Instead of this custom solution, we use and recommend [cargo chef](https://github.com/LukeMathWalker/cargo-chef) which is a cargo-subcommand that specializes in speeding up Rust Docker builds using Docker layer caching.


### Caching Cargo Dependencies With Cargo Chef

In this example, we show how to use [cargo chef](https://github.com/LukeMathWalker/cargo-chef), that we prefer to use.

<CodeBlock lang="dockerfile">

```dockerfile
FROM rust:latest as chef

WORKDIR /app

# Install cargo-chef
RUN cargo install cargo-chef --locked

# Examines your project and builds a recipe that captures the set of information required to build your dependencies
FROM chef AS planner

COPY . .

RUN cargo chef prepare --recipe-path recipe.json

FROM chef AS builder 

COPY --from=planner /app/recipe.json recipe.json

# Build dependencies - this is the caching Docker layer!
RUN cargo chef cook --release --recipe-path recipe.json

COPY . .

# Build the application for release. Since dependencies are cached, this will only build your code
RUN cargo build --release

CMD ["./target/release/dependencies-cache-with-cargo-chef"]
```

</CodeBlock>

While it does more or less the same as the custom solution. It caches dependencies in a separate layer and has some other [benefits](https://github.com/LukeMathWalker/cargo-chef#benefits-of-cargo-chef).


## Installing Rust Binaries With Cargo Binstall

`cargo binstall` is a cargo subcommand that allows installing Rust binaries as an alternative to building from source (via cargo install) or manually downloading packages.

Cargo Binstall repo: <https://github.com/cargo-bins/cargo-binstall>.

We are using it to install `cargo chef` and `cargo nextest` packages easily.

<CodeBlock lang="dockerfile">

```dockerfile

FROM rust:latest
WORKDIR /app
# Install `cargo binstall`
RUN curl -L --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/cargo-bins/cargo-binstall/main/install-from-binstall-release.sh | bash
# Install Rust binaries with `cargo binstall`
RUN cargo binstall --no-confirm cargo-chef cargo-nextest
RUN cargo chef --version && cargo nextest --version
RUN cargo init
RUN cargo build --release
CMD ["./target/release/app"]

```

</CodeBlock>

## Archiving And Reusing Builds With Cargo Nextest

[cargo-nextest](https://nexte.st/) is a Rust test runner.

It has a subcommand `cargo nextest archive` that can archive builds artifacts.
This is useful to separate the "build" phase from the "run" phase.

In the [official documentation](https://nexte.st/book/reusing-builds.html) they
describe some use cases like:

- **Cross-compilation**. The build machine has a different architecture, or runs a different operating system, from the target machine.
- **Test partitioning**. Build once on the build machine, then partition test execution across multiple target machines.
- **Saving execution time** on more valuable machines. For example, build tests on a regular machine, then run them on a machine with a GPU attached to it.

We are using it for two reasons:

- **Test partitioning**. We build the application in a docker stage and then run
  the tests in another stage. This way we can separate the build and test phases.
- **Passing the binary to the next stage**. After building the application we archive
  the build artifacts and then we extract them in the next stage to run the tests.
  Finally we copy the binary to the final "runtime" stage.

<CodeBlock lang="dockerfile">

```dockerfile
## First stage to install the nextest tool
FROM rust:latest as nextest
RUN cargo install cargo-nextest --locked

## Second stage to build the application and package it with nextest
FROM nextest AS builder
WORKDIR /build/src
COPY . /build/src
RUN cargo build
# We archive the build artifacts to reuse them in the next stage
# NOTICE: the application must contains at least one integration test in order
# include the binary in the archive.
# See: https://github.com/nextest-rs/nextest/issues/423
RUN cargo nextest archive --tests --benches --examples --workspace --all-targets --all-features --archive-file /build/archiving-and-reusing-builds.tar.zst
CMD ["/build/src/target/debug/archiving-and-reusing-builds"]

## Third stage to test the application
FROM nextest AS tester
WORKDIR /test
COPY . /test/src/
COPY --from=builder \
    /build/archiving-and-reusing-builds.tar.zst \
    /test/archiving-and-reusing-builds.tar.zst
# We extract the build artifacts from the archive
RUN cargo nextest run --workspace-remap /test/src/ --extract-to /test/src/ --no-run --archive-file /test/archiving-and-reusing-builds.tar.zst
# We run the tests. We override the default target-dir to use the application binary,
# otherwise it would be created in a temporary directory and we wouldn't be able to 
# copy it in the next stage.
RUN cargo nextest run --workspace-remap /test/src/ --target-dir-remap /test/src/target/ --cargo-metadata /test/src/target/nextest/cargo-metadata.json --binaries-metadata /test/src/target/nextest/binaries-metadata.json
RUN mkdir -p /app/bin/; cp -l /test/src/target/debug/archiving-and-reusing-builds /app/bin/archiving-and-reusing-builds
CMD ["/app/bin/archiving-and-reusing-builds"]

## Fourth stage to run the application in production
FROM nextest AS runtime
WORKDIR /app
# We take the application binary from the tester stage to ensure the binary we 
# use has passed the tests.
COPY --from=tester /app/bin/archiving-and-reusing-builds /app/
CMD ["/app/archiving-and-reusing-builds"]
```

</CodeBlock>

<Callout type="info">

**NOTICE**: The application must contain at least one integration test in order
include the binary in the archive. See this [issue](https://github.com/nextest-rs/nextest/issues/423)
for more info.

</Callout>

## Running Container Without Sudo

By default docker is installed and runs containers as `root`. If you build this image:

<CodeBlock lang="dockerfile">

```dockerfile
FROM rust:latest
WORKDIR /app
RUN cargo init
RUN cargo build --release
CMD ["./target/release/app"]
```

</CodeBlock>

And you run it with the following command:

<CodeBlock lang="console">

```console
docker build -t docker-rust-app-running-with-root .
docker run --rm -it docker-rust-app-running-with-root whoami
```

</CodeBlock>

You will see it's executed as `root`.

You should not execute containers as `root` because of:

1. **The Principle of Least Privilege**: This is a security concept that encourages the minimal user permission level necessary to perform a task. Running containers as root goes against this principle because if a process inside the container can run with root privileges, it can execute any command inside the container, which could be dangerous if the container gets compromised.

2. **Host System Vulnerability**: Containers are designed to be isolated from the host system. However, there are ways that a container could potentially interact with the host, particularly if there are misconfigurations or vulnerabilities in the container runtime or the host's kernel. A container running as root might be able to exploit such vulnerabilities to gain control over the host system.

3. **Immutable Infrastructure**: Containers are often used as part of an immutable infrastructure, where container images are pre-built and should not change. Running as root makes it easier to make changes to the running container, which can lead to "configuration drift" and unexpected behavior.

4. **Accidental Damage**: Even if an attacker does not compromise the container, running as root increases the risk of accidental damage by the container's own applications or administrators. For example, a poorly crafted command could delete critical files or disrupt important processes.

There are some ways to avoid running the container as `root`. We will see all of them.

### Use the `USER` instruction

<CodeBlock lang="dockerfile">

```dockerfile
FROM rust:latest

WORKDIR /app

RUN cargo init
RUN cargo build --release

USER www-data

CMD ["./target/release/app"]
```

</CodeBlock>

You can add the `USER` instruction before the last command. In that example we
know that the base image already contains the user `www-data`.

<CodeBlock lang="console">

```console
docker run --rm -it docker-rust-app-running-with-root cat /etc/passwd | grep www-data
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
```

</CodeBlock>

But you can also create a specific user for your application:

<CodeBlock lang="dockerfile">

```dockerfile
FROM rust:latest

WORKDIR /app

RUN cargo init
RUN cargo build --release

RUN groupadd -r appuser
RUN useradd -r -u 1001 -g appuser appuser

USER appuser

CMD ["./target/release/app"]
```

</CodeBlock>

Using the `USER` instruction is considered a good practice because by default the container
will not run as root. In that example, docker will run the container as the user with the ID `1001`.

<Callout type="info">

The Linux Standard Base Core Specification defines three different ranges for
user IDs, the value from 0 to 99, 100 to 999, and 1000 and above. The first two
ranges are reserved for system users. All the regular users start from 1000.
It's also important to note that the user ID 0 is reserved for the root user and
Linux kernel uses the user id and group id to handle the permissions. The host
machine and the docker container might have the same user ID but different usernames.

</Callout>

If you run that container, `appuser` will have the same permissions as the user `1001`
in the host system, whatever it's the name of that user in the host machine.

### Use The `docker run --user` Argument

You can also overwrite the user running the container with the argument `--user`:

<CodeBlock lang="console">

```console
docker run --user www-data --rm -it docker-rust-app-running-with-root whoami
www-data
```

</CodeBlock>

In this example, even though the image is execute as root by default, it will be
executed as the `www-data` user.

Notice you can even use a non-existing user in both the host and the docker image.

<CodeBlock lang="console">

```console
$ docker run --user 1001 --rm -it docker-rust-app-running-with-root bash
I have no name!@895b0f6a3dbb:/app$ 
```

</CodeBlock>

All this solutions work but they all have a drawback: you need to know the user
ID at build time (when you build the docker image). You usually want to run the
container in different environments and sometimes you want to use a different
user ID for each environment. For example:

- **For development**: If you are using Ubuntu, your user ID is probably `1000`. When
you run the container locally you want to run it using that ID, so that you don't
have any problems with permissions.
- **For CI**: The servers you are using for continuous integration (for instance, GitHub runners)
might use an specif user. You could use some cache folders and maybe you need to
use the same user ID as the CI server.
- **For production**: You could create an specific user for your application and use that
user ID.

With the proposed solutions you would need to rebuild the docker image so that the
user ID inside the container is the same as the host user ID.

### Create The User At Runtime

There is al alternative to the previous solutions that make it possible to **run the
container with different user IDs without rebuilding the image**.

<CodeBlock lang="dockerfile">

```dockerfile

## Compile su-exec
FROM docker.io/library/gcc:bookworm as gcc
COPY ./contrib/dev-tools/su-exec/ /usr/local/src/su-exec/
RUN cc -Wall -Werror -g /usr/local/src/su-exec/su-exec.c -o /usr/local/bin/su-exec; chmod +x /usr/local/bin/su-exec

## Application
FROM rust:bookworm as builder
WORKDIR /app
RUN cargo init
RUN cargo build --release
CMD ["./target/release/app"]

## Runtime
FROM gcr.io/distroless/cc-debian12:debug as runtime
RUN ["/busybox/cp", "-sp", "/busybox/sh","/busybox/cat","/busybox/ls","/busybox/env", "/bin/"]

COPY --from=builder /app/target/release/app /usr/local/bin/app
COPY --from=gcc --chmod=0555 /usr/local/bin/su-exec /bin/su-exec
COPY --chmod=0555 ./share/container/entry_script_sh /usr/local/bin/entry.sh

ENTRYPOINT ["/usr/local/bin/entry.sh"]
CMD ["/usr/local/bin/app"]

```

</CodeBlock>

This is the approach we use in Torrust. You run the docker as `root` but we always
use an entrypoint. That entrypoint creates a new user with an ID provided as an
environment variable.

The `entry.sh` script is always called when you run the container because it's
defined as an `ENTRYPOINT`. This "middleware" script creates the user if it does
not exist, and then runs the application using the [su-exec](https://github.com/ncopa/su-exec)
program to change the user ID it's executed with.

__For those who are interested here is our: [entry script](https://github.com/torrust/torrust-tracker/blob/develop/share/container/entry_script_sh).__

As you can read on the su-exec documentation:

<Callout type="info">

"su-exec" is a simple tool that will simply execute a program with different privileges.
The program will be executed directly and not run as a child, like su and sudo does,
which avoids TTY and signal issues (see below).

Notice that su-exec depends on being run by the root user, non-root users do not
have permission to change uid/gid.

</Callout>

The advantage of this approach is that you don't have to worry about the user ID
when you build the docker image. You can run the container as root and then use
the entrypoint to create the user and run the application with that user.

The entrypoint also ensures that the application is executed with the correct
permissions. You cannot run the application as root unless you explicitly set
the environment variable `USER_ID` to `0`.

If you want to contribute with Torrust we think that we could simplify the Containerfile
if the "su-exec" command were available in Rust. Because we could reuse one of the
Rust docker images we are using for other docker stages.

## Decomposing the Torrust Tracker Containerfile

Finally we can explain line by line what the [Torrust Tracker Containerfile](https://github.com/torrust/torrust-tracker/blob/develop/Containerfile) does.

Rust apps can be build in `debug` or `release` mode. The `Containerfile` builds both
modes and then it runs the tests for both modes. We have removed the `debug` mode
to keep the example short. But it's almost the same code. For the `release` mode
the flag `--release` is added to some commands.

We can abstract way the stages:

<CodeBlock lang="dockerfile">

```dockerfile
## Base Builder Image
FROM rust:bookworm as chef
# Install tools needed to build the application: cargo-chef cargo-nextest

## Tester Image
FROM rust:slim-bookworm as tester
# Install tools needed to test the application: cargo-nextest

## Su Exe Compile
FROM docker.io/library/gcc:bookworm as gcc
# Compiles the su-exec program which is used at runtime to change the user running the container.

## Chef Prepare (look at project and see wat we need)
FROM chef AS recipe
# Prepare the info needed to build and cache cargo dependencies

## Cook (release)
FROM chef AS dependencies
# Re-hydrate the minimum project skeleton identified by `cargo chef prepare` and build it to cache dependencies

## Build Archive (release)
FROM dependencies AS build
# build and archive the application

# Extract and Test (release)
FROM tester as test
# Extract the application from the archived artifacts and run the tests.
# And copy the binary to an specified location so it can be used in the `release` 
# stage.

## Runtime
FROM gcr.io/distroless/cc-debian12:debug as runtime
# Minimal image to run the app in production.
# Includes the entrypoint to setup and run the application with a different user Id.

## Release Runtime
FROM runtime as release
# Runtime for release mode. It copies the binary from the `test` stage and runs it
# via the entrypoint added in the `runtime` stage.
```

</CodeBlock>

Let's see each stage individually.

First, we have a base builder image where we install basic tools to build the application.

<CodeBlock lang="dockerfile">

```dockerfile
## Base Builder Image
FROM rust:bookworm as chef
WORKDIR /tmp
RUN curl -L --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/cargo-bins/cargo-binstall/main/install-from-binstall-release.sh | bash
RUN cargo binstall --no-confirm cargo-chef cargo-nextest
```

</CodeBlock>

There is nothing really strange here. We use the latest Debian “bookworm” at the time
of writing this article. And we also use `binstall` to install the binaries, since
both of these binaries are written in Rust.

The next stage is the base Tester Image. It only installs `cargo-nextest` to run the tests.
We also use the Debian “bookworm” but the `slim` variant, since we don't need too much
to only run the tests.

<CodeBlock lang="dockerfile">

```dockerfile
## Base Tester Image
FROM rust:slim-bookworm as tester
WORKDIR /tmp
RUN apt-get update; apt-get install -y curl; apt-get autoclean
RUN curl -L --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/cargo-bins/cargo-binstall/main/install-from-binstall-release.sh | bash
RUN cargo binstall --no-confirm cargo-nextest
```

</CodeBlock>

The following is another stage used just to compile the small program [su-exec](https://github.com/ncopa/su-exec) that we use to change the user ID when we run the container. The program is written 
in C code, so we only need a C compiler.

<CodeBlock lang="dockerfile">

```dockerfile
## Su Exe Compile
FROM docker.io/library/gcc:bookworm as gcc
COPY ./contrib/dev-tools/su-exec/ /usr/local/src/su-exec/
RUN cc -Wall -Werror -g /usr/local/src/su-exec/su-exec.c -o /usr/local/bin/su-exec; chmod +x /usr/local/bin/su-exec
```

</CodeBlock>

From this point, we start building the application. First, we build the dependencies
and we cache them into an independent stage.

The first stage it's only to "build the recipe" which is the name that `cargo chef`
gives to the process of collecting all the information needed to build the application
dependencies.

<CodeBlock lang="dockerfile">

```dockerfile
## Chef Prepare (look at project and see wat we need)
FROM chef AS recipe
WORKDIR /build/src
COPY . /build/src
RUN cargo chef prepare --recipe-path /build/recipe.json
```

</CodeBlock>

Then, cargo dependencies are built using using the recipe created in the previous stage.
`cargo nextest` has a subcommand to generate and archive the artifact of the build.
We are using it to package and pass the application from one stage to another.

Dependencies are archived but they are not used independently. That line just test
that the dependencies could be archived.

<CodeBlock lang="dockerfile">

```dockerfile
## Cook (release)
FROM chef AS dependencies
WORKDIR /build/src
COPY --from=recipe /build/recipe.json /build/recipe.json
RUN cargo chef cook --tests --benches --examples --workspace --all-targets --all-features --recipe-path /build/recipe.json --release
RUN cargo nextest archive --tests --benches --examples --workspace --all-targets --all-features --archive-file /build/temp.tar.zst --release  ; rm -f /build/temp.tar.zst
```

</CodeBlock>

In the following stage we build the application. The `cargo nextest archive` command builds
and archives the application.

<CodeBlock lang="dockerfile">

```dockerfile
## Build Archive (release)
FROM dependencies AS build
WORKDIR /build/src
COPY . /build/src
RUN cargo nextest archive --tests --benches --examples --workspace --all-targets --all-features --archive-file /build/full-example.tar.zst --release
```

</CodeBlock>

Now, that we have successfully built the application, we can run the tests. We
extract the application from the archived artifacts and run the tests.

<CodeBlock lang="dockerfile">

```dockerfile
## Extract and Test (release)
FROM tester as test
WORKDIR /test
COPY . /test/src
COPY --from=build \
  /build/full-example.tar.zst \
  /test/full-example.tar.zst
# It compiles without running the tests to make sure there are no problems with
# the archive.
RUN cargo nextest run --workspace-remap /test/src/ --extract-to /test/src/ --no-run --archive-file /test/full-example.tar.zst
# We actually run the tests
RUN cargo nextest run --workspace-remap /test/src/ --target-dir-remap /test/src/target/ --cargo-metadata /test/src/target/nextest/cargo-metadata.json --binaries-metadata /test/src/target/nextest/binaries-metadata.json
# We copy the application binary to an specified location so we can get it from
# there in the final runtime stage.
RUN mkdir -p /app/bin/; cp -l /test/src/target/release/full-example /app/bin/full-example
# Since we use su-exec. We need to run the container as root.
RUN chown -R root:root /app; chmod -R u=rw,go=r,a+X /app; chmod -R a+x /app/bin
```

</CodeBlock>

Once the application has been built and tested we prepare the runtime. We start
from a minimum "distroless" image variant. We add an entrypoint to setup the application
and also to make sure we don't use the `root` user to run it. The entrypoint just
run the application provided as an argument, in our case, our application in `debug` or
`release` mode, depending of which one you want to run.

<CodeBlock lang="dockerfile">

```dockerfile
## Runtime
FROM gcr.io/"distroless/cc-debian12:debug as runtime
RUN ["/busybox/cp", "-sp", "/busybox/sh","/busybox/cat","/busybox/ls","/busybox/env", "/bin/"]
COPY --from=gcc --chmod=0555 /usr/local/bin/su-exec /bin/su-exec
ARG USER_ID=1000
COPY --chmod=0555 ./share/container/entry_script_sh /usr/local/bin/entry.sh
ENTRYPOINT ["/usr/local/bin/entry.sh"]
```

</CodeBlock>

Finally, we add the `CMD` instruction so we can execute the application. The
entrypoint script only runs the application you pass as the first argument. This
stage is not merge into the previous because in the final version there are two
final runtimes: `debug` and `release`.

<CodeBlock lang="dockerfile">

```dockerfile
## Release Runtime
FROM runtime as release
COPY --from=test /app/ /usr/
CMD ["/usr/bin/full-example"]
```

</CodeBlock>

## Other Good Practices

- **Minimalism**: We strive to keep our Dockerfiles lean by only including essential components.
- **Explicit versions**: At least with the minor version number, so you do not get unexpected broken compatibility but you can apply security and bug patches.
- **Regular Updates**: Periodically updating the base image and dependencies to benefit from security patches and updates.
- **Health Checks**: Implementing Docker health checks to monitor the state and health of our containerized application.

## Other Considerations

- Since we are using `su-exec` we need to run the containers as root. We have not 
check if this configuration work when you setup docker in [Rootless mode](https://docs.docker.com/engine/security/rootless/).
- Although we mostly mention docker in this article, the `Containerfile` works
with other tools to manage containers like [Podman](https://podman.io/).

## Links

Simple tutorials:

- [Docker image for Rust backend: learn how to](https://tms-dev-blog.com/lean-docker-image-for-rust-backend/)
- [Getting Started with Rust and Docker](https://collabnix.com/getting-started-with-rust-and-docker/) by [Ajeet Raina](https://collabnix.com/author/ajeetraina/).
- [Rust Docker Tutorial](https://tutorialedge.net/rust/rust-docker-tutorial/).
- [Build your Rust image](https://docs.docker.com/language/rust/build-images/)

Comprehensive articles like this:

- [First steps with Docker + Rust](https://dev.to/rogertorres/first-steps-with-docker-rust-30oi) by [Roger Torres](https://dev.to/rogertorres).

Demos:

- [Simple dockerized Rust/Axum based HTTP server for demo purposes](https://github.com/hseeberger/hello-rs) by [
  Heiko Seeberger](https://github.com/hseeberger).

Development using Docker:

- [Rust Development with Docker](https://www.youtube.com/watch?v=kh1GMRFkzT4&t=2s).
- [Develop your Rust application](https://docs.docker.com/language/rust/develop/)

Deployments using docker:

- [How I deployed a Rust web-app using the Rocket framework with Docker](https://medium.com/@anirudhmurali/how-i-deployed-a-rust-web-app-using-the-rocket-framework-with-docker-424da99b1d8a)
- [Deploy a Rust Web App With Rocket](https://www.koyeb.com/tutorials/deploy-a-rust-web-app-with-rocket).

Minimum sized container images:

- [min-sized-rust](https://github.com/johnthagen/min-sized-rust#containers) by [johnthagen](https://github.com/johnthagen).

Caching dependencies:

- [Packaging a Rust web service using Docker](https://blog.logrocket.com/packaging-a-rust-web-service-using-docker/).
- [Plumbing the Deps of the Crate: Caching Rust Docker Builds](https://dev.to/mgattozzi/plumbing-the-deps-of-the-crate-caching-rust-docker-builds-2e48).
- [Cache Rust dependencies with Docker build](https://stackoverflow.com/questions/58473606/cache-rust-dependencies-with-docker-build).

Don't run containers as root:

- [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user).
- [Run the Docker daemon as a non-root user (Rootless mode)](https://docs.docker.com/engine/security/rootless/).
- [Docker daemon attack surface](https://docs.docker.com/engine/security/#docker-daemon-attack-surface).
- [Why Processes In Docker Containers Shouldn't Run as Root](https://www.howtogeek.com/devops/why-processes-in-docker-containers-shouldnt-run-as-root/).
- [The Ultimate Docker Security Best Practices for Your Node.js Application](https://www.clickittech.com/devops/docker-security-best-practices/).
- [Should I run things inside a docker container as non root for safety?](https://stackoverflow.com/questions/68155641/should-i-run-things-inside-a-docker-container-as-non-root-for-safety).
- [Docker Tips: Running a Container With a Non Root User](https://betterprogramming.pub/running-a-container-with-a-non-root-user-e35830d1f42a) by [Luc Juggery](https://lucjuggery.medium.com/).
- [Basic Setup and Use of Podman in a Rootless environment](https://github.com/containers/podman/blob/main/docs/tutorials/rootless_tutorial.md).
- [Understanding how uid and gid work in Docker containers](https://medium.com/@mccode/understanding-how-uid-and-gid-work-in-docker-containers-c37a01d01cf).

## Conclusion

We hope you find this guide useful. Let us know what you think about it!

We want this article to be a collective effort to document good practices about
Rust and Containers, so we would like to have reviews, comments, new sections, etcetera.

If you see something wrong or you want to contribute by:

- Adding new sections.
- Fixing typos.
- Making it clearer.
- Adding links.
- Or whatever you think it could be interesting to have,

please open an [issue](https://github.com/torrust/torrust-website/issues) or a [PR](https://github.com/torrust/torrust-website/pulls).

If you have any questions or issues please open an issue on the corresponding repository:

- Torrust Tracker: <https://github.com/torrust/torrust-tracker/issues>
- Torrust Index: <https://github.com/torrust/torrust-index-backend/issues>
- Torrust Website: <https://github.com/torrust/torrust-index-frontend/issues>
- Containerizing Rust Applications Examples: <https://github.com/torrust/containerizing-rust-apps-examples>

We very welcome any contributions to the projects or [this article](https://github.com/torrust/torrust-website/issues).
