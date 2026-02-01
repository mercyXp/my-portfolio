"use client";

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Github, Globe, Calendar, CheckCircle2, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '@/app/data';
import Navbar from '@/app/components/NavBar'; 
// import Footer from '@/app/components/Footer'; // Uncomment when ready

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  // In Next.js 15, params is a promise
  const resolvedParams = use(params);
  const project = projects.find(p => p.id === resolvedParams.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Project Not Found</h2>
          <Link href="/" className="text-brand-600 hover:text-brand-700 font-medium flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-200 selection:text-brand-900">
      <Navbar activeSection="" isHome={false} />

      <main className="container mx-auto px-4 md:px-6 max-w-5xl py-24 md:py-32">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 mb-8 transition-colors font-medium group">
           <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 mb-12"
        >
            <div className="h-64 md:h-96 w-full relative">
                <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 bg-gradient-to-t from-slate-900/90 to-transparent">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
                    <div className="flex flex-wrap gap-3">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full text-sm font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-8 md:p-12 grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-10">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">{project.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-brand-50/50 p-6 rounded-2xl border border-brand-100">
                             <h3 className="font-bold text-brand-900 mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-brand-500 rounded-full"></span> Problem
                             </h3>
                             <p className="text-slate-700 text-sm leading-relaxed">{project.problemStatement}</p>
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                             <h3 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span> Solution
                             </h3>
                             <p className="text-slate-700 text-sm leading-relaxed">{project.solution}</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Layers className="text-brand-500" /> Key Features
                        </h2>
                        <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                            {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle2 size={20} className="text-brand-500 shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                     <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-4">Project Info</h3>
                        <div className="flex items-center gap-3 text-slate-600">
                            <Calendar size={20} className="text-brand-500" />
                            <div>
                                <span className="block text-xs text-slate-400 uppercase font-bold tracking-wider">Duration</span>
                                <span className="font-medium">{project.duration}</span>
                            </div>
                        </div>
                     </div>

                     <div className="flex flex-col gap-3">
                         {project.link !== "#" && (
                            <a href={project.link} target="_blank" rel="noreferrer" className="w-full py-3.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-200">
                                <Globe size={18} /> Live Demo
                            </a>
                         )}
                         {project.github !== "#" && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg">
                                <Github size={18} /> Source Code
                            </a>
                         )}
                     </div>
                </div>
            </div>
        </motion.div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}