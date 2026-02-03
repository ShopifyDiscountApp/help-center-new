import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
        >
          <Home className="w-5 h-5" />
          Go Home
        </Link>
        <Link
          href="/search"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-500 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-primary-200"
        >
          <Search className="w-5 h-5" />
          Search Articles
        </Link>
      </div>
    </div>
  );
}
