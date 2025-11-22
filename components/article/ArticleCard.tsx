import Link from 'next/link';
import { Clock, Calendar } from 'lucide-react';
import { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-primary-300 transition-all dark:bg-gray-800 dark:border-gray-700 dark:hover:border-primary-600"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
        {article.frontmatter.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {article.frontmatter.description}
      </p>

      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{article.readingTime}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{article.frontmatter.lastUpdated}</span>
        </div>
      </div>

      {article.frontmatter.tags && article.frontmatter.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {article.frontmatter.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded dark:bg-primary-900 dark:text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
