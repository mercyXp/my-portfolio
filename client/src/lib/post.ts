export const posts = {
  "why-i-love-fullstack-development": {
    title: "Why I Love Full-Stack Development",
    date: "2025-01-10",
    description: "How full-stack development gives me the power to build complete experiences.",
    content: `
      <p>
        Full-stack development gives me the freedom to work across the entire technology stack...
      </p>
    `,
  },

  "getting-started-with-nextjs13": {
    title: "Getting Started with Next.js 13 App Router",
    date: "2025-01-15",
    description: "A beginner-friendly guide to the new App Router and how it changes routing.",
    content: `
      <p>
        Next.js 13 introduces the App Router, a completely new way of building applications...
      </p>
    `,
  },
} as const;

// Strong typing for safe slug usage
export type PostSlug = keyof typeof posts;

// Convert posts into an array (useful for looping)
export const allPosts = Object.entries(posts).map(([slug, data]) => ({
  slug: slug as PostSlug,
  ...data,
}));
