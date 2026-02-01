"use client";

import React, { useEffect, useState } from "react";
import { 
  ArrowRight, Github, Linkedin, Mail, 
  Laptop, Terminal, Database 
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Import your custom components
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge"; // Ensure this path is correct

// --- Types for Typing Animation ---
type Segment = { text: string; className?: string };
type Line = { segments: Segment[] };

interface TypingAnimationProps {
  lines: Line[];
  typingSpeed?: number;
  startDelay?: number;
  cursorBlinkAfter?: number;
  className?: string;
}

// --- Helper Component: TypingAnimation ---
const TypingAnimation: React.FC<TypingAnimationProps> = ({
  lines,
  typingSpeed = 50,
  startDelay = 800,
  cursorBlinkAfter = 2000,
  className,
}) => {
  const [typed, setTyped] = useState<string[][]>(
    lines.map(line => line.segments.map(() => ""))
  );
  const [showCursor, setShowCursor] = useState(true);
  const [active, setActive] = useState({ line: 0, segment: 0, char: 0 });

  useEffect(() => {
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setActive(prev => {
          const { line, segment, char } = prev;
          const currentSegment = lines[line]?.segments[segment];
          if (!currentSegment) return prev;

          const nextCharIndex = char + 1;
          const doneWithSegment = nextCharIndex > currentSegment.text.length;

          setTyped(prevTyped => {
            const copy = prevTyped.map(arr => [...arr]);
            copy[line][segment] = currentSegment.text.slice(0, Math.min(nextCharIndex, currentSegment.text.length));
            return copy;
          });

          if (!doneWithSegment) return { line, segment, char: nextCharIndex };

          const hasNextSegment = segment + 1 < lines[line].segments.length;
          if (hasNextSegment) return { line, segment: segment + 1, char: 0 };

          const hasNextLine = line + 1 < lines.length;
          if (hasNextLine) return { line: line + 1, segment: 0, char: 0 };

          clearInterval(interval);
          setTimeout(() => setShowCursor(false), cursorBlinkAfter);
          return prev;
        });
      }, typingSpeed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(startTimer);
  }, [lines, typingSpeed, startDelay, cursorBlinkAfter]);

  return (
    <h1 className={cn("text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight", className)}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block min-h-[1.2em]">
          {line.segments.map((seg, segIndex) => {
            const isDevSegment = seg.text === "Dev";
            const currentText = typed[lineIndex][segIndex];
            
            return (
              <span key={segIndex} className={cn(seg.className, isDevSegment && "relative whitespace-nowrap")}>
                {currentText}
                {isDevSegment && (
                  <svg 
                    className={cn(
                      "absolute -bottom-2 left-0 w-full h-3 text-brand-300 -z-10 transition-opacity duration-700",
                      currentText.length >= 3 ? "opacity-100" : "opacity-0"
                    )} 
                    viewBox="0 0 100 10" 
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                )}
              </span>
            );
          })}
          {showCursor && active.line === lineIndex && active.segment === line.segments.length - 1 && (
            <span className="inline-block w-1 h-[0.9em] bg-brand-600 align-baseline ml-1 animate-pulse relative top-1" />
          )}
        </span>
      ))}
    </h1>
  );
};

// --- Main Hero Component ---
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="space-y-6 order-2 md:order-1 animate-slide-up-fade">
            
            {/* Availability Badge - Now using your Badge Component */}
            <Badge variant="success">
              Open to work & collaboration
            </Badge>

            {/* Heading */}
            <TypingAnimation
              lines={[
                { segments: [{ text: "Hi, I'm " }, { text: "Mercy", className: "text-brand-600" }] },
                { segments: [{ text: "Full Stack " }, { text: "Dev", className: "relative" }] },
              ]}
            />

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
              I craft scalable web applications using <strong className="text-slate-800">Python & React</strong>. 
              Blending logic with design to build digital experiences that feel magical. ✨
            </p>

            {/* CTA Buttons - Using your Button Component with asChild */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button asChild variant="primary">
                <Link href="#projects">
                  View My Work
                  <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="secondary">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-8 text-slate-400">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub", hover: "hover:text-slate-900" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mercy-m-183056362/", label: "LinkedIn", hover: "hover:text-blue-700" },
                { icon: Mail, href: "mailto:munzenzimercy9@gmail.com", label: "Email", hover: "hover:text-brand-500" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noreferrer" className={`${social.hover} transition-colors`} aria-label={social.label}>
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: VISUAL --- */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-md aspect-square animate-float">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-200 to-indigo-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              
              {/* Terminal Card */}
              <div className="relative z-10 bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-2xl transform md:rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="bg-slate-900 rounded-lg overflow-hidden shadow-inner font-mono text-sm">
                  <div className="bg-slate-800 px-4 py-2 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="p-4 text-slate-300">
                    <div className="flex gap-2"><span className="text-brand-400">➜</span><span className="text-cyan-400">~</span> whoami</div>
                    <div className="text-emerald-400 mt-1">&apos;Full Stack Engineer&apos;</div>
                    <div className="flex gap-2 mt-4"><span className="text-brand-400">➜</span><span className="text-cyan-400">~</span> cat skills.json</div>
                    <div className="mt-1 text-yellow-300">
                      [&quot;Python&quot;, &quot;React&quot;, &quot;Django&quot;, &quot;TS&quot;]
                    </div>
                    <div className="mt-2 animate-pulse">_</div>
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-6 -right-6 p-4 bg-white rounded-xl shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  <Database className="text-blue-500" size={24} />
                </div>
                <div className="absolute -bottom-6 -left-6 p-4 bg-white rounded-xl shadow-lg animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
                  <Terminal className="text-brand-500" size={24} />
                </div>
                <div className="absolute top-1/2 -right-12 p-3 bg-white rounded-xl shadow-lg animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                  <Laptop className="text-purple-500" size={20} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}