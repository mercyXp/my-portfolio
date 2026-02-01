import { getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import NavBar from '@/app/components/NavBar';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#F9FAFB]"> {/* slothUI soft background */}
      <NavBar activeSection="blog" isHome={false} />

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* 1. Navigation & Breadcrumbs */}
          <nav className="flex items-center justify-between mb-12">
            <Link href="/blog" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-all font-medium text-sm group">
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-brand-500 transition-colors shadow-sm">
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              </div>
              Back to Articles
            </Link>
            <button className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-500 transition-all shadow-sm">
              <Share2 size={14} />
            </button>
          </nav>

          {/* 2. Article Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-[10px] font-bold uppercase tracking-[0.1em] mb-6 border border-brand-100">
               {post.meta.tags?.[0] || 'Inspiration'}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
              {post.meta.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-slate-400 text-sm font-medium">
              <span className="flex items-center gap-2"><Calendar size={14} /> {post.meta.date}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="flex items-center gap-2"><Clock size={14} /> {post.meta.readTime || '6 min read'}</span>
            </div>
          </header>

          {/* 3. Hero Image (Massive Rounding) */}
          <div className="relative w-full aspect-[16/9] mb-20 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200">
            <Image 
              src={post.meta.image} 
              alt={post.meta.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 4. Content Area (Narrower for Readability) */}
          <div className="max-w-2xl mx-auto">
            <div className="prose prose-slate prose-lg md:prose-xl max-w-none 
              prose-p:text-slate-600 prose-p:leading-[1.8]
              prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight
              prose-blockquote:border-l-4 prose-blockquote:border-brand-500 prose-blockquote:bg-slate-50 prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:not-italic prose-blockquote:text-slate-700
              prose-strong:text-slate-900
              prose-img:rounded-[2rem] prose-img:shadow-xl
              prose-pre:bg-slate-900 prose-pre:rounded-2xl prose-pre:shadow-inner
              ">
              <MDXRemote source={post.content} />
            </div>

            {/* 5. Author Bio Section */}
            <footer className="mt-24 pt-12 border-t border-slate-200">
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                  <Image 
                    src="/mercy-avatar.JPG" 
                    alt="Mercy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <span className="text-brand-500 font-bold text-xs uppercase tracking-widest mb-1 block">Written by</span>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Mercy Munzenzi</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Full Stack Engineer specializing in Python & React. Building digital experiences with logic and magic.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}