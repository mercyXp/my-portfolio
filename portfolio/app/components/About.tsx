"use client";

import React from 'react';
import { Heart, Coffee, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-white">
      {/* Optional: Add a subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-brand-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            About <span className="text-brand-600">Me</span>
           </h2>
           <div className="w-20 h-1.5 bg-brand-500 mx-auto rounded-full mb-6"></div>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            The person behind the pull requests, coffee cups, and late-night debugging sessions.
           </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-14 shadow-sm border border-slate-100 relative overflow-hidden animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
          
          {/* Decorative Corner (Now using Brand Colors) */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-100/50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            
            {/* Left Column: Avatar & Rating */}
            <div className="md:w-1/3 flex flex-col items-center">
                <div className="relative">
                  {/* Decorative Ring */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-brand-500 to-indigo-500 opacity-20 animate-pulse"></div>
                  
                  <div className="w-44 h-44 rounded-full bg-white p-1.5 shadow-xl relative z-10">
                    <div className="w-full h-full rounded-full overflow-hidden">
                        {/* 
                          Using Next.js Image for better performance. 
                          Replace src with your actual photo path later.
                        */}
                        <img 
                            src="/mercy-avatar.JPG" 
                            alt="Mercy Avatar" 
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
                        />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col items-center gap-2">
                    <div className="flex gap-1 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} fill="currentColor" />
                        ))}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Stack Engineer</span>
                </div>
            </div>

            {/* Right Column: Bio */}
            <div className="md:w-2/3 space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I am a <strong className="text-slate-900 font-semibold">Full Stack Developer</strong> with a strong foundation in software engineering and a focus on building scalable, real-world solutions. My work goes beyond implementation to include system architecture, database design, and deep problem solving.
              </p>
              <p>
                I approach development holistically, ensuring performance, maintainability, and clarity across the entire system. I enjoy turning complex requirements into structured, reliable applications that actually make sense to users and teams.
              </p>
              
              <div className="bg-brand-50/50 border-l-4 border-brand-500 p-4 rounded-r-lg">
                <p className="font-medium text-brand-700 italic text-base">
                  &quot;I enjoy breaking down tough problems so much that debugging feels more like a puzzle than a chore.&quot;
                </p>
              </div>
              
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                       <Heart className="text-red-500" size={20} /> 
                    </div>
                    <span className="text-sm font-medium text-slate-700">Passionate about UI/UX</span>
                 </div>
                 <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                       <Coffee className="text-amber-700" size={20} /> 
                    </div>
                    <span className="text-sm font-medium text-slate-700">Fueled by Coffee</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;