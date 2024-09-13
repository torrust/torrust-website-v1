---
title: How To Run A Local Demo
slug: how-to-run-a-local-demo
coverImage: /images/posts/mandelbrot-set-periods-torrent-screenshot.png
date: 2023-07-11T15:28:28.769Z
updated: 2023-07-11T15:28:29.783Z
excerpt: You can easily run the Torrust Index demo on your computer easily with Git and Docker.
contributor: Jose Celano
contributorSlug: jose-celano
tags:
  - Demo
  - Tutorial
  - Guide
hidden: false
---

<script>
  import Toc from 'svelte-toc';
  import Callout from "$lib/components/molecules/Callout.svelte";
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
  import Image from "$lib/components/atoms/Image.svelte";
  import PostBody from "$lib/components/molecules/PostBody.svelte";
  import PostContainer from "$lib/components/molecules/PostContainer.svelte";
  import PostTable from "$lib/components/molecules/PostTable.svelte";
</script>

<PostContainer>
<PostTable>
<Toc
  title=""
  --toc-active-color="rgba(255, 49, 0, 0.96)"
  --toc-li-hover-color="rgba(255, 49, 0, 0.96)"
  --toc-active-bg="transparent"
>
## Table of Contents

- [Requirements](#requirements)
- [Running the demo](#running-the-demo)
- [Application Setup](#application-setup)
- [Advanced Setup](#advanced-setup)
- [Conclusion](#conclusion)

</Toc>
</PostTable>

<PostBody>

If you want to try the Torrust Index **demo** on your computer, you can easily run it with Git and Docker. This guide will explain how to setup the demo on your own computer in **a few seconds**.

## Requirements

You are going to need the following tools:

- Git
- Docker

At the time of writing, we are using Git version `2.39.2` and Docker version `26.1.3`, but it should work with any recent version.

By default, the demo uses SQLite3 as database driver, but you can also use MySQL. If you want to use SQLite3, you do not need to install anything else. If you want to take a look at the internal database structure or data, you can install [DB Browser for SQLite](https://sqlitebrowser.org/).

<Callout type="info">
  Although we use some small bash scripts, you can run the demo on different operating systems by executing the docker-compose command manually. We have tested it on Linux.
</Callout>

## Running the demo

We are going to use a temporary directory to run the demo. You can install the demo with the following commands:

<CodeBlock lang="terminal">

```s
mkdir -p /tmp/torrust \\
  && cd /tmp/torrust \\
  && git clone git@github.com:torrust/torrust-compose.git \\
  && cd torrust-compose/demo \\
  && ./bin/install.sh
```

</CodeBlock>

To start the application:

<CodeBlock lang="terminal">

```s
./bin/start.sh
```

</CodeBlock>

To stop the application:

<CodeBlock lang="terminal">

```s
./bin/stop.sh
```

</CodeBlock>

After starting the demo you can check that all container are running with the following command:

<CodeBlock lang="output">

```s
$ docker ps
CONTAINER ID   IMAGE                       COMMAND                  CREATED         STATUS                            PORTS                                                                                                      NAMES
e380a435eede   torrust/index-gui:develop   "/usr/local/bin/entrypoint.sh"   4 seconds ago   Up 3 seconds (health: starting)   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp, 0.0.0.0:24678->24678/tcp, :::24678->24678/tcp                   torrust-index-gui-1
db8f7c679b66   torrust/index:develop       "/usr/local/bin/entrypoint.sh"   5 seconds ago   Up 3 seconds (health: starting)   0.0.0.0:3001->3001/tcp, :::3001->3001/tcp                                                                  torrust-index-1
820720c37d80   torrust/tracker:develop     "/usr/local/bin/entrypoint.sh"   5 seconds ago   Up 4 seconds (health: starting)   1313/tcp, 0.0.0.0:1212->1212/tcp, :::1212->1212/tcp, 7070/tcp, 0.0.0.0:6969->6969/udp, :::6969->6969/udp   torrust-tracker-1
a9668e78f3cc   mysql:8.0                   "docker-entrypoint.s…"   5 seconds ago   Up 4 seconds (health: starting)   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp                                                       torrust-mysql-1
c10ad938b283   dockage/mailcatcher:0.8.2   "entrypoint mailcatcher"   5 seconds ago   Up 4 seconds                      0.0.0.0:1025->1025/tcp, :::1025->1025/tcp, 0.0.0.0:1080->1080/tcp, :::1080->1080/tcp                       torrust-mailcatcher-1

```

</CodeBlock>

<Callout type="info">
  IMPORTANT! We use the latest commit from the develop branches of the Torrust repositories. If you want to use the latest stable version, you can change the tag for the docker images in the `docker-compose.yml` file.
</Callout>

Once the demo is running, you go to <http://localhost:3000/> to start using it.

## Application Setup

The application has some public pages like the torrent list or torrent details pages. But other pages require authentication. To access those pages you need to create an account. You can do it from the signup page:

<http://localhost:3000/signup>

<Callout type="info">
  The first user registered will be the <code>admin</code> user. The application only has one admin user.
</Callout>

The application is very easy to use but you can find comprehensive documentation in the following links:

- [Torrust Index GUI User's Guide](https://torrust.github.io/torrust-index-gui-user-guide/)
- [Torrust Index GUI](https://github.com/torrust/torrust-index-gui/blob/develop/docs/index.md)
- [Torrust Index](https://docs.rs/torrust-index>)
- [Torrust Tracker](https://docs.rs/torrust-tracker)

## Advanced Setup

You can modify the configuration of the demo to use different ports, database drivers, etcetera. But we are going to use the default configuration in this guide.

If you want to change the configuration for the Tracker or the Index Backend, you can do it by modifying the `config-tracker.local.toml` or `config-index.local.toml` files and stopping (`./bin/stop.sh`) and starting (`./bin/start.sh`) the docker containers again.

Refer to the documentation of the corresponding application to know more about the configuration options:

- [Torrust Tracker](https://github.com/torrust/torrust-tracker)
- [Torrust Index](https://github.com/torrust/torrust-index)
- [Torrust Index GUI](https://github.com/torrust/torrust-index-gui)

## Conclusion

That's it. Enjoy the demo! We will publish a new blog post soon explaining how to use the demo for basics tasks like uploading a torrent, adding categories or tags, etcetera.

If you have any questions or issues please open an issue on the corresponding repository:

- [Torrust Tracker](https://github.com/torrust/torrust-tracker/issues)
- [Torrust Index](https://github.com/torrust/torrust-index/issues)
- [Torrust Index GUI](https://github.com/torrust/torrust-index-gui/issues)

We very welcome any contributions to the project!

</PostBody>
</PostContainer>
