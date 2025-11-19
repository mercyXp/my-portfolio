import Link from "next/link";

const posts = [
  {
    slug: "why-i-love-fullstack-development",
    title: "Why I Love Full-Stack Development",
    date: "2025-01-10",
    description: "A breakdown of why full-stack engineering gives me superpowers.",
  },
  {
    slug: "getting-started-with-nextjs13",
    title: "Getting Started with Next.js 13 App Router",
    date: "2025-01-15",
    description: "A beginner-friendly introduction to the new App Router.",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border rounded-lg p-5 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 text-sm">{post.date}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
