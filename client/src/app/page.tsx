"use client";

import FeaturedBlogs from "@/components/featured_blogs";
import FeaturedProjects from "@/components/featured_projects";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main >
      <section aria-label="Introduction">
        <Hero />
      </section>
      <section aria-label="Projects">
        <FeaturedProjects />
      </section>
      <section aria-label="Blog posts">
        <FeaturedBlogs />
      </section>
    </main>
  );
}
