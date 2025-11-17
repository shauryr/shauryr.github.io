import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function BlogIndex() {
  const posts = [
    {
      slug: "deepseek-disruption",
      title: "DeepSeek's $600B Disruption: Why Market Panic Misses the Point",
      date: "January 31, 2025",
      readTime: "5 min read",
      excerpt: "When China's DeepSeek AI model sent Nvidia's market value plummeting by $600 billion, the tech world erupted in panic. But here's the contrarian take: this wasn't a crisis—it was a long-overdue reality check.",
      tags: ["AI Competition", "Market Analysis", "Efficiency"]
    },
    {
      slug: "reasoning-revolution",
      title: "2025: The Year AI Learned to Think (But Not How You Think)",
      date: "January 29, 2025",
      readTime: "6 min read",
      excerpt: "Reasoning defined the year, but when we say AI models can now 'reason,' we're not talking about consciousness or understanding. We're talking about something far more specific and, frankly, more interesting.",
      tags: ["AI Reasoning", "Agents", "Research"]
    },
    {
      slug: "democratizing-ai-compute",
      title: "The $3,000 Supercomputer That Fits in Your Hand: Why Project Digits Changes Everything",
      date: "January 28, 2025",
      readTime: "5 min read",
      excerpt: "Nvidia's Project Digits might be the most important AI hardware announcement of the decade. Not because of the specs, but because of what it represents: the democratization of AI research infrastructure.",
      tags: ["Hardware", "Research Access", "Democratization"]
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-4 py-6 sm:py-8 bg-gray-900 text-gray-100 min-h-screen">
      <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
        <ArrowLeft className="mr-2" size={20} />
        Back to Home
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Blog</h1>
        <p className="text-gray-300 text-lg">
          Perspectives on AI research, language models, and the future of intelligent systems.
        </p>
      </header>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-gray-700 rounded-lg p-6 bg-gray-800 hover:border-purple-500 transition-colors"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-white hover:text-purple-300 transition-colors">
                {post.title}
              </h2>
            </Link>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
              <span className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock size={16} className="mr-2" />
                {post.readTime}
              </span>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-700 text-purple-300 rounded-full text-sm border border-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-700 text-center">
        <p className="text-gray-400">
          Want to discuss these ideas? Find me on{" "}
          <Link href="https://twitter.com/shauryr" className="text-blue-400 hover:underline">
            Twitter
          </Link>
          {" "}or{" "}
          <Link href="mailto:shauryr@gmail.com" className="text-blue-400 hover:underline">
            email
          </Link>
          .
        </p>
      </footer>
    </main>
  )
}
