import Link from 'next/link';
import { ArticleCategory } from '@/types/article';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: ArticleCategory;
  articleCount?: number;
}

export default function CategoryCard({ category, articleCount = 0 }: CategoryCardProps) {
  return (
    <Link
      href={`/articles/category/${category.slug}`}
      className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-primary-300 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{category.icon}</div>
        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
        {category.name}
      </h3>

      <p className="text-gray-600 mb-4">
        {category.description}
      </p>

      <div className="text-sm text-gray-500">
        {articleCount} {articleCount === 1 ? 'article' : 'articles'}
      </div>
    </Link>
  );
}
