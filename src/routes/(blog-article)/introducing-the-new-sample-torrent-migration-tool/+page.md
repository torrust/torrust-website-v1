---
title: Introducing the New Sample Torrent Migration Tool
slug: introducing-the-new-sample-torrent-migration-tool
coverImage: /images/posts/pexels-david-dibert-7177008.png
date: 2023-09-04T13:24:27.241Z
excerpt: Looking to migrate to the Torrust Index? Dive into our Torrents Importer Sample to seamlessly transfer your torrents to Torrust.
contributor: Jose Celano
contributorSlug: jose-celano
tags:
  - Migration Tool
  - Sample
hidden: false
updated: 2023-09-04T13:24:27.241Z
---

<script>
  import Callout from "$lib/components/molecules/Callout.svelte";
  import CodeBlock from "$lib/components/molecules/CodeBlock.svelte";
  import Image from "$lib/components/atoms/Image.svelte";
</script>

Photo by David Dibert: <https://www.pexels.com/photo/a-flock-of-geese-flying-7177008/>.

Hello, Torrust community!

We're always looking for ways to enhance your experience with Torrust, and today, we're excited to unveil our latest addition: [A sample migration tool written in Rust](https://github.com/torrust/torrents-importer-sample), specifically designed for those looking to seamlessly import torrents from other sources into our [Torrust Index](https://github.com/torrust/torrust-index-backend)!

## Table of contents

- [Why this tool?](#why-this-tool)
- [Capabilities](#capabilities)
- [Conclusion](#conclusion)
- [Links](#links)
- [Acknowledgments](#acknowledgments)

## Why this tool?

Many in our community have asked us for an efficient method to migrate torrents from their current Index/Trackers to Torrust. Recognizing this need, we took it upon ourselves to develop a solution that would make this process as hassle-free as possible.

On the other hand, we have been doing an intensive testing of the Torrust Index Backend. We wanted to test the backend with a large set of real torrents. We found the site <https://academictorrents.com/> which has thousands of torrents and they kindly make them public available.

We decided to create a tool that would allow us to import torrents from this site into our Torrust Index. This tool is a sample project that we are sharing with the community. We hope that it will be useful for those who want to migrate their torrents to Torrust.

The example repo is <https://github.com/torrust/torrents-importer-sample>

## Capabilities

The migration tool sample offers a straightforward way to:

- Fetch Torrents from XML Lists: The tool takes torrents from a list in an XML file, ensuring you don’t have to manually pick and transfer torrents one by one.
- Download Torrents from Other Sites: No more downloading and re-uploading! Our tool will directly fetch the torrents for you.
- Upload to Torrust: With the help of the Torrust Index REST API, the torrents are then uploaded into our software, ready for classification and use.

While our initial test run has been on an index containing academic torrents, the tool is versatile enough to handle a variety of sources. The underlying principles remain the same.

<Callout type="info">

**Disclaimer**: This sample project is not intended to be a production-ready tool. It is a sample project that we are sharing with the community. We hope that it will be useful for those who want to migrate their torrents to Torrust. For larger datasets it would be convenient to handle errors asynchronously. In the current version the application exists immediately when something goes wrong and you have to handle the problem yourself and restart it.

</Callout>

You will problably need to rewrite the whole "source" part of the application to adapt it to your needs. The "destination" part should be reusable as it is.

When you run the importer, the output will be something like this:

<CodeBlock lang="terminal" id='firstCodeBlock'>

```s
$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.02s
     Running `target/debug/torrents-importer-sample`
API login with username admin ...
Logged as admin with account admin
Reading file ./data/database.xml ...
Processing channel ...
  Title: Mandelbrot Set Collection
  description: Torrents with Mandelbrot Set Images
  Link: https://github.com/torrust/torrents-importer-sample
Processing only 1 torrent ...
Processing torrent #1 ...
  Title: MandelBrot Set 01
  Category: Fractal
  Infohash: 0c90fbf036e28370c1ec773401bc7620146b1d48
  Guid: https://raw.githubusercontent.com/torrust/torrents-importer-sample/main/tests/fixtures/torrents/mandelbrot_set_01.torrent
  Link: https://raw.githubusercontent.com/torrust/torrents-importer-sample/main/tests/fixtures/torrents/mandelbrot_set_01.torrent
  Description:  ...
  Size: 17130410419
Checking if the torrent 0c90fbf036e28370c1ec773401bc7620146b1d48 exist in the Torrust Index ...
Downloading the torrent file from the source server ...
Downloading torrent from https://raw.githubusercontent.com/torrust/torrents-importer-sample/main/tests/fixtures/torrents/0c90fbf036e28370c1ec773401bc7620146b1d48.torrent into ./data/torrents/0c90fbf036e28370c1ec773401bc7620146b1d48.torrent
Torrent successfully downloaded.
Uploading the torrent 0c90fbf036e28370c1ec773401bc7620146b1d48 to the Torrust Index ...
response: 200
Torrent uploaded UploadedTorrent {
    torrent_id: 2529,
    info_hash: "0c90fbf036e28370c1ec773401bc7620146b1d48",
}
Processed torrents: 1
Uploaded torrents:  1
```

</CodeBlock>

## Conclusion

Being a sample project, we believe that there's always room for improvement. We invite the Torrust community to use the tool, provide feedback, and even contribute to its enhancement. Together, we can refine it and adapt it to cater to more diverse needs.

We're committed to evolving and making Torrust a go-to solution for all torrent aficionados. Our new migration tool is just one step in this journey. Whether you're a casual user or an enterprise looking to migrate a large number of torrents, our tool aims to make the transition smoother for you.

A big shout-out to everyone involved in this project! We encourage everyone to give it a try and share your experiences. Together, let's make the world of torrents even more connected and accessible.

Happy torrenting!

## Links

- [The Torrust Index Backend](https://github.com/torrust/torrust-index-backend).
- [The Torrust Torrents Importer Sample](https://github.com/torrust/torrents-importer-sample).

## Acknowledgments

We would like to acknowledge the team from <https://academictorrents.com/> for their great work and for making their torrents public available.

If you have any questions or issues regarding this post, please [open an issue](https://github.com/torrust/torrust-website/issues/new).

For any other questions or issues related to Torrust repositories, please open an issue on the corresponding repository:

- Torrust Tracker: <https://github.com/torrust/torrust-tracker/issues>
- Torrust Index Backend: <https://github.com/torrust/torrust-index-backend/issues>
- Torrust Index Frontend: <https://github.com/torrust/torrust-index-frontend/issues>

We very welcome any contributions to the project!
