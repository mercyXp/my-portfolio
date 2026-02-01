"use client";

import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Submitting:", formData);
    setStatus('success');

    setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const year = new Date().getFullYear();

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In <span className="text-brand-600">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Let&apos;s work together on your next project
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row border border-slate-100"
        >
          
          {/* Left Info Panel */}
          <div className="bg-slate-900 text-white p-8 sm:p-10 md:p-12 lg:p-14 md:w-2/5 flex flex-col justify-between relative overflow-hidden min-h-100 md:min-h-162.5">
            {/* Removed background decorations for plain background */}

            <div className="relative z-10 flex-1 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 md:mb-6 tracking-tight">
                Let&apos;s chat!
              </h3>
              <p className="text-slate-400 mb-10 md:mb-12 leading-relaxed text-base sm:text-lg">
                Have a project in mind or just want to discuss the latest tech? I&apos;m always open to new opportunities.
              </p>
              
              <div className="space-y-6 md:space-y-7">
                <a 
                  href="mailto:munzenzimercy9@gmail.com" 
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-brand-500 transition-all duration-300 shrink-0">
                    <Mail className="text-brand-400 group-hover:text-white" size={20}/>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                      Email Me
                    </span>
                    <span className="text-sm sm:text-base font-medium text-slate-200 break-all">
                      munzenzimercy9@gmail.com
                    </span>
                  </div>
                </a>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-400" size={20}/>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                      Location
                    </span>
                    <span className="text-sm sm:text-base font-medium text-slate-200">
                      Zambia (Remote Friendly)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-10 md:pt-12 relative z-10">
              <p className="text-xs text-slate-500 font-medium tracking-wider">
                © {year} Mercy.dev
              </p>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="p-8 sm:p-10 md:p-12 lg:p-14 md:w-3/5 bg-white relative flex items-center">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="w-full flex flex-col items-center justify-center text-center space-y-5 py-12"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle size={36} className="sm:w-12 sm:h-12" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 text-base sm:text-lg max-w-sm">
                    Thank you for reaching out. I&apos;ll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6 w-full max-w-xl mx-auto"
                >
                  <div className="space-y-5">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="name" 
                        className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wider block"
                      >
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 outline-none transition-all text-sm sm:text-base text-slate-900 placeholder:text-slate-400"
                        placeholder="Type your full name"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="email" 
                        className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wider block"
                      >
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 outline-none transition-all text-sm sm:text-base text-slate-900 placeholder:text-slate-400"
                        placeholder="yourname@example.com"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="message" 
                        className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wider block"
                      >
                        Message
                      </label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 outline-none transition-all resize-none text-sm sm:text-base text-slate-900 placeholder:text-slate-400"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit" 
                    disabled={status === 'sending'}
                    className="w-full bg-slate-900 hover:bg-brand-600 text-white font-semibold py-4 sm:py-5 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-brand-500/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-slate-900 group text-base sm:text-lg mt-2"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center gap-3 whitespace-nowrap">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-3 whitespace-nowrap">
                        Send Message 
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;