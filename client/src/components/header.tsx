"use client";

import { Link } from "wouter";

function Header(){
    const navItems = [ 
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '#projects' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
        { label: 'Blog', href: '#blog' },
    ];
    return(
        <header>
            <span>Mercy</span>
            <nav>
                {navItems.map((item) => (
                    <Link
                        key = {item.href}
                        href = {item.href}
                        data-testid={`link-nav-${item.label.toLowerCase()}`}
                    >
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>
            <div>
                <Link>
                    <button>Hire Me</button>
                </Link>
            </div>
        </header>
    );
}
export default Header;