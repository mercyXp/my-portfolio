"use client";

import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Home,
  FolderKanban,
  User,
  FileText,
  Code,
  Briefcase,
  GraduationCap,
} from "lucide-react";

function Header(){
    const [location] = useLocation(); // Gets current path like "/", "/about", "/projects"
    const navItems = [ 
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: User },
    { label: "Projects", href: "/projects", icon: FolderKanban },
    { label: "Skills", href: "/skills", icon: Code },
    { label: "Experience", href: "/experience", icon: Briefcase },
    { label: "Education", href: "/education", icon: GraduationCap },
    { label: "Blog", href: "/blog", icon: FileText },
    ];

    return(
        <header  className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-xl shadow-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-6">
                 {/* Logo */}
                <Link href="/" data-testid="link-home">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <span className="text-2xl font-heading font-bold text-header-text tracking-normal">
                            Mercy
                        </span>
                    </div>
                </Link>
                    {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-4 bg-[hsl(var(--background))] rounded-full border border-[hsl(var(--primary))] p-6">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key = {item.href}
                                href = {item.href}
                                data-testid={`link-nav-${item.label.toLowerCase()}`}
                            >
                                <span className={`flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer ${
                                        location === item.href
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-hover-link"
                                    }`}>
                                    <Icon className="h-4 w-4"/> {/* size of the icons */}
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
                    {/* Desktop Button */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/contact">
                        <Button data-testid="button-hire"
                             className="
                                flex items-center gap-3
                                px-6 py-3 font-semibold
                                rounded-(--radius)
                                bg-[hsl(var(--primary))]
                                text-[hsl(var(--primary-foreground))]
                                shadow-md transition-colors
                                hover:bg-[hsl(var(--hover-link))]
                                dark:hover:bg-[hsl(var(--hover-link))]
                            "
                        >
                            <span>Hire Me</span>
                            {/* Arrow circle */}
                            <span
                                className="
                                flex items-center justify-center
                                w-6 h-6
                                rounded-full
                                bg-white text-blue-600
                                dark:bg-blue-600 dark:text-white
                                transition-colors
                                "
                            >
                            ↗
                            </span>
                        </Button>
                    </Link>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2">
                
                <button
                    data-testid="button-mobile-menu"
                    aria-label="Toggle menu"
                    className="rounded-md"
                >
                </button>
                </div>
            </div>
        </header>
    );
}
export default Header;