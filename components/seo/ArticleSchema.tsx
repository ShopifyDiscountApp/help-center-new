/**
 * Article Schema Component
 * Adds Article structured data to help center articles
 */

import { siteConfig } from '@/lib/seo-config';

interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  publishedTime: string;
  modifiedTime: string;
  category: string;
  tags?: string[];
  image?: string;
  readingTime?: string;
  wordCount?: number;
}

export default function ArticleSchema({
  title,
  description,
  slug,
  publishedTime,
  modifiedTime,
  category,
  tags = [],
  image = siteConfig.ogImage,
  readingTime,
  wordCount,
}: ArticleSchemaProps) {
  const url = `${siteConfig.url}/articles/${slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': url,
    headline: title,
    description,
    image: [image],
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      '@type': 'Organization',
      name: 'Optionify Team',
      url: 'https://optionify.co',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Optionify',
      logo: {
        '@type': 'ImageObject',
        url: 'https://help.optionify.co/images/optionify-logo.png',
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: category,
    keywords: tags.join(', '),
    ...(wordCount && { wordCount }),
    ...(readingTime && { timeRequired: readingTime }),
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
