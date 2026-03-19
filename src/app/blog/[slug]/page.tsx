import { getPostBySlug, getPostSlugs } from '../../../lib/blog';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: `${post.title} | Blog`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <article className="w-full max-w-3xl">
        <div className="mb-8">
          <Link href="/blog" className="text-purple-400 hover:text-purple-300 transition-colors no-underline mb-6 inline-block font-medium">
            &larr; Back to all posts
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {post.title}
          </h1>
          <time className="text-zinc-400 block font-medium">{post.date}</time>
        </div>
        
        <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-2xl shadow-2xl leading-relaxed text-zinc-300 text-lg">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-6 mt-8 text-white" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-5 mt-8 text-white" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold mb-4 mt-6 text-white" {...props} />,
              p: ({node, ...props}) => <p className="mb-6 leading-relaxed" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-outside mb-6 ml-6 space-y-2" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal list-outside mb-6 ml-6 space-y-2" {...props} />,
              li: ({node, ...props}) => <li className="pl-2" {...props} />,
              a: ({node, ...props}) => <a className="text-purple-400 hover:text-purple-300 underline underline-offset-4" {...props} />,
              strong: ({node, ...props}) => <strong className="font-bold text-white" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-purple-500 pl-4 py-2 my-8 text-zinc-400 bg-zinc-950/50 rounded-r-lg italic" {...props} />,
              img: ({node, ...props}) => <img className="rounded-2xl shadow-2xl my-8 border border-zinc-800 w-full object-cover max-h-[500px]" {...props} />,
              table: ({node, ...props}) => <div className="overflow-x-auto my-8 bg-zinc-950/50 rounded-xl border border-zinc-800 p-1"><table className="w-full text-left border-collapse" {...props} /></div>,
              th: ({node, ...props}) => <th className="border-b border-zinc-700 p-4 text-white font-bold" {...props} />,
              td: ({node, ...props}) => <td className="border-b border-zinc-800/50 p-4 text-zinc-400" {...props} />,
              code: ({node, className, children, ...props}) => {
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <code className="block bg-zinc-950 p-4 rounded-lg overflow-x-auto text-sm my-6 border border-zinc-800 text-pink-300 shadow-inner" {...props}>
                    {children}
                  </code>
                ) : (
                  <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-pink-300 text-sm border border-zinc-700" {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
