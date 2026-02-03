import ArticleCard from '@/components/article/ArticleCard';
import { getAllArticles } from '@/lib/articles';
import { categories } from '@/lib/categories';

export const metadata = {
  title: 'All Articles',
  description: 'Browse all Optionify help articles and documentation',
};

export default function ArticlesPage() {
  const allArticles = getAllArticles();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          All Articles
        </h1>
        <p className="text-lg text-gray-600">
          Browse all {allArticles.length} articles across all categories
        </p>
      </div>

      {categories.map((category) => {
        const categoryArticles = allArticles.filter(
          (article) => article.frontmatter.category === category.slug
        );

        if (categoryArticles.length === 0) return null;

        return (
          <section key={category.slug} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.name}
                </h2>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
