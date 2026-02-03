'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import { Tip, Warning, Info, Success } from './ui/Callout';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Code Block Component with Copy Button
function CodeBlock({ children, className, ...props }: any) {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : '';
  const code = String(children).replace(/\n$/, '');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!language) {
    return (
      <code className="px-1.5 py-0.5 bg-gray-100 text-primary-600 rounded text-sm font-mono" {...props}>
        {children}
      </code>
    );
  }

  return (
    <div className="relative my-6 group">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-gray-300" />
        )}
      </button>
      <div className="absolute top-2 left-3 text-xs text-gray-400 font-mono uppercase">
        {language}
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: '0.5rem',
          padding: '2rem 1rem 1rem 1rem',
          fontSize: '0.875rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

// Custom Image Component
function MDXImage(props: any) {
  return (
    <div className="my-6">
      <div className="relative rounded-lg overflow-hidden border border-gray-200">
        <Image
          {...props}
          width={1200}
          height={675}
          className="w-full h-auto"
          alt={props.alt || ''}
        />
      </div>
      {props.alt && (
        <p className="mt-2 text-sm text-center text-gray-600 italic">
          {props.alt}
        </p>
      )}
    </div>
  );
}

// Heading components with anchor links
function createHeading(level: number) {
  return function Heading({ children, ...props }: any) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    const id = typeof children === 'string'
      ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      : '';

    const className = level === 2
      ? 'text-2xl font-bold text-gray-900 mt-12 mb-4 pb-2 border-b border-gray-200'
      : 'text-xl font-semibold text-gray-900 mt-8 mb-3';

    return (
      <Tag id={id} className={className} {...props}>
        {children}
      </Tag>
    );
  };
}

// Custom components mapping
const components = {
  h2: createHeading(2),
  h3: createHeading(3),
  p: (props: any) => <p className="my-4 text-gray-700 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="my-4 space-y-2 list-disc list-inside text-gray-700" {...props} />,
  ol: (props: any) => <ol className="my-4 space-y-2 list-decimal list-inside text-gray-700" {...props} />,
  li: (props: any) => <li className="ml-4" {...props} />,
  a: (props: any) => (
    <a
      className="text-primary-500 hover:text-primary-600 underline"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="my-6 pl-4 border-l-4 border-gray-300 italic text-gray-700"
      {...props}
    />
  ),
  table: (props: any) => (
    <div className="my-6 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="px-4 py-2 bg-gray-50 text-left text-sm font-semibold text-gray-900" {...props} />
  ),
  td: (props: any) => (
    <td className="px-4 py-2 text-sm text-gray-700 border-t border-gray-200" {...props} />
  ),
  code: CodeBlock,
  img: MDXImage,
  Tip,
  Warning,
  Info,
  Success,
};

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={components} />;
}
