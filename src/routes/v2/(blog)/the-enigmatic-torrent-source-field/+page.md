---
title: The Enigmatic Torrent "Source" Field
slug: the-enigmatic-torrent-source-field
coverImage: /images/posts/deprecated-and-outdated-bittorrent-documentation.png
date: 2023-08-08T13:56:28.769Z
updated: 2023-08-08T13:56:28.769Z
excerpt: Delving into BitTorrent’s Mysteries. What is the "source" field in the torrent info used for?
contributor: Jose Celano
contributorSlug: jose-celano
tags:
  - BitTorrent
  - Protocol
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

The BitTorrent protocol, despite its widespread usage, has often been met with raised eyebrows by the tech community due to its sometimes vague or entirely missing documentation. Today, we'll dive into one such mystery: the "source" field located within the "info" part of torrent files.

<PostContainer>
<PostTable>
<Toc
  title=""
  --toc-active-color="rgba(255, 49, 0, 0.96)"
  --toc-li-hover-color="rgba(255, 49, 0, 0.96)"
  --toc-active-bg="transparent"
>

## Table of contents

- [Unraveling the "Source" Field](#unraveling-the-source-field)
- ["Source" field internals](#source-field-internals)
- [BitTorrent Documentation: Lost in the Ether?](#bittorrent-documentation-lost-in-the-ether)
- [Cross-seeding](#cross-seeding)
- [What are the reliable sources for BitTorrent documentation?](#what-are-the-reliable-sources-for-bittorrent-documentation)
- [Links](#links)
- [Acknowledgments](#acknowledgments)
- [Conclusion](#conclusion)

</Toc>
</PostTable>

<PostBody>

<Callout type="info">

**Disclaimer**: The contents of this blog post, are based on research, community discussions, and available knowledge as of the date of publication. Due to the absence of official documentation for the "source" field, there might be discrepancies or potential inaccuracies in the information presented. Readers are advised to exercise caution and conduct their own research when relying on this information, especially for critical applications or decisions. If you identify any inaccuracies or have further insights, please open an issue or contact us directly so we can review and update as necessary.

</Callout>

## Unraveling the "Source" Field

Some days ago we were testing the [Torrust Index Backend](https://github.com/torrust/torrust-index-backend). We were using different torrent files. We realized that we were calculating a wrong info-hash when the torrent contained a "source" field.

You can see the details of that issue [here](https://github.com/torrust/torrust-index-backend/issues/242).

For the uninitiated, the BitTorrent protocol uses `.torrent` files to contain metadata about the files we wish to share and distribute. Inside this .torrent file is an "info" dictionary that holds details about these files, such as their names, lengths, and piece hashes.

You can create a torrent file in many different ways. Probably the most common way to create them is by using a BitTorrent client.

For example, if you are using [qBittorrent](https://www.qbittorrent.org/), this is the torrent creation form:

<Image src="/images/posts/create-a-torrent-file-with-qbittorrent-and-source-field.png" alt="Create" />

As you can see there is a "source" field in the "Fields" group of inputs.

As we did not know exactly the purpose of this field, our first reaction was to look for official documentation about that field in [BEPs](https://www.bittorrent.org/beps/bep_0000.html). In the context of BitTorrent, a BEP stands for "BitTorrent Enhancement Proposal." It's analogous to Python's PEP (Python Enhancement Proposal) or Bitcoin's BIP (Bitcoin Improvement Proposal).

<Callout type="info">

A BitTorrent Enhancement Proposal (BEP) is a design document providing information to the BitTorrent community, or describing a new feature for BitTorrent or its processes or environment. The BEP should provide a concise technical specification of the feature and a rationale for the feature. It's a mechanism by which innovations, improvements, and features are proposed, discussed, and integrated into the BitTorrent protocol and its ecosystem.

</Callout>

While many fields are well-documented and are integral to the functioning of the protocol, the "source" field remains a relatively understudied element. Here's what we know:

**Purpose**: The "source" field isn't necessarily needed for the basic functioning of BitTorrent. It often appears to be used as a marker or tag to indicate where the torrent was created or originated. This is particularly handy for private torrent sites or groups that wish to 'mark' a torrent file to trace its distribution.

**Format**: Typically, this field contains a string, which may be the name of the website or organization that created or released the torrent. Some tracker use a three-char code representing the tracker.

**Implications**: While it may seem benign, the "source" field can have ramifications. Torrents marked with a particular source might be treated differently, either more trustingly or with suspicion, depending on the reputation of the source. Furthermore, for private trackers, a torrent with an unauthorized or modified "source" field might lead to banning of users, as it could indicate redistribution of exclusive content.

## "Source" field internals

Metainfo files (also known as .torrent files) are bencoded dictionaries. The contents of a BitTorrent file are described in the [BEP 03](https://www.bittorrent.org/beps/bep_0003.html).

<Callout type="info">

Bencoding (pronounced "Bee-encoding") is a data serialization method used primarily in the BitTorrent protocol. It's designed to be simple and efficient to encode and decode. Bencoded data structures include bytes (strings), integers, lists, and dictionaries.

</Callout>

The JSON representation of a torrent file, after decoding the bytes is something like this:

<CodeBlock lang="json">

```json
{
	"announce": "http://localhost",
	"comment": "Comments",
	"created by": "qBittorrent v4.4.1",
	"creation date": 1690882922,
	"info": {
		"length": 172204,
		"name": "mandelbrot_2048x2048.png",
		"piece length": 16384,
		"pieces": "<hex>7D 91 71 0D 9D 4D BA 88 9B 54 20 54 D5 26 72 8D 5A 86 3F E1 21 DF 77 C7 F7 BB 6C 77 96 21 66 25 38 C5 D9 CD AB 8B 08 EF 8C 24 9B B2 F5 C4 CD 2A DF 0B C0 0C F0 AD DF 72 90 E5 B6 41 4C 23 6C 47 9B 8E 9F 46 AA 0C 0D 8E D1 97 FF EE 68 8B 5F 34 A3 87 D7 71 C5 A6 F9 8E 2E A6 31 7C BD F0 F9 E2 23 F9 CC 80 AF 54 00 04 F9 85 69 1C 77 89 C1 76 4E D6 AA BF 61 A6 C2 80 99 AB B6 5F 60 2F 40 A8 25 BE 32 A3 3D 9D 07 0C 79 68 98 D4 9D 63 49 AF 20 58 66 26 6F 98 6B 6D 32 34 CD 7D 08 15 5E 1A D0 00 09 57 AB 30 3B 20 60 C1 DC 12 87 D6 F3 E7 45 4F 70 67 09 36 31 55 F2 20 F6 6C A5 15 6F 2C 89 95 69 16 53 81 7D 31 F1 B6 BD 37 42 CC 11 0B B2 FC 2B 49 A5 85 B6 FC 76 74 44 93</hex>",
		"private": 1,
		"source": "Source"
	},
	"url-list": "http://localhost/mandelbrot_2048x2048.png"
}
```

</CodeBlock>

As you can see there is one key or field called `info`. This part of the file is used to generate the info-hash, which is the torrent unique identifier.

<Callout type="info">

According to BEP-03, the info-hash is a 20 byte sha1 hash of the bencoded form of the info value from the metainfo file. BEP 03 does not specifically mention the `source` field. All current or future fields included in the `info` dictionary are used to calculate the info-hash.

</Callout>

[BEP-03](https://www.bittorrent.org/beps/bep_0003.html) does not mention the `source` and `private` fields.

There are two different types of torrent files:

- The single file case: where the torrent contains a single file.
- The multi-file case: where the torrent contains a directory.

Here is another example of a torrent containing multiple files:

<CodeBlock lang="json">

```json
{
	"announce": "http://localhost",
	"comment": "Comments",
	"created by": "qBittorrent v4.4.1",
	"creation date": 1691069437,
	"info": {
		"files": [
			{
				"length": 37,
				"path": ["file-425ef9ca-014d-403f-8f15-3ece9e3fad38.txt"]
			},
			{
				"length": 37,
				"path": ["file-deeafa50-2e25-4f38-bec0-92865ca6bb1d.txt"]
			}
		],
		"name": "dir-839a49f0-cabc-4efb-ad5f-b6fb15f8a467",
		"piece length": 16384,
		"pieces": "<hex>8E 47 18 74 52 8E 68 92 DD 86 66 F0 0B DD AD B1 08 DC 69 44</hex>",
		"private": 1
	},
	"url-list": "http://localhost/mandelbrot_2048x2048.png"
}
```

</CodeBlock>

<Callout type="info">

The `info` dictionary can contain a key `length` or a key `files`, but not both or neither. If length is present then the download represents a single file, otherwise it represents a set of files which go in a directory structure. In the single file case, length maps to the length of the file in bytes.

</Callout>

## BitTorrent Documentation: Lost in the Ether?

This isn’t the first time we've encountered a hazy area within BitTorrent's realm. While the protocol itself is revolutionary, providing a decentralized way to share large amounts of data efficiently, its documentation often leaves much to be desired. Here's why this is a concern:

**Reduced Accessibility**: For new developers or enthusiasts looking to delve into the BitTorrent ecosystem, inadequate documentation can be a significant barrier to entry.

**Inconsistent Implementations**: Vague documentation can lead to varied interpretations and consequently, inconsistent implementations across different BitTorrent clients.

**Potential for Misuse**: Ambiguous or missing documentation can lead to unintended use or misuse of fields, potentially compromising the integrity of the protocol or the data being shared.

## Cross-seeding

It's out of the scope of this post to provide an exhaustive explanation of the cross-seeding concept. If you think it could be an interesting topic for a new blog post let us know. But the "source" field in the "info" part of the torrent files might be related to cross-seeding too.

**Cross-seeding** in the BitTorrent context refers to the practice of seeding the same content (files) using two or more different torrent files, typically from different trackers. This is particularly useful when the exact same file or set of files is available on multiple trackers but might have different torrent files associated with them due to differences in metadata, source tags, or directory structures.

BitTorrent clients usually do not allow you to add the same content twice, so cross-seeding is a way to get around this limitation. If you want to add a new tracker to a torrent file that you are already seeding, the client usually adds the new tracker to the tracker list in the previous torrent file. This could be a reason to ban you from some private trackers.

Some private trackers change the list of trackers in the torrent files to prevent cross-seeding. They remove other trackers URLs and they also use the source file to generate a different info-hash. This is a way to force you to download the torrent file from their website and track you to know if you are seeding the torrent file from another tracker.

## What are the reliable sources for BitTorrent documentation?

Some of the sources we have found reliable and useful are:

- <https://www.bittorrent.org/beps/bep_0000.html>: BitTorrent Enhancement Proposals (BEPs) describe proposed changes to the BitTorrent protocol, including new features and extensions to existing features.
- <http://libtorrent.org/>: libtorrent is a feature complete C++ bittorrent library.
- <https://wiki.theory.org/BitTorrentSpecification>: This wiki is a comprehensive reference for the BitTorrent protocol.

If you think we are missing any other reliable source, please let us know by [opening an issue](https://github.com/torrust/torrust-website/issues) or opening a pull request to update this post.

## Links

- [The issue that originated this post](https://github.com/torrust/torrust-index-backend/issues/242).
- [Open questions on GitHub qBittorrent project](https://github.com/qbittorrent/qBittorrent/discussions/19406).
- [Wikipedia: Bencode](https://en.wikipedia.org/wiki/Bencode).
- [Stackoverflow: What exactly is the info_Hash in a torrent file](https://stackoverflow.com/questions/28348678/what-exactly-is-the-info-hash-in-a-torrent-file).

## Acknowledgments

For this port and in other places we are using an online tool to generate JSON objects from torrent files: <https://chocobo1.github.io/bencode_online/> by [Mike Tzou](https://github.com/Chocobo1).

[Kimbatt](https://github.com/Kimbatt) [helped us to find some sources of information](https://github.com/Kimbatt/torrent-creator/issues/10#issuecomment-1664344502).

## Conclusion

While the BitTorrent protocol remains a cornerstone of peer-to-peer data sharing, there’s a palpable need for comprehensive, clear, and easily accessible documentation. The "source" field in the "info" part of the torrent files serves as a poignant reminder of this necessity. As we continue to rely on such protocols for our digital interactions, understanding their nuances becomes not just an intellectual exercise but a practical imperative.

<Callout type="info">

We are looking forward to finding the first implementation and the creator of the "Source" field in the "info" part of the torrent files. If you know of any, please let us know by opening an issue.

</Callout>

If you have any questions or issues regarding this post, please [open an issue](https://github.com/torrust/torrust-website/issues/new).

For any other questions or issues related to Torrust repositories, please open an issue on the corresponding repository:

- Torrust Tracker: <https://github.com/torrust/torrust-tracker/issues>
- Torrust Index Backend: <https://github.com/torrust/torrust-index-backend/issues>
- Torrust Index Frontend: <https://github.com/torrust/torrust-index-frontend/issues>

We very welcome any contributions to the project!

</PostBody>
</PostContainer>
