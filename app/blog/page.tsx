import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Blog</h1>
          <p className="text-gray-300">
            Thoughts, ideas, and reflections on AI, research, and technology.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-gray-700 pb-8 last:border-0">
                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="text-2xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  <div className="text-sm text-gray-400 mb-3">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  {post.excerpt && (
                    <p className="text-gray-300 mb-3">{post.excerpt}</p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-gray-800 text-purple-300 rounded border border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
