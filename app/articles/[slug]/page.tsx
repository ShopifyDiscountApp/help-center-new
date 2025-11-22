import { notFound } from 'next/navigation';
import { Clock, Calendar } from 'lucide-react';
import Breadcrumb from '@/components/article/Breadcrumb';
import TableOfContents from '@/components/article/TableOfContents';
import RelatedArticles from '@/components/article/RelatedArticles';
import ArticleNavigation from '@/components/article/ArticleNavigation';
import FeedbackWidget from '@/components/ui/FeedbackWidget';
import {
  getAllArticleSlugs,
  getArticleBySlug,
  getRelatedArticles,
  getAdjacentArticles,
  extractTableOfContents,
} from '@/lib/articles';
import { categories } from '@/lib/categories';
import { marked } from 'marked';

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      type: 'article',
      publishedTime: article.frontmatter.lastUpdated,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(params.slug);
  const { previous, next } = getAdjacentArticles(params.slug);
  const toc = extractTableOfContents(article.content);

  // Convert markdown to HTML
  const htmlContent = marked(article.content);

  const category = categories.find((cat) => cat.slug === article.frontmatter.category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Main Content */}
        <div className="lg:col-span-9">
          <Breadcrumb
            items={[
              { label: 'Articles', href: '/articles' },
              { label: category?.name || 'Category', href: `/articles/category/${article.frontmatter.category}` },
              { label: article.frontmatter.title },
            ]}
          />

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {article.frontmatter.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                {article.frontmatter.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readingTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Updated {article.frontmatter.lastUpdated}</span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="article-content">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>

            {/* Feedback Widget */}
            <FeedbackWidget />

            {/* Navigation */}
            <ArticleNavigation previous={previous} next={next} />

            {/* Related Articles */}
            <RelatedArticles articles={relatedArticles} />
          </article>
        </div>

        {/* Sidebar - Table of Contents */}
        <aside className="hidden lg:block lg:col-span-3">
          <TableOfContents items={toc} />
        </aside>
      </div>
    </div>
  );
}
