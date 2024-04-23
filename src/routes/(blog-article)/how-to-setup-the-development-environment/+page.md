---
title: How To Setup The Dev Env
slug: how-to-setup-the-development-environment
coverImage: /images/posts/development-environment.png
date: 2023-07-11T12:29:04.295Z
excerpt: If you want to contribute to the Torrust Index, this article explains how to setup a development environment with the latest versions for all services.
contributor: Jose Celano
contributorSlug: jose-celano
tags:
  - Documentation
  - Tutorial
  - Guide
  - Development
  - Setup
hidden: false
---

<script>
  import Callout from "$lib/components/molecules/Callout.svelte";
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
  import Image from "$lib/components/atoms/Image.svelte";
  import PostBody from "$lib/components/molecules/PostBody.svelte";
  import PostContainer from "$lib/components/molecules/PostContainer.svelte";
  import PostTable from "$lib/components/molecules/PostTable.svelte";
</script>

<PostContainer>
<PostTable>

## Table of Contents

- [Introduction](#introduction)
- [Common Dependencies](#common-dependencies)
- [Set Up the Torrust Tracker](#set-up-the-torrust-tracker)
- [Set Up the Torrust Backend](#set-up-the-torrust-backend)
- [Set Up the Torrust Frontend](#set-up-the-torrust-frontend)
- [Application Setup](#application-setup)
- [Development tools](#development-tools)
- [Conclusion](#conclusion)

</PostTable>

<PostBody>

## Introduction

Before explaining how to setup the development environment, it's important to understand how the Torrust Index works. The Torrust Index is composed of multiple services, each one with its own codebase and repository. The services are:

- A [BitTorrent Tracker](https://github.com/torrust/torrust-tracker), which is responsible for tracking the torrents and providing the peers to the clients.
- The [Backend](https://github.com/torrust/torrust-index-backend), which is a REST API that provides the data to the frontend.
- And the [Frontend](https://github.com/torrust/torrust-index-frontend), which is a webapp that displays the data to the user.

<Image src="/images/posts/torrust-architecture.png" alt="Torrust Architecture" />

You do not need to setup all services to contribute to the Torrust Index, but in this article we will explain how to setup the full development environment, which includes all services. Sometimes you might want to contribute with a full feature that involves multiple services, so it's useful to have the full development environment setup.

Setting up the development environment requires to setup the three main services.

First, we need to create the folder (in this example, a temp folder) where we will store the repositories of our services.

<CodeBlock lang="terminal">

```bash
mkdir -p ~/Tmp/torrust
cd ~/Tmp/torrust
```

</CodeBlock>

<Callout type="info">
  This guide used bash commands and it has been tested on Ubuntu Ubuntu 23.04. You should not encounter any problem if you are using a different Linux distribution, but there are some reported issues with Windows compilation for the Tracker. The installation scripts are very simple, so you can easily adapt them to your system or run the commands manually.
</Callout>

## Common Dependencies

If you are using SQLite3 as database driver for the Tracker or the Backend, you will need to install the following dependency:

<CodeBlock lang="terminal">

```bash
sudo apt-get install libsqlite3-dev
```

</CodeBlock>

  <!-- Colocarle la razon de su uso migracion de datos -->

## Set Up the Torrust Tracker

At the time of writing, the Torrust Tracker requires (was tested with this version of rust):

- rustc 1.72.0-nightly (839e9a6e1 2023-07-02)

Now, we will build the tracker and create the storage folders where persistent data like databases will be stored:

<CodeBlock lang="terminal">

```bash
  git clone https://github.com/torrust/torrust-tracker.git \
  && cd torrust-tracker \
  && cargo build --release \
  && mkdir -p ./storage/tracker/lib/database \
  && mkdir -p ./storage/tracker/lib/tls
```

</CodeBlock>

When executing the code it may not work for you , but it can be solved as easy as putting a \ at the end of each command.

You can run the Tracker with the following commands:

<CodeBlock lang="terminal">

```bash
cargo run
```

</CodeBlock>

<Callout type="info">
  You do not need to change the default values for development.
</Callout>

After running the Tracker with `cargo run` you should see the following output:

<CodeBlock lang="output">

```s
       Finished `dev` profile [optimized + debuginfo] target(s) in 0.10s
     Running `target/debug/torrust-tracker`
Loading default configuration file: `./share/default/config/tracker.development.sqlite3.toml` ...
2024-04-22T16:24:23.241961292+01:00 [torrust_tracker::bootstrap::logging][INFO] logging initialized.
2024-04-22T16:24:23.242613018+01:00 [UDP TRACKER][INFO] Starting on: udp://0.0.0.0:6969
2024-04-22T16:24:23.242649758+01:00 [torrust_tracker::bootstrap::jobs][INFO] TLS not enabled
2024-04-22T16:24:23.242670038+01:00 [HTTP TRACKER][INFO] Starting on: http://0.0.0.0:7070
2024-04-22T16:24:23.242744307+01:00 [HTTP TRACKER][INFO] Started on: http://0.0.0.0:7070
2024-04-22T16:24:23.242753177+01:00 [torrust_tracker::bootstrap::jobs][INFO] TLS not enabled
2024-04-22T16:24:23.242834227+01:00 [API][INFO] Starting on http://127.0.0.1:1212
2024-04-22T16:24:23.242848277+01:00 [API][INFO] Started on http://127.0.0.1:1212
2024-04-22T16:24:23.242864747+01:00 [HEALTH CHECK API][INFO] Starting on: http://127.0.0.1:1313
2024-04-22T16:24:23.242897537+01:00 [HEALTH CHECK API][INFO] Started on: http://127.0.0.1:1313
```

</CodeBlock>


<Callout type="info">
  Every time you change the configuration you need to restart the service.
</Callout>

By default, if you don't specify any Config.toml file, the application will use this:

<CodeBlock >

```s

Loading default configuration file: `./share/default/config/tracker.development.sqlite3.toml` ...

```
</CodeBlock >

You can't change that file because it's a template included in the repo. If you want to set your custom configuration, you can either:

- 1.- Use a different path for the config file.
- 2.- Inyect the configuration with an env var.

## Custom config file

First, copy the template file to the storage folder:

<CodeBlock lang="terminal">

```bash
cp share/default/config/tracker.development.sqlite3.toml storage/tracker/etc/tracker.toml
```

</CodeBlock>

Then, you can change any value and finally run the tracker with:

<CodeBlock lang="terminal">

```bash
TORRUST_TRACKER_PATH_CONFIG="./storage/tracker/etc/tracker.toml" cargo run
```

</CodeBlock>

That would give you this outout:

<CodeBlock lang="output">

```s
TORRUST_TRACKER_PATH_CONFIG="./storage/tracker/etc/tracker.toml" cargo run
    Finished `dev` profile [optimized + debuginfo] target(s) in 0.09s
     Running `target/debug/torrust-tracker`
Loading configuration file: `./storage/tracker/etc/tracker.toml` ...
2024-04-22T16:32:57.035457075+01:00 [torrust_tracker::bootstrap::logging][INFO] logging initialized.
2024-04-22T16:32:57.036048971+01:00 [UDP TRACKER][INFO] Starting on: udp://0.0.0.0:6969
2024-04-22T16:32:57.036079671+01:00 [torrust_tracker::bootstrap::jobs][INFO] TLS not enabled
2024-04-22T16:32:57.036117731+01:00 [HTTP TRACKER][INFO] Starting on: http://0.0.0.0:7070
2024-04-22T16:32:57.036209310+01:00 [HTTP TRACKER][INFO] Started on: http://0.0.0.0:7070
2024-04-22T16:32:57.036218550+01:00 [torrust_tracker::bootstrap::jobs][INFO] TLS not enabled
2024-04-22T16:32:57.036280190+01:00 [API][INFO] Starting on http://127.0.0.1:1212
2024-04-22T16:32:57.036283750+01:00 [API][INFO] Started on http://127.0.0.1:1212
2024-04-22T16:32:57.036301960+01:00 [HEALTH CHECK API][INFO] Starting on: http://127.0.0.1:1313
2024-04-22T16:32:57.036385919+01:00 [HEALTH CHECK API][INFO] Started on: http://127.0.0.1:1313

```

</CodeBlock>

## Inyect the configuration with an env var

You can also inject the configuration with:

<CodeBlock lang="terminal">

```bash
TORRUST_TRACKER_CONFIG=`cat share/default/config/tracker.development.sqlite3.toml` cargo run
```

</CodeBlock>


NOTICE: we load the whole file into the env var. This is not useful for development, but it's a different way to inject the configuration. It's used when running the tracker with docker.

The response should be like this:

<CodeBlock lang="json">

```json
{
	"torrents": 0,
	"seeders": 0,
	"completed": 0,
	"leechers": 0,
	"tcp4_connections_handled": 0,
	"tcp4_announces_handled": 0,
	"tcp4_scrapes_handled": 0,
	"tcp6_connections_handled": 0,
	"tcp6_announces_handled": 0,
	"tcp6_scrapes_handled": 0,
	"udp4_connections_handled": 0,
	"udp4_announces_handled": 0,
	"udp4_scrapes_handled": 0,
	"udp6_connections_handled": 0,
	"udp6_announces_handled": 0,
	"udp6_scrapes_handled": 0
}
```

</CodeBlock>

For more details about the Torrust Tracker, check the [Tracker documentation](https://docs.rs/torrust-tracker/).

## Set Up the Torrust Backend

At the time of writing, the Backend requires:

- rustc 1.77.1-nightly (839e9a6e1 2024-03-26)

To run the tests you will also need to install a command line tool to handle torrent files called [imdl](https://github.com/casey/intermodal). You can install it with the following command:

<CodeBlock lang="terminal">

```bash
cargo install imdl
```

</CodeBlock>

You will also need to install a tool for database migrations if you are going to make changes to the database schema. We are using [SQLx](https://github.com/launchbadge/sqlx). You can install it with the following command:

<CodeBlock lang="terminal">

```bash
cargo install sqlx-cli
```

</CodeBlock>

We will now put the torrust-backend repository, cloning it and saving it in the torrust folder:

<CodeBlock lang="terminal">

```bash
  git clone https://github.com/torrust/torrust-index.git \\
  cd torrust-index \\
  && cargo build --release \\
  && mkdir -p ./storage/database
```

</CodeBlock>

You can run the Tracker Backend with the following commands:

<CodeBlock lang="terminal">

```bash
TORRUST_INDEX_API_CORS_PERMISSIVE=true cargo run
```

</CodeBlock>

As you can see we are using the environment variable `TORRUST_IDX_BACK_CORS_PERMISSIVE` to enable a permissive CORS policy. The default port for the Backend is `3001` and for the web server serving the frontend application is `3000`. Since they are different ports, we need to tell the backend to allow request from a different port so that the frontend can make request to the API. To know more about CORS, check the [Mozilla CORS documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).


After running the Backend with `cargo run` you should see the following output:

<CodeBlock lang="output">

```s
2023-07-11T11:54:17.553899587+01:00 [torrust_index_backend::web::api::server][INFO] Starting API server with net config: 0.0.0.0:3001 ...
2023-07-11T11:54:17.553946897+01:00 [torrust_index_backend::web::api::server][INFO] API server listening on http://0.0.0.0:3001
```

</CodeBlock>

You should be able to load the API entrypoint on <http://0.0.0.0:3001/>

<Image src="/images/posts/torrust-backend-api-entrypoint-response-screenshot.png" alt="Screenshot of Torrust Backend API entrypoint response" />

For more details about the Torrust Index Backend, check the [Index Backend documentation](https://docs.rs/torrust-index-backend/).

## Set Up the Torrust Frontend

At the time of writing, the Frontend requires:

- Node: `^21.7.3`

The frontend is a [Nuxt](https://nuxt.com/) application.

The last repository we need to upload is the torrust-index-gui repository . Remember to install Node.js and we need to be in the torrust folder to clone the repository.

<CodeBlock lang="terminal">

```bash
git clone https://github.com/torrust/torrust-index-gui.git \
cd torrust-index-gui.git \
npm install \
npm run dev \
```

</CodeBlock>



You should see the following output:

<Image src="/images/posts/
running-torrust-frontend-in-dev-mode.png" alt="Screenshot of Torrust Index Frontend running from the terminal" />

Go to <http://localhost:3000/torrents> and you should see the torrent list page page:

<Image src="/images/posts/index-screenshot-torrent-list-page.png" alt="Screenshot of torrent list page on the browser" />

For more details about the Torrust Index Frontend, check the Index [Frontend documentation](https://github.com/torrust/torrust-index-frontend).

## Application Setup

There are some public pages like the torrent list or torrent details pages. But there are some pages that require authentication like the admin pages or the pages for uploading or editing torrents.

To access those pages you need to create an account. You can do it from the signup page:

<http://localhost:3000/signup>

<Callout type="info">
  The first user created will be the <code>admin</code> user.
</Callout>

## Development tools

We found some tools very useful to develop the Torrust Tracker and Index. We hope you find them useful too.

- DB Browser for SQLite: <https://sqlitebrowser.org/>
- BitTorrent client: qBittorrent <https://www.qbittorrent.org/>
- Torrent file editor: imdl <https://github.com/casey/intermodal>
- DaisyUI component library: <https://daisyui.com/components/>

## Conclusion

As you can see, the Torrust Tracker and Index are very easy to set up. We hope you find this guide useful. You might have problems:

- Setting up some of the projects on Windows. [We are working on it](https://github.com/torrust/torrust-tracker/issues/325).
- Or with some missing system dependencies.

If you have any questions or issues please open an issue on the corresponding repository:

- Torrust Tracker: <https://github.com/torrust/torrust-tracker/issues>
- Torrust Index Backend: <https://github.com/torrust/torrust-index-backend/issues>
- Torrust Index Frontend: <https://github.com/torrust/torrust-index-frontend/issues>

We very welcome any contributions to the project!

</PostBody>
</PostContainer>
