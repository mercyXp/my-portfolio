import { getBlogPosts } from '@/lib/mdx';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowUpRight } from 'lucide-react';
import NavBar from '../components/NavBar';

export default async function BlogListing() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <NavBar activeSection="blog" isHome={false} />
      
      <main className="container mx-auto px-4 pt-32 pb-20 max-w-6xl">
        <header className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6">Journal</h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium">
            Personal notes, technical deep-dives, and stories from my development journey.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`} 
              className="group flex flex-col bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden mb-8">
                <Image src={post.meta.image} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="text-slate-900" size={20} />
                </div>
              </div>
              
              <div className="px-6 pb-8">
                <div className="flex items-center gap-3 text-brand-500 font-bold text-[10px] uppercase tracking-widest mb-4">
                  <Calendar size={12} /> {post.meta.date}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight group-hover:text-brand-600 transition-colors mb-4">
                  {post.meta.title}
                </h2>
                <p className="text-slate-500 line-clamp-2 text-base leading-relaxed">
                  {post.meta.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}