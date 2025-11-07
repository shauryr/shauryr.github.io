import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostData, getAllPostSlugs } from '@/lib/blog';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = await getPostData(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-12">
          <Link
            href="/blog"
            className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-800 text-purple-300 rounded text-xs border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          <div
            className="prose prose-invert max-w-none
              prose-headings:font-bold prose-headings:text-white
              prose-h1:text-3xl prose-h1:mb-4
              prose-h2:text-2xl prose-h2:mb-3 prose-h2:mt-8
              prose-h3:text-xl prose-h3:mb-2 prose-h3:mt-6
              prose-p:mb-4 prose-p:leading-relaxed prose-p:text-gray-300
              prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-purple-300
              prose-strong:text-white prose-strong:font-bold
              prose-code:text-pink-400 prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:border prose-code:border-gray-700
              prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
              prose-ul:mb-4 prose-ul:text-gray-300 prose-ol:mb-4 prose-ol:text-gray-300
              prose-li:mb-2 prose-li:text-gray-300
              prose-img:rounded-lg prose-img:shadow-md
              prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-400"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </article>
      </div>
    </div>
  );
}
