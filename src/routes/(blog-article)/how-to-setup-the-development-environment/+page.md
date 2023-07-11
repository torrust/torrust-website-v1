---
title: How To Setup The Dev Env
slug: how-to-setup-the-development-environment
coverImage: /images/posts/development-environment.png
date: 2023-07-11T12:29:04.295Z
excerpt: If you want to contribute to the Torrust Index, this article explains how to setup a development environment with the latest versions for all services.
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
</script>

- [Introduction](#introduction)
- [Common Dependencies](#common-dependencies)
- [Set Up the Torrust Tracker](#set-up-the-torrust-tracker)
- [Set Up the Torrust Backend](#set-up-the-torrust-backend)
- [Set Up the Torrust Frontend](#set-up-the-torrust-frontend)
- [Application Setup](#application-setup)
- [Development tools](#development-tools)
- [Conclusion](#conclusion)

## Introduction

Before explaining how to setup the development environment, it's important to understand how the Torrust Index works. The Torrust Index is composed of multiple services, each one with its own codebase and repository. The services are:

- A [BitTorrent Tracker](https://github.com/torrust/torrust-tracker), which is responsible for tracking the torrents and providing the peers to the clients.
- The [Backend](https://github.com/torrust/torrust-index-backend), which is a REST API that provides the data to the frontend.
- And the [Frontend](https://github.com/torrust/torrust-index-frontend), which is a webapp that displays the data to the user.

<Image src="/images/posts/torrust-architecture.png" alt="Torrust Architecture" />

You do not need to setup all services to contribute to the Torrust Index, but in this article we will explain how to setup the full development environment, which includes all services. Sometimes you might want to contribute with a full feature that involves multiple services, so it's useful to have the full development environment setup.

Setting up the development environment requires to setup the three main services.

First at all, we need to clone the repositories of the three services. We will clone them in a temporarily folder so you can follow this guide.

<CodeBlock lang="terminal">

```s
mkdir -p ~/Tmp/torrust
cd ~/Tmp/torrust
git clone git@github.com:torrust/torrust-tracker.git
git clone git@github.com:torrust/torrust-index-backend.git
git clone git@github.com:torrust/torrust-index-frontend.git
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

## Set Up the Torrust Tracker

At the time of writing, the Torrust Tracker requires:

- rustc 1.72.0-nightly (839e9a6e1 2023-07-02)

You can run the Tracker with the following commands:

<CodeBlock lang="terminal">

```s
cd torrust-tracker/
./bin/install.sh
cargo run
```

</CodeBlock>

The install script will generate:

- A `./config.toml` file with the default values.
- An empty `./storage/database/data.db` SQLite file for the database.

<Callout type="info">
  You do not need to change the default values for development.
</Callout>

After running the Tracker with `cargo run` you should see the following output:

<CodeBlock lang="output">

```s
    Finished dev [optimized + debuginfo] target(s) in 0.06s
     Running `target/debug/torrust-tracker`
Loading configuration from config file ./config.toml
2023-07-11T11:35:30.413903013+01:00 [torrust_tracker::bootstrap::logging][INFO] logging initialized.
2023-07-11T11:35:30.414496649+01:00 [torrust_tracker::bootstrap::jobs::tracker_apis][INFO] Starting Torrust APIs server on: http://127.0.0.1:1212
2023-07-11T11:35:30.414590999+01:00 [torrust_tracker::bootstrap::jobs::tracker_apis][INFO] Torrust APIs server started
```

</CodeBlock>

By default, only the API is enabled, if you want to enable the HTTP or UDP trackers, you need to change the `enabled` value in the `./config.toml` file.

<CodeBlock lang="toml">

```toml
[[udp_trackers]]
enabled = true

[[http_trackers]]
enabled = true
```

</CodeBlock>

<Callout type="info">
  Every time you change the configuration you need to restart the service.
</Callout>

Once the Tracker is running, you can test it trying to load an URL from the API. For example, you can try to get the Tracker statistics from the following URL:

<http://127.0.0.1:1212/api/v1/stats?token=MyAccessToken>

Notice we have used the default API token, which is <code>MyAccessToken</code>. You can change it in the <code>./config.toml</code> file.

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

- rustc 1.72.0-nightly (839e9a6e1 2023-07-02)

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

If you are using SQLite3 as database driver, you will need to install the following dependency:

<CodeBlock lang="terminal">

```bash
sudo apt-get install libsqlite3-dev
```

</CodeBlock>

You can run the Tracker Backend with the following commands:

<CodeBlock lang="terminal">

```bash
cd torrust-index-backend/
./bin/install.sh
TORRUST_IDX_BACK_CORS_PERMISSIVE=true cargo run
```

</CodeBlock>

As you can see we are using the environment variable `TORRUST_IDX_BACK_CORS_PERMISSIVE` to enable a permissive CORS policy. The default port for the Backend is `3001` and for the web server serving the frontend application is `3000`. Since they are different ports, we need to tell the backend to allow request from a different port so that the frontend can make request to the API. To know more about CORS, check the [Mozilla CORS documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

<Callout type="info">
  The <code>install.sh</code> script will generate a SQLite database for the Tracker, but we are not going to use it. That one is only used if you want to run the tracker with docker. For example when you are working on features that only involves the Index and do not require changes in the Tracker. In this case, we are running the Tracker directly on its own folder. That could be useful if you want to debug requests to the Tracker.
</Callout>

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

- Node: `^19.0.0`

The frontend is a [Nuxt](https://nuxt.com/) application.

You can run the Tracker Frontend with the following commands:

<CodeBlock lang="terminal">

```bash
cd torrust-index-frontend/
./bin/install.sh
npm run dev
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

As you can see, the Torrust Tracker and Index are very easy to set up. We hope you find this guide useful.You might have problems:

- Setting up some of the projects on Windows. [We are working on it](https://github.com/torrust/torrust-tracker/issues/325).
- Or with some missing system dependencies.

If you have any questions or issues please open an issue on the corresponding repository:

- Torrust Tracker: <https://github.com/torrust/torrust-tracker/issues>
- Torrust Index Backend: <https://github.com/torrust/torrust-index-backend/issues>
- Torrust Index Frontend: <https://github.com/torrust/torrust-index-frontend/issues>

We very welcome any contributions to the project!
