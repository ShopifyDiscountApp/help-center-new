import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Optionify Help Center - Documentation & Guides',
    template: '%s | Optionify Help',
  },
  description: 'Complete documentation and guides for Optionify - the Shopify app for custom product options',
  keywords: ['Optionify', 'Shopify app', 'product options', 'custom options', 'help center', 'documentation'],
  authors: [{ name: 'Optionify Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://help.optionify.co',
    siteName: 'Optionify Help Center',
    title: 'Optionify Help Center - Documentation & Guides',
    description: 'Complete documentation and guides for Optionify - the Shopify app for custom product options',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optionify Help Center',
    description: 'Complete documentation and guides for Optionify',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
