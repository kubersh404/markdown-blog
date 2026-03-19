import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';

export const metadata = {
  title: 'Blog | The Majestic Feline',
  description: 'Read our latest cat stories and tips.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24 bg-zinc-950 text-white">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          The Majestic Feline Blog
        </h1>
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-purple-500 transition-colors shadow-lg">
                <h2 className="text-2xl font-bold mb-2 text-white">{post.title}</h2>
                <div className="text-sm text-zinc-400 mb-4">{post.date}</div>
                <p className="text-zinc-300">{post.description}</p>
              </div>
            </Link>
          ))}
          {posts.length === 0 && (
            <p className="text-zinc-400">No blog posts found.</p>
          )}
        </div>
      </div>
    </main>
  );
}
