import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-slate-100 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center gap-2 text-slate-600 text-sm">
          Designed & Coded by <span className="font-bold text-slate-800">Mercy</span> 
          <span className="text-brand-300">|</span> 
          <span>© {year} All rights reserved</span>
        </p>
        <p className="mt-2 text-xs text-slate-400 flex items-center justify-center gap-1">
          Powered by React, Tailwind & <Heart size={12} className="text-red-400 fill-current" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;