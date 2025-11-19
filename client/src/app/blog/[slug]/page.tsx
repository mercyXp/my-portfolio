import { posts, PostSlug } from "@/lib/posts";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: PostSlug };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = posts[params.slug];

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <p className="text-gray-500 mb-6">{post.date}</p>

      <article
        className="prose prose-lg dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
