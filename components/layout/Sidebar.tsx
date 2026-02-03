'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { categories } from '@/lib/categories';

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    'getting-started',
    'option-types',
    'advanced',
  ]);

  const toggleCategory = (slug: string) => {
    setExpandedCategories((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug]
    );
  };

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <nav className="p-6 space-y-6">
        {categories.map((category) => {
          const isExpanded = expandedCategories.includes(category.slug);

          return (
            <div key={category.slug}>
              <button
                onClick={() => toggleCategory(category.slug)}
                className="flex items-center justify-between w-full text-left mb-2 hover:text-primary-600 transition-colors"
              >
                <span className="text-sm font-semibold text-gray-900">
                  {category.name}
                </span>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                )}
              </button>

              {isExpanded && category.articles && (
                <ul className="ml-2 space-y-1">
                  {category.articles.map((article) => {
                    const isActive = pathname === `/articles/${article.slug}`;

                    return (
                      <li key={article.slug}>
                        <Link
                          href={`/articles/${article.slug}`}
                          className={`block py-1.5 px-3 text-sm rounded-lg transition-colors ${
                            isActive
                              ? 'bg-primary-100 text-primary-700'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                          }`}
                        >
                          {article.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
