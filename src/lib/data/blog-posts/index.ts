import { filterPosts, importPosts } from './utils';

// utils.ts does all the heavy lifting here, but to sum it up:
// Posts are fetched from the src/routes/(blog-article)/* folder.
// The folder name is used as the slug, and the file name MUST me +page.md
// I've left a sample post in there, but with the "hidden" property so it doesn't show up.


export const allPosts = importPosts(true);
export const filteredPosts = filterPosts(allPosts);