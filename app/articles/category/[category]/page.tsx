import { notFound } from 'next/navigation';
import ArticleCard from '@/components/article/ArticleCard';
import { getArticlesByCategory } from '@/lib/articles';
import { categories } from '@/lib/categories';

export async function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const category = categories.find((cat) => cat.slug === params.category);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categories.find((cat) => cat.slug === params.category);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(params.category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">{category.icon}</span>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {category.name}
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {category.description}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          {articles.length} {articles.length === 1 ? 'article' : 'articles'}
        </p>
      </div>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No articles found in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
