'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import ArticleCard from '@/components/article/ArticleCard';
import SearchBar from '@/components/ui/SearchBar';
import { Article } from '@/types/article';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all articles
    fetch('/api/articles')
      .then((res) => res.json())
      .then((data) => {
        setAllArticles(data);
        setResults(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);

    if (!searchQuery.trim()) {
      setResults(allArticles);
      return;
    }

    const lowercaseQuery = searchQuery.toLowerCase();
    const filtered = allArticles.filter(
      (article) =>
        article.frontmatter.title.toLowerCase().includes(lowercaseQuery) ||
        article.frontmatter.description.toLowerCase().includes(lowercaseQuery) ||
        article.content.toLowerCase().includes(lowercaseQuery) ||
        article.frontmatter.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
    );

    setResults(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Search Articles
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Find answers to your questions about Optionify
        </p>

        <SearchBar onSearch={handleSearch} placeholder="Search for articles, features, or topics..." />
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600"></div>
            <span>Loading articles...</span>
          </div>
        </div>
      ) : (
        <>
          {query && (
            <div className="mb-6">
              <p className="text-gray-600">
                Found <span className="font-semibold text-gray-900">{results.length}</span> result{results.length !== 1 ? 's' : ''} for &quot;{query}&quot;
              </p>
            </div>
          )}

          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : query ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or browse all articles
              </p>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
