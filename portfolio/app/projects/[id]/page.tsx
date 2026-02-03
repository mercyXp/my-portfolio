"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { projects } from '@/app/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  Clock, 
  CheckCircle2,
  Tag
} from 'lucide-react';

const ProjectDetailPage = () => {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-brand-600 hover:text-brand-700 font-semibold">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-600 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-brand-50 text-brand-600 text-sm font-bold rounded-full">
              {project.projectType}
            </span>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Calendar size={16} />
              <span>{project.publishedDate}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Clock size={16} />
              <span>{project.duration}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.link && project.link !== '#' && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20"
              >
                <ExternalLink size={20} />
                View Live Demo
              </Link>
            )}
            {project.github && project.github !== '#' && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
              >
                <Github size={20} />
                View Code
              </Link>
            )}
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Problem Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 bg-white rounded-2xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
             Problem Statement
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            {project.problemStatement}
          </p>
        </motion.section>

        {/* Solution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 bg-white rounded-2xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
             Solution
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            {project.solution}
          </p>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12 bg-white rounded-2xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
             Key Features
          </h2>
          <ul className="space-y-4">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-600 text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Technologies Used */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 bg-white rounded-2xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Tag size={24} />
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-slate-50 text-slate-700 font-semibold rounded-lg border border-slate-200 hover:border-brand-500 hover:text-brand-600 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center bg-linear-to-r from-brand-50 to-slate-50 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Interested in this project?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Let&apos;s discuss how we can work together on similar solutions.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;