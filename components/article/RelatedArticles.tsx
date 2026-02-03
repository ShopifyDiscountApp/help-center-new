import Link from 'next/link';
import { Article } from '@/types/article';
import { ArrowRight } from 'lucide-react';

interface RelatedArticlesProps {
  articles: Article[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
              {article.frontmatter.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {article.frontmatter.description}
            </p>
            <div className="flex items-center text-sm text-primary-500 font-medium">
              <span>Read more</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
