"use client";

import React from 'react';
import { ExternalLink, Github, FolderGit2, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link'; 
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { projects } from '@/app/data'; 

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
       <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
            <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 flex items-center gap-3">
                    <FolderGit2 className="text-brand-500" size={32}/> 
                    Featured <span className="text-brand-600">Projects</span>
                </h2>
                <div className="w-20 h-1.5 bg-brand-500 rounded-full"></div>
                <p className="text-slate-500 max-w-xl text-lg">
                    A selection of my recent work, ranging from full-stack web apps to specialized system tools.
                </p>
            </div>
            
            <Link
              href="https://github.com/mercyXp" 
              target="_blank" 
              rel="noreferrer" 
              className="group flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors bg-brand-50 px-5 py-2.5 rounded-full"
            >
                View GitHub 
                <ExternalLink size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"/>
            </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
                <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 flex flex-col h-full"
                >
                    {/* Image Container */}
                    <Link href={`/projects/${project.id}`} className="block h-72 overflow-hidden relative">
                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-brand-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                           <div className="bg-white text-brand-600 px-6 py-2.5 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                              View Project Details
                           </div>
                        </div>
                        
                        <Image 
                            src={project.image} 
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                    </Link>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider rounded-md border border-slate-100">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <Link href={`/projects/${project.id}`} className="group/title inline-block mb-3">
                            <h3 className="text-2xl font-bold text-slate-900 group-hover/title:text-brand-600 transition-colors flex items-center gap-2">
                                {project.title}
                                <ArrowRight size={22} className="opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all text-brand-500" />
                            </h3>
                        </Link>

                        <p className="text-slate-600 mb-8 grow leading-relaxed">
                            {project.description}
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-4 mt-auto">
                             {project.link && (
                                <a 
                                  href={project.link} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  className="flex-1 px-4 py-3 bg-slate-900 text-white text-center rounded-xl font-bold hover:bg-brand-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10"
                                >
                                    <Globe size={18} /> Demo
                                </a>
                             )}
                             
                             <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noreferrer"
                                className={cn(
                                  "flex-1 px-4 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 border",
                                  project.link 
                                    ? "bg-white border-slate-200 text-slate-700 hover:border-brand-500 hover:text-brand-600" 
                                    : "bg-slate-900 text-white border-transparent hover:bg-brand-600"
                                )}
                             >
                                <Github size={18} /> GitHub
                             </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* NEW: View More Projects Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link 
            href="/projects" 
            className="group flex items-center gap-3 pt-8 text-brand-600 font-bold text-lg hover:text-brand-700 transition-all"
          >
            Explore All Projects
            <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all shadow-sm">
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>
       </div>
    </section>
  );
};

export default Projects;