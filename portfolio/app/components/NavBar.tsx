"use client";

import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface NavLink {
  name: string;
  href: string;
  type: 'scroll' | 'route';
}

interface NavbarProps {
  activeSection: string;
  isHome?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: 'home', type: 'scroll' },
  { name: 'About', href: 'about', type: 'scroll' },
  { name: 'Skills', href: 'skills', type: 'scroll' },
  { name: 'Projects', href: 'projects', type: 'scroll' },
  { name: 'Blog', href: '/blog', type: 'route' },
  { name: 'Contact', href: 'contact', type: 'scroll' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection, isHome = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (link: NavLink) => {
    setIsMenuOpen(false);
    if (link.type === 'scroll' && !isHome) {
      router.push(`/#${link.href}`);
    }
  };

  const getHref = (link: NavLink) => {
    if (link.type === 'route') return link.href;
    return isHome ? `#${link.href}` : `/#${link.href}`;
  };

  // Reusable Link Component logic
  const NavLinkItem = ({ link, className = "" }: { link: NavLink; className?: string }) => {
    const isActive = link.type === 'route' 
      ? pathname.startsWith(link.href) 
      : activeSection === link.href;

    return (
      <Link 
        href={getHref(link)} 
        onClick={() => handleNavClick(link)}
        className={`transition-all duration-200 relative ${className} ${
          isActive ? 'text-brand-600 font-semibold' : 'text-slate-600 hover:text-brand-600'
        }`}
      >
        {link.name}
        {isActive && !className.includes('p-3') && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 rounded-full animate-in fade-in duration-300" />
        )}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        
        {/* Text Branding */}
        <Link href="/" className="font-bold text-xl tracking-tight text-slate-800 hover:opacity-80 transition-opacity">
          Mercy<span className="text-brand-500">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.slice(0, -1).map((link) => (
            <NavLinkItem key={link.name} link={link} className="text-sm font-medium py-1" />
          ))}
          
          {/* Contact Button */}
          <Link
            href={getHref(NAV_LINKS[NAV_LINKS.length - 1])}
            onClick={() => handleNavClick(NAV_LINKS[NAV_LINKS.length - 1])}
            className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-brand-600 transition-all shadow-lg shadow-slate-900/10 flex items-center gap-2"
          >
            <Sparkles size={14} />
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-brand-500 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`
        absolute top-16 left-0 w-full bg-white border-b border-slate-100 p-4 flex flex-col gap-2 transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}
        md:hidden
      `}>
        {NAV_LINKS.map((link) => (
          <NavLinkItem 
            key={link.name} 
            link={link} 
            className={`p-3 rounded-lg text-base ${activeSection === link.href ? 'bg-brand-50' : 'hover:bg-slate-50'}`} 
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;