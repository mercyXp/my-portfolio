"use client";

import { motion } from 'framer-motion';
import { projects } from '@/app/data';
import { FolderGit2, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 pt-8 mb-4">
            <FolderGit2 className="text-brand-500" size={40} />
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
              All <span className="text-brand-600">Projects</span>
            </h1>
          </div>
          <div className="w-24 h-1.5 bg-brand-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Take a look at some of the projects I&apos;ve built/building
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 h-full"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-brand-600 text-xs font-bold rounded-full shadow-lg">
                      {project.projectType}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                    <Calendar size={16} />
                    <span>{project.publishedDate}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 bg-brand-50 text-brand-600 text-xs font-semibold rounded-md">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;