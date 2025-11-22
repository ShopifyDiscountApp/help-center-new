import { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';
import { categories } from '@/lib/categories';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://help.optionify.co';
  const articles = getAllArticles();

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Category pages
  categories.forEach((category) => {
    routes.push({
      url: `${baseUrl}/articles/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // Article pages
  articles.forEach((article) => {
    routes.push({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: new Date(article.frontmatter.lastUpdated),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  return routes;
}
