import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_PATH = path.join(process.cwd(), 'content/blog');

export async function getBlogPosts() {
  const files = fs.readdirSync(BLOG_PATH);

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const fullPath = path.join(BLOG_PATH, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContent);

    return {
      slug,
      meta: data,
    };
  });

  return posts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(BLOG_PATH, `${slug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContent);

  return { meta: data, content, slug };
}