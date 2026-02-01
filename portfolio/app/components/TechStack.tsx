"use client";

import React from 'react';
import { Database, Layout, Server, Code2, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

const SKILL_CATEGORIES = [
  {
    name: 'Frontend',
    icon: Layout,
    skills: ['React', 'Next.js', 'TailwindCSS', 'HTML/CSS', 'Framer Motion'],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: ['Django', 'FastAPI', 'Node.js', 'RESTful APIs'],
  },
  {
    name: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'Supabase', 'SQL', 'Redis'],
  },
  {
    name: 'Languages',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C'],
  },
  {
    name: 'Tools',
    icon: Wrench,
    skills: ['Git & GitHub', 'Docker', 'Postman', 'Linux', 'System Design'],
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const TechStack: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            My <span className="text-brand-600">Tech Stack</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            The languages, frameworks, and tools I use to build robust and scalable digital products.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {SKILL_CATEGORIES.map((category) => {
            const Icon = category.icon;
            
            return (
              <motion.div 
                key={category.name} 
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-brand-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="p-4 bg-slate-50 text-slate-600 rounded-2xl group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors duration-300 mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800">{category.name}</h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-slate-600 text-sm py-1.5 px-2 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 group-hover:bg-brand-500 transition-colors"></div>
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;