import FeaturedBlogs from "@/components/featured_blogs";
import FeaturedProjects from "@/components/featured_projects";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main >
      <Hero />
      <FeaturedProjects />
      <FeaturedBlogs />
    </main>
  );
}
