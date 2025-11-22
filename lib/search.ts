import Fuse from 'fuse.js';
import { Article, SearchResult } from '@/types/article';

export function searchArticles(articles: Article[], query: string): SearchResult[] {
  if (!query.trim()) {
    return articles.map((article) => ({
      article,
      score: 0,
      matches: [],
    }));
  }

  const fuse = new Fuse(articles, {
    keys: [
      { name: 'frontmatter.title', weight: 0.5 },
      { name: 'frontmatter.description', weight: 0.3 },
      { name: 'content', weight: 0.2 },
      { name: 'frontmatter.tags', weight: 0.1 },
    ],
    includeScore: true,
    includeMatches: true,
    threshold: 0.4,
    minMatchCharLength: 2,
  });

  const results = fuse.search(query);

  return results.map((result) => ({
    article: result.item,
    score: result.score || 0,
    matches: result.matches?.map((match) => match.key || '') || [],
  }));
}
