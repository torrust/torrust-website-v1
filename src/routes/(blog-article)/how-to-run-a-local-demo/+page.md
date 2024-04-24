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

- [Requirements](#requirements)
- [Running the demo](#running-the-demo)
- [Application Setup](#application-setup)
- [Advanced Setup](#advanced-setup)
- [Conclusion](#conclusion)

</PostTable>

<PostBody>

If you want to try the Torrust Index **demo** on your computer, you can easily run it with Git and Docker. This guide will explain how to setup the demo on your own computer in **a few seconds**.

## Requirements

You are going to need the following tools:

- Git
- Docker

At the time of writing, we are using Git version `2.39.2` and Docker version `24.0.3`, but it should work with any recent version.

By default, the demo uses SQLite3 as database driver, but you can also use MySQL. If you want to use SQLite3, you do not need to install anything else. If you want to take a look at the internal database structure or data, you can install [DB Browser for SQLite](https://sqlitebrowser.org/).

<Callout type="info">
  Although we use some small bash scripts, you can run the demo on different operating systems by executing the docker-compose command manually. We have tested it on Linux.
</Callout>

## Running the demo

We are going to use a temporary directory to run the demo. You can install the demo with the following commands:

<CodeBlock lang="terminal">

```s
mkdir -p ~/Tmp/torrust
cd ~/Tmp/torrust
git clone git@github.com:torrust/torrust-compose.git
cd torrust-compose/demo
./bin/install.sh
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
CONTAINER ID   IMAGE                            COMMAND                  CREATED         STATUS                            PORTS                                                                                            NAMES
9830cefede68   torrust/index-frontend:develop   "docker-entrypoint.s…"   4 seconds ago   Up 2 seconds                      0.0.0.0:3000->3000/tcp, :::3000->3000/tcp, 0.0.0.0:24678->24678/tcp, :::24678->24678/tcp         torrust-idx-fron-1
299ab7d3ebd4   torrust/index-backend:develop    "/app/main"              4 seconds ago   Up 2 seconds                      3000/tcp, 0.0.0.0:3001->3001/tcp, :::3001->3001/tcp                                              torrust-idx-back-1
9f20cbf5bba8   torrust/tracker:develop          "/app/torrust-tracker"   4 seconds ago   Up 2 seconds                      0.0.0.0:1212->1212/tcp, :::1212->1212/tcp, 0.0.0.0:6969->6969/udp, :::6969->6969/udp, 7070/tcp   torrust-tracker-1
ed782b08593b   mysql:8.0                        "docker-entrypoint.s…"   4 seconds ago   Up 2 seconds (health: starting)   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp                                             torrust-mysql-1
c4515a6f844a   dockage/mailcatcher:0.8.2        "entrypoint mailcatc…"   4 seconds ago   Up 2 seconds                      0.0.0.0:1025->1025/tcp, :::1025->1025/tcp, 0.0.0.0:1080->1080/tcp, :::1080->1080/tcp             torrust-mailcatcher-1
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

- [Torrust Index Frontend](https://github.com/torrust/torrust-index-frontend/blob/develop/docs/index.md)
- [Torrust Index Backend (including the REST API)](https://docs.rs/torrust-index-backend>)
- [Torrust Tracker](https://docs.rs/torrust-tracker)

## Advanced Setup

You can modify the configuration of the demo to use different ports, database drivers, etcetera. But we are going to use the default configuration in this guide.

If you want to change the configuration for the Tracker or the Index Backend, you can do it by modifying the `config-tracker.local.toml` or `config-idx-back.local.toml` files and stopping (`./bin/stop.sh`) and starting (`./bin/start.sh`) the docker containers again.

Refer to the documentation of the corresponding application to know more about the configuration options:

- [Torrust Tracker](https://github.com/torrust/torrust-tracker)
- [Torrust Index Backend](https://github.com/torrust/torrust-index-backend)

## Conclusion

That's it. Enjoy the demo! We will publish a new blog post soon explaining how to use the demo for basics tasks like uploading a torrent, adding categories or tags, etcetera.

If you have any questions or issues please open an issue on the corresponding repository:

- Torrust Tracker: <https://github.com/torrust/torrust-tracker/issues>
- Torrust Index Backend: <https://github.com/torrust/torrust-index-backend/issues>
- Torrust Index Frontend: <https://github.com/torrust/torrust-index-frontend/issues>

We very welcome any contributions to the project!

</PostBody>
</PostContainer>
