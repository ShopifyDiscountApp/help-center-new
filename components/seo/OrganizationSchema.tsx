/**
 * Organization Schema Component
 * Adds Organization structured data for better SEO
 */

import { organizationSchema } from '@/lib/seo-config';

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}
