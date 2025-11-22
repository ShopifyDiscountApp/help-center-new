import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Article } from '@/types/article';

interface ArticleNavigationProps {
  previous?: Article;
  next?: Article;
}

export default function ArticleNavigation({ previous, next }: ArticleNavigationProps) {
  if (!previous && !next) return null;

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {previous ? (
          <Link
            href={`/articles/${previous.slug}`}
            className="group p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all dark:bg-gray-800 dark:border-gray-700 dark:hover:border-primary-600"
          >
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
              <ChevronLeft className="w-4 h-4 mr-1" />
              <span>Previous</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {previous.frontmatter.title}
            </h3>
          </Link>
        ) : (
          <div />
        )}

        {next && (
          <Link
            href={`/articles/${next.slug}`}
            className="group p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all dark:bg-gray-800 dark:border-gray-700 dark:hover:border-primary-600 text-right"
          >
            <div className="flex items-center justify-end text-sm text-gray-500 dark:text-gray-400 mb-2">
              <span>Next</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {next.frontmatter.title}
            </h3>
          </Link>
        )}
      </div>
    </div>
  );
}
