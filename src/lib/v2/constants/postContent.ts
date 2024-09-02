export interface postContentItem {
	heading: string;
	link: string;
	body: string[];
	subheadings: {
		heading: string;
		link: string;
		body: string[];
	}[];
}

export const indexContent: postContentItem[] = [
	{
		heading: 'Installation',
		link: 'installation',
		body: [
			'<p>Massa sit tempor massa blandit suscipit. Vestibulum in faucibus suspendisse enim at sit. Velit eget at cursus vel adipiscing. Tristique feugiat aliquam risus etiam. Auctor scelerisque dignissim facilisi faucibus.</p>'
		],
		subheadings: [
			{
				heading: 'Software requirements',
				link: 'softwareRequirements',
				body: [
					`<ul>
                    <li>SQLite 3 or MySQL 8.0.</li>
                    <li>Rust Stable 1.68 if you compile from sources.</li>
                    <li>A running Torrust Tracker. You can check the Tracker page for installation instructions.</li>
                    </ul>
                    <p>See <a href='https://docs.rs/torrust-index/latest/torrust_index/#prerequisites'>here</a> for details.</p>
                    <p>You can install the Index from sources or using docker.</p>
                    `
				]
			},
			{
				heading: 'Build from sources (Rust)',
				link: 'buildSources',
				body: [
					'<p>Commodo ullamcorper blandit massa odio mauris odio ornare. Adipiscing imperdiet neque convallis nisl quisque quisque. Fringilla bibendum sit lectus tellus ut urna condimentum tristique. Nisi lectus malesuada consectetur morbi id fringilla et. Blandit mus senectus a elit nisl.</p>',
					'<p>Mauris ut dolor dolor nam. Dolor viverra tincidunt egestas ac vulputate. Phasellus sed massa facilisis rhoncus in. Ipsum fermentum est diam justo nibh quis. Libero rutrum quam donec tellus at et.</p>',
					'<p>Sed quis enim amet tempor aliquet eget. Phasellus sem vel tincidunt pellentesque non hendrerit cras magna. Volutpat convallis aliquet non lectus quam enim. Nunc ut augue urna vitae venenatis. Pellentesque congue blandit facilisi lectus ac libero.</p>'
				]
			},
			{
				heading: 'Docker',
				link: 'docker',
				body: [
					'<p>Interdum augue mattis tortor ornare in. Feugiat phasellus integer massa mauris. Leo sit tempus leo eu tellus feugiat malesuada purus. Metus erat eleifend ante sed sem gravida nunc lobortis et. Arcu elit faucibus eget egestas aliquet vivamus consectetur.</p>',
					'<p>Laoreet id nisl pharetra sed ut massa dis interdum. Eget eu lacus fringilla sem dignissim cras ridiculus. Potenti cras diam nunc ultricies. Ut metus amet faucibus quam nibh mattis at. Cras in rhoncus ipsum ut id sit id.</p>'
				]
			}
		]
	},
	{
		heading: 'Licenses',
		link: 'licenses',
		body: [],
		subheadings: [
			{
				heading: 'Copyright (c) 2023 The Torrust Developers.',
				link: 'copyright',
				body: [
					'<p>This program is free software: you can redistribute it and/or modify it under the terms ofthe <a href="https://github.com/torrust/torrust-index/blob/develop/docs/licenses/LICENSE-AGPL_3_0">GNU Affero General Public License</a> as published by the <a href="https://www.fsf.org/">Free Software Foundation</a>, version 3.</p>',
					'<p>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the <a href="https://github.com/torrust/torrust-index/blob/develop/docs/licenses/LICENSE-AGPL_3_0">GNU Affero General Public License</a> for more details.</p>',
					'<p>You should have received a copy of the GNU Affero General Public License along with this program. If not, see <a href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>. Some files include explicit copyright notices and/or license notices.</p>'
				]
			},
			{
				heading: 'Legacy Exception',
				link: 'legacyException',
				body: [
					'<p>For prosperity, versions of Torrust Tracker that are older than five years are automatically granted the <a href="https://github.com/torrust/torrust-index/blob/develop/docs/licenses/LICENSE-MIT_0">MIT-0</a> license in addition to the existing <a href="https://github.com/torrust/torrust-index/blob/develop/docs/licenses/LICENSE-AGPL_3_0">AGPL-3.0-only</a> license.</p>'
				]
			}
		]
	},
	{
		heading: 'Roadmap',
		link: 'roadmap',
		body: [],
		subheadings: [
			{
				heading: 'Future Features:',
				link: 'futureFeatures',
				body: [
					`<ul>
                    <li>Persistence:</li>
                    <ul>
                        <li>Support other databases</li>
                    </ul>
                    <li>Integrations:</li>
                    <ul>
                        <li>Webhooks</li>
                    </ul>
                    <li>Administration:</li>
                    <ul>
                        <li>Improve categories and tag management</li>
                        <li>User management: list, ban users</li>
                        <li>Full-private mode</li>
                        <li>User statistics</li>
                    </ul>
                    <li>Users:</li>
                    <ul>
                        <li>Reset or change password</li>
                        <li>User profile</li>
                        <li>Invitation system</li>
                        <li>User moderation</li>
                        <li>Add torrent providing only infohash</li>
                        <li>
                            Improve search: Import Torrent Index Entries as Documents and Provide Real Searching
                            Capabilites
                        </li>
                    </ul>
                    <li>Torrents:</li>
                    <ul>
                        <li>Change source field</li>
                        <li>Change creator field</li>
                        <li>Implement BEP 19: WebSeed - HTTP/FTP Seeding (GetRight style)</li>
                        <li>Implement BEP 32: BitTorrent DHT Extensions for IPv6</li>
                    </ul>
                    <li>Others:</li>
                    <ul>
                        <li>Multi-tracker</li>
                        <li>Multi-language</li>
                    </ul>
                </ul>`
				]
			}
		]
	}
];

export const trackerContent: postContentItem[] = [
	{
		heading: 'Installation',
		link: 'installation',
		body: [],
		subheadings: [
			{
				heading: 'Software requirements',
				link: 'softwareRequirements',
				body: [
					`
                    <ul>
                        <li>Optional: SQLite 3 or MySQL 8.0. Only if persistence is enabled.</li>
                        <li>Rust Stable 1.68 if you compile from sources.</li>
                    </ul>
                    <p>See <a href='https://docs.rs/torrust-index/latest/torrust_index/#prerequisites'>here</a> for details.</p>
                    <p>You can install the Tracker from sources or use docker.</p>
                    <ul>
                        <li>Install from sources: <a href='https://docs.rs/torrust-tracker/latest/torrust_tracker/#install-from-sources'>here</a></li>
                        <li>Run with docker: <a href='https://docs.rs/torrust-index/latest/torrust_index/#run-with-docker'>here</a></li>
                    </ul>
                    <p>There is a tutorial to install the Tracker and Index on a Digital Ocean droplet: <a href='https://torrust.com/deploying-torrust-to-production'>Deploying Torrust to Production</a></p>
                    <p>The setup should be very similar in any hosting providing VMs. If you need help or find a problem trying to install the tracker you can open a question on the GitHub <a href='https://github.com/torrust/torrust-tracker/discussions/categories/q-a'>discussions</a>.</p>
                    `
				]
			},
			{
				heading: 'Build from sources (Rust)',
				link: 'buildSources',
				body: [
					'<p>Commodo ullamcorper blandit massa odio mauris odio ornare. Adipiscing imperdiet neque convallis nisl quisque quisque. Fringilla bibendum sit lectus tellus ut urna condimentum tristique. Nisi lectus malesuada consectetur morbi id fringilla et. Blandit mus senectus a elit nisl.</p>',
					'<p>Mauris ut dolor dolor nam. Dolor viverra tincidunt egestas ac vulputate. Phasellus sed massa facilisis rhoncus in. Ipsum fermentum est diam justo nibh quis. Libero rutrum quam donec tellus at et.</p>',
					'<p>Sed quis enim amet tempor aliquet eget. Phasellus sem vel tincidunt pellentesque non hendrerit cras magna. Volutpat convallis aliquet non lectus quam enim. Nunc ut augue urna vitae venenatis. Pellentesque congue blandit facilisi lectus ac libero.</p>'
				]
			},
			{
				heading: 'Docker',
				link: 'docker',
				body: [
					'<p>Interdum augue mattis tortor ornare in. Feugiat phasellus integer massa mauris. Leo sit tempus leo eu tellus feugiat malesuada purus. Metus erat eleifend ante sed sem gravida nunc lobortis et. Arcu elit faucibus eget egestas aliquet vivamus consectetur.</p>',
					'<p>Laoreet id nisl pharetra sed ut massa dis interdum. Eget eu lacus fringilla sem dignissim cras ridiculus. Potenti cras diam nunc ultricies. Ut metus amet faucibus quam nibh mattis at. Cras in rhoncus ipsum ut id sit id.</p>'
				]
			}
		]
	},
	{
		heading: 'Licenses',
		link: 'licenses',
		body: [
			`
            <p>Copyright (c) 2023 The Torrust Developers.</p>
            <p>This program is free software: you can redistribute it and/or modify it under the terms of the <a href='https://github.com/torrust/torrust-index/blob/develop/docs/licenses/LICENSE-AGPL_3_0'>GNU Affero General Public License</a> as published by the <a href='https://www.fsf.org/'>Free Software Foundation</a>, version 3.</p>
            <p>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the <a href='https://github.com/torrust/torrust-index/blob/develop/docs/licenses/LICENSE-AGPL_3_0'>GNU Affero General Public License</a> for more details.</p>
            <p>You should have received a copy of the GNU Affero General Public License along with this program. If not, see <a href='https://www.gnu.org/licenses/'>here</a>.</p>
            <p>Some files include explicit copyright notices and/or license notices.</p>
            `
		],
		subheadings: [
			{
				heading: 'Copyright (c) 2023 The Torrust Developers.',
				link: 'copyright',
				body: [
					`
                    <p>This program is free software: you can redistribute it and/or modify it under the terms of the <a href='https://github.com/torrust/torrust-index/blob/develop/docs/licenses/LICENSE-AGPL_3_0'>GNU Affero General Public License</a> as published by the <a href='https://www.fsf.org/'>Free Software Foundation</a>, version 3.</p>
                    <p>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the <a href='https://github.com/torrust/torrust-index/blob/develop/docs/licenses/LICENSE-AGPL_3_0'>GNU Affero General Public License</a> for more details.</p>
                    <p>You should have received a copy of the GNU Affero General Public License along with this program. If not, see <a href='https://www.gnu.org/licenses/'>here</a>.</p>
                    <p>Some files include explicit copyright notices and/or license notices.</p>
                    `
				]
			},
			{
				heading: 'Legacy Exception',
				link: 'legacyException',
				body: [
					`
                    <p>For prosperity, versions of Torrust Tracker that are older than five years are automatically granted the <a href='https://github.com/torrust/torrust-index/blob/develop/docs/licenses/LICENSE-MIT_0'>MIT-0</a> license in addition to the existing <a href='https://github.com/torrust/torrust-index/blob/develop/docs/licenses/LICENSE-AGPL_3_0'>AGPL-3.0-only</a> license.</p>
                    `
				]
			}
		]
	},
	{
		heading: 'Roadmap',
		link: 'roadmap',
		body: ['<p>Future features:</p>'],
		subheadings: [
			{
				heading: 'Core',
				link: 'core',
				body: [
					`
                    <ul>
                    <li>New option 'want_ip_from_query_string'. See <a href='https://github.com/torrust/torrust-tracker/discussions/532#issuecomment-1836642956'>here</a>.
                    <li>Permanent keys. See <a href='https://github.com/torrust/torrust-tracker/discussions/244'>here</a>.
                    <li>Peer and torrents specific statistics. See <a href='https://github.com/torrust/torrust-tracker/discussions/139'>here</a>.
                    </ul>
                    `
				]
			},
			{
				heading: 'Persistence',
				link: 'persistence',
				body: [
					`
                    <ul>
                    <li>Support other databases.</li>
                    <li>Support for PostgreSQL.</li>
                    </ul>
                    `
				]
			},
			{
				heading: 'Performance',
				link: 'performance',
				body: [
					`
                    <ul>
                    <li>Concurrent write torrents repository (DashMap)</li>
                    </ul>
                    `
				]
			},
			{
				heading: 'Protocols',
				link: 'protocols',
				body: [
					`
                    <ul>
                    <li>WebTorrent</li>
                    </ul>
                    `
				]
			},
			{
				heading: 'Integrations',
				link: 'integrations',
				body: [
					`
                    <ul>
                    <li>Monitoring (Prometheus)</li>
                    </ul>
                    `
				]
			},
			{
				heading: 'Utils',
				link: 'utils',
				body: [
					`
                    <ul>
                    <li>Tracker client</li>
                    <li>Tracker checker</li>
                    </ul>
                    `
				]
			},
			{
				heading: 'Others',
				link: 'others',
				body: [
					`
                    <ul>
                    <li>Support Windows</li>
                    <li>Docker images for other architectures</li>
                    </ul>
                    `
				]
			}
		]
	}
];

export const selfHostContent: postContentItem[] = [
	{
		heading: 'Torrent solution (Index + Tracker)',
		link: 'torrustSolution',
		body: [
			`
            <p>The Torrust Solution is a complete installation of bot a BitTorrent Index which is associated to one Torrust Tracker. Downloaded torrents will include the the associated tracker in the list of trackers.</p>
            <p>In our tutorial we explain how to install both in the same server using a single docker compose configiration, but if you need more resources you could install the tracker and the index in different servers. You just need to spits the docker compose configuration and change the tracker configiration in the index  to connect to the external tracker.</p>
            `
		],
		subheadings: [
			{
				heading: 'Build from sources (Rust)',
				link: 'buildSources',
				body: [
					`
                    <p>Commodo ullamcorper blandit massa odio mauris odio ornare. Adipiscing imperdiet neque convallis nisl quisque quisque. Fringilla bibendum sit lectus tellus ut urna condimentum tristique. Nisi lectus malesuada consectetur morbi id fringilla et. Blandit mus senectus a elit nisl.</p>
                    <p>Mauris ut dolor dolor nam. Dolor viverra tincidunt egestas ac vulputate. Phasellus sed massa facilisis rhoncus in. Ipsum fermentum est diam justo nibh quis. Libero rutrum quam donec tellus at et.</p>
                    <p>Sed quis enim amet tempor aliquet eget. Phasellus sem vel tincidunt pellentesque non hendrerit cras magna. Volutpat convallis aliquet non lectus quam enim. Nunc ut augue urna vitae venenatis. Pellentesque congue blandit facilisi lectus ac libero.</p>
                    `
				]
			},
			{
				heading: 'Docker',
				link: 'docker',
				body: [
					`
                    <p>Interdum augue mattis tortor ornare in. Feugiat phasellus integer massa mauris. Leo sit tempus leo eu tellus feugiat malesuada purus. Metus erat eleifend ante sed sem gravida nunc lobortis et. Arcu elit faucibus eget egestas aliquet vivamus consectetur.</p>
                    <p>Laoreet id nisl pharetra sed ut massa dis interdum. Eget eu lacus fringilla sem dignissim cras ridiculus. Potenti cras diam nunc ultricies. Ut metus amet faucibus quam nibh mattis at. Cras in rhoncus ipsum ut id sit id.</p>
                    `
				]
			},
			{
				heading: 'Tutorials',
				link: 'tutorials',
				body: [
					`
                    <p>Nisi interdum iaculis cursus tellus tincidunt pharetra turpis arcu eget. Nibh in pellentesque risus vestibulum. Dolor interdum dictum ac feugiat nulla gravida scelerisque tellus. Sit diam vestibulum eu quis. Curabitur lectus porta nisi convallis.</p>
                    `
				]
			}
		]
	},
	{
		heading: 'Torrust tracker',
		link: 'torrustTracker',
		body: [],
		subheadings: [
			{
				heading: '',
				link: '',
				body: []
			}
		]
	}
];

export const communityContent: postContentItem[] = [
	{
		heading: 'Why Contribute to our Project?',
		link: 'whyContribute',
		body: [
			`
            <p>Short intro. Eu proin ultricies nunc turpis purus dui ultrices mattis. Amet platea fames orci adipiscing pharetra auctor eget arcu adipiscing. Aliquam ipsum mattis ipsum malesuada aliquet ipsum. Convallis tortor rhoncus cursus porttitor tellus sed.</p>
            <ul>
            <li>Rust</li>
            <li>Good documentation</li>
            <li>Quality code</li>
            <li>High test coverage</li>
            <li>Sponsored</li>
            <li>Long-term projection</li>
            <li>Full-time employment opportunities</li>
            <li>Link</li>
            </ul>
            `
		],
		subheadings: [
			{
				heading: 'Embrace Rust: a language of choice',
				link: 'embraceRust',
				body: [
					`
                    <p>Why Rust? We've chosen Rust for its unparalleled safety, performance, and reliability. If you share our enthusiasm for writing code in Rust, you'll find a like-minded community here. Our project offers a playground for Rust aficionados to push the boundaries of what's possible.</p>
                    `
				]
			},
			{
				heading: 'Code quality above all',
				link: 'codeQuality',
				body: [
					`
                    <p>Our Commitment to Excellence: For us, quality trumps quantity every time. We're dedicated to building on a robust foundation, preferring to perfect our existing features over piling on new ones. Every change undergoes meticulous review, and we're perpetually refining and refactoring to elevate our code.</p>
                    <p>A Testament to Stability: With an extensive suite of automated tests, we ensure our software remains stable and regression-free for the long haul. Your contributions will uphold and extend this legacy of quality.</p>
                    `
				]
			},
			{
				heading: 'A welcoming community for newcomers',
				link: 'welcomingCommunity',
				body: [
					`
                    <p>Kickstart Your Contribution: Never contributed to an open-source project before? No worries! We pride ourselves on being exceptionally welcoming to newcomers. You'll find comprehensive documentation, thorough explanations of complex concepts, and a supportive community ready to guide you.</p>
                    <p>Learn, Grow, and Teach: Our project is a hub for continuous learning and knowledge sharing. Whether you're here to improve your Rust skills, understand open-source development, or contribute your expertise, there's a place for you.</p>
                    `
				]
			},
			{
				heading: 'Influence the project’s direction',
				link: 'influenceDirection',
				body: [
					`
                    <p>Your Voice Matters: Have ideas or specific needs for an index or tracker? As a community-driven project, we're all ears. Your contributions and insights can significantly influence the project's roadmap, ensuring it evolves in ways that benefit everyone involved.</p>
                    <p>Shape the Future Together: Joining our project means you're not just a contributor; you're a key player in shaping its future. Whether it's through code, documentation, or sharing insights, your input is invaluable</p>
                    `
				]
			},
			{
				heading: 'Join us today',
				link: 'joinUs',
				body: [
					`
                    <p>By contributing to our project, you're not just writing code; you're joining a movement dedicated to creating something truly outstanding with Rust. Together, we can build software that's not only powerful and efficient but also accessible and enjoyable for everyone in the open-source community.</p>
                    <p>Feel free to customize and expand upon these points to align with your project's ethos and goals. This framework is designed to appeal to potential contributors' motivations and showcase the unique benefits of joining your project.</p>
                    `
				]
			}
		]
	},
	{
		heading: 'How to contribute?',
		link: 'howContribute',
		body: [],
		subheadings: [
			{
				heading: '',
				link: '',
				body: []
			}
		]
	},
	{
		heading: 'Knowledge Base',
		link: 'knowledgeBase',
		body: [],
		subheadings: [
			{
				heading: 'What Are Torrents',
				link: 'whatAreTorrents',
				body: [
					`
                    <p>A <strong>torrent</strong> is a small file that contains metadata about the files and folders
					to be shared and information about the network of computers that share these files. It's used
					with BitTorrent protocol, which enables fast and efficient distribution of large files over
					the internet by allowing users to connect directly to each other to download and upload portions
					of the file simultaneously. This decentralized method of sharing files reduces the load on
					any single server and can lead to faster download speeds for the users involved. Torrents themselves
					do not contain the actual content being shared, only the information needed to find and download
					the content from peers in the BitTorrent network.</p>
                    `
				]
			},
			{
				heading: 'What Is a Tracker',
				link: 'whatIsTracker',
				body: [
					`
                    <p>A <strong>BitTorrent tracker</strong> is a server that facilitates communication between peers
					using the BitTorrent protocol. When you open a torrent file with a BitTorrent client, the tracker
					is contacted to help find other users who are sharing the same files. It does not store or
					distribute the content itself but keeps track of the IP addresses of the peers in the swarm
					(the group of computers involved in sharing a particular file). The tracker responds to requests
					from clients with a list of peers, allowing them to connect directly to each other to start
					downloading and uploading pieces of the file. Essentially, the tracker acts as a central hub
					that enables peers to find each other, significantly improving the efficiency and speed of
					file distribution.</p>
                    `
				]
			},
			{
				heading: 'What Is a Torrent Index',
				link: 'whatIsTorrentIndex',
				body: [
					`
                    <p>A <strong>BitTorrent index</strong> site is a website that lists torrent files for download.
					These sites serve as search engines or directories for finding specific files or content within
					the BitTorrent network. Users can search for and download torrent files based on various categories
					such as movies, music, software, games, and more. Each torrent file listed on an index site
					contains metadata about the content it represents, such as the file name, size, and the address
					of the tracker managing the distribution of the content.</p>
				    <p>BitTorrent index sites do not host the content files themselves; instead, they provide the
					torrent files which users can then open with their BitTorrent clients to download the
					actual content from other peers in the network. These sites play a crucial role in the
					BitTorrent ecosystem by making it easier for users to find and access content distributed
					via BitTorrent.</p>
                    `
				]
			}
		]
	},
	{
		heading: 'List of projects using BitTorrent',
		link: 'listOfProjects',
		body: [
			`
            <ul>
                <li>WebTorrent:</li>
                <ul>
                    <li>
                        <a href="https://webtorrent.io/faq">https://webtorrent.io/faq</a>
                    </li>
                </ul>
                <li>Others:</li>
                <ul>
                    <li>
                        <a href="https://github.com/urbanguacamole/torrent-paradise">torrent-paradise</a>
                    </li>
                    <li>
                        <a href="https://academictorrents.com/">https://academictorrents.com/</a>
                    </li>
                    <li>
                        <a href="https://github.com/bigscience-workshop/petals"
                            >https://github.com/bigscience-workshop/petals</a
                        >
                    </li>
                </ul>
            </ul>
            `
		],
		subheadings: [
			{
				heading: '',
				link: '',
				body: []
			}
		]
	},
	{
		heading: 'Resources',
		link: 'resources',
		body: [],
		subheadings: [
			{
				heading: '',
				link: '',
				body: []
			}
		]
	}
];

export const aboutContent: postContentItem[] = [
	{
		heading: 'Why BitTorrent?',
		link: 'bitTorrent',
		body: [
			`
            <p>Short intro. Eu proin ultricies nunc turpis purus dui ultrices mattis. Amet platea fames orci adipiscing pharetra auctor eget arcu adipiscing. Aliquam ipsum mattis ipsum malesuada aliquet ipsum. Convallis tortor rhoncus cursus porttitor tellus sed.</p>
            `
		],
		subheadings: [
			{
				heading: 'Why does the BitTorrent protocol still matter?',
				link: 'bitTorrentProtocol',
				body: [
					`
                    <p>In the rapidly evolving landscape of digital technology, the BitTorrent protocol remains a
					cornerstone for distributed file sharing. Despite the emergence of newer technologies like
					the InterPlanetary File System (IPFS) and centralized cloud storage solutions such as
					Dropbox, Google Drive, and Amazon S3, BitTorrent continues to hold significant relevance.
					Here's why maintaining and enhancing BitTorrent is not just worthwhile but essential.</p>
                    `
				]
			},
			{
				heading: 'Efficiency and scalability',
				link: 'efficiency',
				body: [
					`
                    <p>BitTorrent excels in efficiently distributing large files across the internet. By allowing
					users to download and upload pieces of files simultaneously from multiple sources, it
					minimizes server load and avoids bottlenecks. This peer-to-peer approach scales naturally
					with the number of users, making it exceptionally effective for sharing large datasets,
					media files, and software distributions.</p>
                    `
				]
			},
			{
				heading: 'Current use cases',
				link: 'currentUses',
				body: [
					`
                    <p>Media Distribution: Independent creators and open-source projects often use BitTorrent to
					distribute content without incurring high bandwidth costs.</p>
				    <p>Software Updates: Some companies distribute updates and patches for their software via
					BitTorrent to reduce the strain on their servers.</p>
				    <p>Data Archiving: Academic and research institutions use BitTorrent for archiving and
					sharing large datasets and publications.</p>
                    `
				]
			},
			{
				heading: 'Future use cases',
				link: 'futureUses',
				body: [
					`
                    <p>Decentralized Internet: BitTorrent can play a crucial role in the development of a
					decentralized web, where content is distributed and accessed without centralized control.</p>
				    <p>Blockchain and Cryptocurrency: Integrating BitTorrent with blockchain technology couldlead to innovative content distribution models, rewarding content creators and sharers
					directly.</p>
				    <p>Emergency Communications: In scenarios where traditional communication infrastructures
					fail, BitTorrent can facilitate the sharing of information and emergency updates.</p>
                    `
				]
			},
			{
				heading: 'BT vs. IPFS',
				link: 'btIpfs',
				body: [
					`
                    <p>While both BitTorrent and IPFS facilitate decentralized file sharing, they operate
					differently. IPFS addresses content by hashes, ensuring that users access the exact
					content regardless of its location. This approach is ideal for immutable content
					distribution but might not be as efficient as BitTorrent for mutable or dynamically
					updated content.</p>
                    `
				]
			},
			{
				heading: 'BT vs. centralized solutions',
				link: 'btCs',
				body: [
					`
                    <p>Centralized cloud storage services like Dropbox, Google Drive, and Amazon S3 offer
					convenience and integration with various applications. However, they rely on central
					servers, which can become points of failure or targets for censorship. BitTorrent's
					decentralized nature inherently protects against these issues, offering resilience and
					freedom from control by any single entity.</p>
                    `
				]
			},
			{
				heading: 'Conclusion',
				link: 'conclusion',
				body: [
					`
                    <p>The continued relevance of BitTorrent lies in its unparalleled efficiency, scalability,
					and its foundation for a more decentralized internet. While newer technologies like IPFS
					offer compelling advancements, BitTorrent's unique strengths in supporting dynamic content
					and its established infrastructure make it irreplaceable. As digital content continues to
					grow in size and volume, the importance of efficient, decentralized distribution networks
					becomes ever more critical. Investing in the maintenance and improvement of BitTorrent is
					not just about preserving a technology; it's about sustaining a vision for an open,
					scalable, and resilient internet.</p>
                    `
				]
			}
		]
	},
	{
		heading: 'Why Torrust',
		link: 'whyTorrust',
		body: [
			`
            <p>Developing new tools for BitTorrent in modern programming languages like Rust, along with
			more contemporary interfaces, is essential for several reasons. These developments not
			only align with current technological trends but also address evolving user needs and
			security concerns. Here are some key points illustrating the necessity of these
			advancements:</p>
            `
		],
		subheadings: [
			{
				heading: 'Performance & Efficiency',
				link: 'performanceEfficiency',
				body: [
					`
                    <ul>
					<li>
						<strong>High Performance:</strong> Rust offers exceptional speed and efficiency, which can
						significantly improve the performance of BitTorrent tools. Its focus on concurrency and memory
						safety allows for the development of high-speed data transmission tools without the common
						pitfalls of memory leaks and crashes.
					</li>
					<li>
						<strong>Resource Optimisation:</strong> Modern devices vary widely in their capabilities.
						Developing new tools in Rust can help optimize resource use, making BitTorrent more accessible
						on a wider range of devices, from high-end servers to low-powered IoT devices.
					</li>
				    </ul>
                    `
				]
			},
			{
				heading: 'Security & Reliability',
				link: 'securityReliability',
				body: [
					`
                    <ul>
					<li>
						<strong>Memory Safety: </strong> Rust's emphasis on memory safety without a garbage collector
						minimizes common security vulnerabilities found in other languages, such as buffer overflows
						and dangling pointers. This is crucial for peer-to-peer networks that are inherently exposed
						to data from untrusted sources.
					</li>
					<li>
						<strong>Dependability: </strong> By leveraging Rust's type system and ownership model, developers
						can build more reliable applications that are less prone to crashes and unexpected behavior,
						enhancing the user experience.
					</li>
				    </ul>
                    `
				]
			},
			{
				heading: 'User Experience & Accessibility',
				link: 'userExperience',
				body: [
					`
                    <ul>
					<li>
						<strong>Modern Interfaces: </strong> Updating BitTorrent clients with modern, user-friendly
						interfaces can make the technology more accessible to a broader audience, encouraging adoption.
						Simplifying the user experience without compromising on advanced features appeals to both
						novice and experienced users.
					</li>
					<li>
						<strong>Cross-Platform Compatibility: </strong>Developing with modern frameworks and
						languages supports better cross-platform compatibility, ensuring a consistent and
						functional experience across various operating systems and devices.
					</li>
				    </ul>
                    `
				]
			},
			{
				heading: 'Future-Proofing & Innovation',
				link: 'futureProofing',
				body: [
					`
                    <ul>
					<li>
						<strong>Adapting to Technological Advances: </strong> The digital landscape is constantly
						evolving. Developing new tools with modern languages ensures compatibility with the latest
						technologies and standards, making BitTorrent more adaptable and future-proof.
					</li>
					<li>
						<strong>Encouraging Innovation: </strong>By embracing modern programming paradigms and
						languages, the BitTorrent ecosystem can stimulate innovation, leading to the development
						of new features, improved efficiency, and potentially new use cases for distributed file
						sharing.
					</li>
				    </ul>
                    `
				]
			},
			{
				heading: 'Integration & Interoperability',
				link: 'integration',
				body: [
					`
                    <ul>
					<li>
						<strong>Blockchain & Beyond: </strong>The integration of BitTorrent with emerging
						technologies like blockchain and decentralized finance (DeFi) requires a modern approach
						to ensure seamless interoperability and to unlock new functionalities and business
						models.
					</li>
					<li>
						<strong>Ecosystem Synergy: </strong>Developing tools in languages like Rust promotes
						synergy within the ecosystem, as Rust is increasingly used in networked applications,
						cryptocurrency platforms, and other areas relevant to BitTorrent's growth and
						integration.
					</li>
				    </ul>
				    <p>In conclusion, the development of new BitTorrent tools in Rust and the focus on modern
					interfaces is not merely a pursuit of technological modernization. It's a strategic move
					to enhance performance, security, user experience, and future readiness, ensuring that
					BitTorrent remains a vital part of the internet's infrastructure.</p>
                    `
				]
			}
		]
	},
	{
		heading: 'The Team',
		link: 'team',
		body: [],
		subheadings: [
			{
				heading: '',
				link: '',
				body: []
			}
		]
	},
	{
		heading: 'Collaborators',
		link: 'collaborators',
		body: [],
		subheadings: [
			{
				heading: '',
				link: '',
				body: []
			}
		]
	},
	{
		heading: 'Sponsors',
		link: 'sponsors',
		body: [
			`
            <p>Nautilus Cyberneering is dedicated to creating new Open Source Ecosystems. They define
            Open Source Ecosystems as vibrant communities of users and creators who collaboratively
            develop open source software that is secure, respectful, and adds value for future
            generations. This approach is what they term Cyberneering. With a focus on software and
            hardware development within these ecosystems, their aim is to produce technology that
            adheres to these principles.</p>
			<p>Their activities encompass developing open source software with an emphasis on security,
            community engagement, and long-term value. This includes a commitment to software that
            respects user privacy and is designed with future generations in mind. Nautilus
            Cyberneering's approach combines innovation in the cybernetic field with open source
            philosophy, fostering environments where collaborative development can thrive.</p>
            `
		],
		subheadings: [
			{
				heading: '',
				link: '',
				body: []
			}
		]
	}
];
