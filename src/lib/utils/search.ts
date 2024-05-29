import FlexSearch from 'flexsearch';
import type { BlogPost } from '$lib/utils/types';

interface Post {
	slug: string;
	title: string;
	excerpt: string;
	tags: string[];
}

let postsIndex: FlexSearch.Index;
let posts: Post[];

export function createPostsIndex(data: BlogPost[]) {
	postsIndex = new FlexSearch.Index({ tokenize: 'forward' });

	const mappedPosts = data.map((post) => ({
		slug: post.slug,
		title: post.title,
		excerpt: post.excerpt || '',
		tags: post.tags
	}));

	mappedPosts.forEach((post, i) => {
		const item = `${post.title} ${post.excerpt} ${post.tags}`;
		postsIndex.add(i, item);
	});

	posts = mappedPosts;
}

export function searchPostsIndex(searchTerm: string) {
	const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const results = postsIndex.search(match);

	return results
		.map((index) => posts[index as number])
		.map(({ slug, title, excerpt, tags }) => {
			return {
				slug,
				title: replaceTextWithMarker(title, match),
				content: getMatches(excerpt, match),
				tags: tags.map((tag) => replaceTextWithMarker(tag, match))
			};
		});
}

function replaceTextWithMarker(text: string, match: string) {
	const regex = new RegExp(match, 'gi');
	return text.replaceAll(regex, (match) => `<mark>${match}</mark>`);
}

function getMatches(text: string, searchTerm: string, limit = 1) {
	const regex = new RegExp(searchTerm, 'gi');
	const indexes = [];
	let matches = 0;
	let match;

	while ((match = regex.exec(text)) !== null && matches < limit) {
		indexes.push(match.index);
		matches++;
	}

	return indexes.map((index) => {
		const start = Math.max(0, index - 20);
		const end = Math.min(text.length, index + 80);
		const excerpt = text.substring(start, end).trim();
		return `...${replaceTextWithMarker(excerpt, searchTerm)}...`;
	});
}
