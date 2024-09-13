---
title: Torrust - Enhancing the BitTorrent Ecosystem
slug: torrust-enhancing-the-bittorrent-ecosystem
coverImage: /images/posts/deploying-torrust-to-production/deploy-torrust-to-a-digital-ocean-droplet.png
date: 2024-05-31T09:33:14.163Z
updated: 2024-05-31T09:33:14.163Z
excerpt: Torrust, an open-source organization, is making significant contributions to the BitTorrent ecosystem by developing robust tools, improving documentation, and fostering community collaboration.
contributor: Jose Celano
contributorSlug: jose-celano
tags:
  - Introduction
  - Torrust
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

## Table of contents

- [Hello World](#hello-world)
- [Why is BitTorrent important?](#why-is-bittorrent-important)

</Toc>
</PostTable>

<PostBody>

## Hello World! <!-- markdownlint-disable MD026 -->

We haven't introduced the Torrust Organization in this blog yet, including its vision, mission, and roadmap. This should have been the first post, but after contributing to the BitTorrent ecosystem for over three years, we now have a better understanding of what the BitTorrent protocols offer and how we can enhance the ecosystem.

Torrust is an Open-Source Organization. It was created by [@mickvandijke](https://github.com/mickvandijke) in 2021. Mick started by forking the UDP tracker from a [@naim94a](https://github.com/naim94a)'s' repository [https://github.com/naim94a/udpt](https://github.com/naim94a/udpt) and using some packages for the UDP tracker from [@greatest-ape](https://github.com/greatest-ape)'s [Aquatic](https://github.com/greatest-ape/aquatic) repo. [@naim94a](https://github.com/naim94a) had been working on the tracker since December 2012. In August 2022, [Nautilus Cyberneering](https://github.com/Nautilus-Cyberneering) joined the project. [@mickvandijke](https://github.com/mickvandijke) was already in contact with the Nautilus, and Nautilus decided to contribute due to the traction it was getting from the community and the alignment with their interests.

We would like to thank [@naim94a](https://github.com/naim94a) and [@greatest-ape](https://github.com/greatest-ape) and all other contributors for their invaluable contributions in coding, opening issues, PRs, improving documentation, sharing ideas, etc.

Over the last two years, significant efforts have been made to establish Torrust software as a leading software in the BitTorrent open-source community. We have applied the best languages, tools, and practices to bring a modern, reliable [Tracker](https://github.com/torrust/torrust-tracker) and [Index](https://github.com/torrust/torrust-index). We are close to releasing the version v3.0.0, which we consider a solid foundation for future web3 projects requiring file-sharing services.

During this time, we have focused not only on building great products but also on contributing to the community in different ways like improving BitTorrent documentation, helping maintainers to maintain their Rust-based BitTorrents packages, participating in protocol discussions, and writing articles about BitTorrent.

We have also prioritized onboarding contributors to the organization. We strive to provide a good experience for anyone interested in contributing, whether it's fixing a small typo, improving documentation, or submitting a large PR with a new feature. We respond quickly and make it easy to contribute, exemplified by the extensive documentation we have written.

## Why is BitTorrent important?

BitTorrent is a peer-to-peer (P2P) file sharing protocol, first released in 2001 by [Bram Cohen](https://github.com/bramcohen). It revolutionized file distribution across the internet by allowing efficient peer-to-peer sharing without relying on a single centralized server, making it highly resilient and scalable. BitTorrent enables each downloader to become an uploader, creating a network of file sharing that boosts download speeds and balances server loads.

BitTorrent has been very often related to illegal sharing of copyrighted material, it's worth noting that BitTorrent itself is not illegal. It is a tool, and like any tool, its legality depends on how it's used. It has numerous legitimate uses such as distributing open-source software, sharing large datasets, real-time communications, and even reducing server load for large-scale events like product launches or game updates.

There have been many interesting and useful projects over the years, such as:

- <https://academictorrents.com/> for sharing enormous datasets, for researchers, by researchers.
- [The Internet Archive](https://help.archive.org/help/archive-bittorrents/) is also using torrents since 2012.
- <https://www.legittorrents.info/> was a collection of legal torrents.

More recently, the [webtorrent](https://webtorrent.io/) extension has enabled BitTorrent clients to run in a browser, unlocking new capabilities like:

- [PeerTube](https://peertube.cpy.re/): Prototype of a decentralized video streaming platform in the web browser.
- [CineTimes](https://cinetimes.org/): A streaming website of public domain movies.
- [BitChute](https://www.bitchute.com/): A decentralized video streaming social network.

You can find more [here](https://webtorrent.io/faq).

Despite the emergence of blockchain alternatives like [IPFS](https://ipfs.tech/) (InterPlanetary File System) or [BitTorrent File System 3.0](https://www.btfs.io/), we believe off-chain basic BitTorrent protocols without monetary incentives still fit many decentralization use cases. Many web3 applications could be based on what we already have, as shown in this [list](https://webtorrent.io/faq).

## Current BitTorrent Issues

After being involved in the BitTorrent ecosystem for a couple of years, we believe there is a lot of room for improvement. For example:

### Documentation

The source of true for BitTorrent protocols are [BEPs](https://www.bittorrent.org/beps/bep_0000.html). While it's a good starting point, the information provided is often insufficient for implementation. Important details are sometimes missing, and there are commonly applied extensions that are not documented.

We aim to improve the official documentation in two stages. . First, we will write new [Torrust Enhancement Proposals](https://github.com/torrust/teps), and some of them could be converted into BEPs if they are generic enough.

Not only the official protocol documentation is sometimes vague but also clients, trackers implementations, etc. We think the documentations should be:

- Clear
- Comprehensive
- Accessible
- Up-to-date
- User-focused
- Interactive and engaging
- Easy to update and maintain

And that should be for all levels, from low-level protocols to high-level end-user applications.

At Torrust, we document:

- Classes
- Modules
- Crates
- Application (including setup, how to use, ADRs, licenses, etc)
- Processes ((including how to contribute, how to release new version, how to make decisions, etc)

### Sustainability

Many projects are very old, which isn't necessarily bad because they have proven to be robust and reliable. However, onboarding new contributors is often challenging.

### Scalability

We haven't seen many projects ready to scale horizontally. The focus is often on optimization for a single server. For example, the Tracker uses memory to keep peer lists, making it harder to use multiple servers. While our Tracker still has this limitation, other trackers like [opentracker](https://erdgeist.org/arts/software/opentracker/) can run in a cluster.

### Lack of interest

Despite the advent of blockchain, it seems that average people are not concerned about the problems of centralization. Blockchain projects might still attract developers and users, but BitTorrent is often seen as "old" technology for a problem that people don't see or care about.

### Missing features

Several missing features make it harder to use BitTorrent in modern web3 applications:

- **Versioning**: There is no official way to create versions of the same torrent. Releasing new versions requires creating a completely new torrent, which duplicates its contents.
- **Guaranteed Seeding**: Torrents might include URLs for seeding, but hosting the content when no peer is sharing the torrent can be challenging. Blockchain-based solutions solve this problem with monetary incentives.
- **Standards for Content Formats**: Even if you build a web3 app based on BitTorrent, interoperability is not guaranteed if content doesn't follow standards. For example, if you want to build a "hiking" app, you should specify the format of the files included in the torrents: title, description, track, images, waypoints, etc.

## Vision

Have you ever considered what would happen if the three big hosting providers (AWS, Azure, Google) disappeared?

You would probably be affected, just like millions of others. The internet was conceived as a decentralized network (Usenet, DNS, Fidonet, etc.), but it has become increasingly centralized, raising the risk of a global collapse. Decentralized apps are more resilient, though more complex to build and less efficient.

There is content that we should all care about, such as scientific papers, datasets, and user-generated data like Wikipedia.

Decentralization is the only way to make data truly open and accessible for all. It also allows for interoperability and data migration, so data owners are not locked into a specific provider.

Our vision is to **enable future generations to build a resilient information repositories that ensures data access for everyone**. There is a lot of valuable information locked in data centers that could be lost forever. For example, if you enjoy hiking, you might use an app to follow a track and find the starting point. This cultural heritage, created over generations, could be needed again in the future.

## Mission

Where does Torrust fit into this picture? We aim to improve upon this impressive technology. Torrust is dedicated to developing robust, fault-tolerant tools for the BitTorrent ecosystem, with a focus on providing good testing coverage and thorough documentation for developers and users alike.

Our current portfolio includes a Tracker and an Index. The tracker, written in Rust, is a server that helps coordinate peers in the BitTorrent protocol. The Index is a website that serves as a database of torrent files, comprising a frontend web app (Index GUI) for user interaction and a backend REST API written in Rust for data and business logic (Index).

We are planning to:

- Provide these two components as a first step. In the medium term, we would like to extract more packages that could be used by other open-source BitTorrent projects, such as a core tracker, a tracker client library, etc.
- Build the foundations (libraries, apps, etc.) that will enable the creation of better BitTorrent apps more efficiently in the future.

## Roadmap

Core:

- Implement more BEPs.
- Support for [WebTorrent](https://webtorrent.io/).
- Extract packages that could be useful for other OS projects: tracker client, tracker checker.

New features:

- Permanent keys for the Tracker.
- Peer and torrents specific statistics.

Persistence:

- Support other databases like PostgreSQL.
- Migration to NoSQL?.

Performance:

- More optimizations for the tracker.

Integrations:

- Monitoring (Prometheus).

Improve interoperability:

- Better support for Windows.
- Docker images for other architectures.

## Why should you consider collaborating with us?

Torrust is an excellent way to learn and gain practical experience with Rust and cutting-edge technologies that are quickly gaining popularity in the industry. It is also a fantastic opportunity to be part of a community that values knowledge sharing and collaboration. You can contribute to making data more open and accessible, potentially building an alternative infrastructure that can help avoid data loss or monopolization, which can be crucial for the survival of humanity.

## Contributing

If you see something wrong or you want to contribute to this article by:

- Adding new sections.
- Fixing typos.
- Making it clearer.
- Adding links.
- Or whatever you think that could be interesting to have,

please open an [issue](https://github.com/torrust/torrust-website/issues) or a [PR](https://github.com/torrust/torrust-website/pulls).

If you have any questions or issues please open an issue in the corresponding repository:

- Torrust Tracker: <https://github.com/torrust/torrust-tracker/issues>
- Torrust Index: <https://github.com/torrust/torrust-index/issues>
- Torrust Website: <https://github.com/torrust/torrust-index-gui/issues>
- Torrust Compose: <https://github.com/torrust/torrust-compose>
- Containerizing Rust Applications Examples: <https://github.com/torrust/containerizing-rust-apps-examples>

We very welcome any contributions to the projects or [this article](https://github.com/torrust/torrust-website/issues).

</PostBody>
</PostContainer>
