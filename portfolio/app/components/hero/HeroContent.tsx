
'use client';

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import TypingAnimation  from "@/app/components/ui/TypingAnimation";
import { Button } from "@/app/components/ui/Button";

export default function HeroContent() {
  return (
    <div className="space-y-6 order-2 md:order-1 reveal">
      {/* Availability Badge */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100/50 border border-brand-200 text-brand-700 text-sm font-medium animate-slide-up-fade"
        style={{ animationDelay: "0.1s" }}
      >
        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
        Open to work & collaboration
      </div>

      {/* Heading with Typing Animation */}
      <h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight animate-slide-up-fade"
        style={{ animationDelay: "0.2s" }}
      >
        <TypingAnimation
          typingSpeed={50}
          startDelay={800}
          lines={[
            {
              segments: [
                { text: "Hi, I'm " },
                { text: "Mercy", className: "text-brand-600" },
              ],
            },
            {
              segments: [
                { text: "Full Stack " },
                { text: "Dev", className: "relative whitespace-nowrap" },
              ],
            },
          ]}
        />
      </h1>

      {/* Subtitle */}
      <p
        className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed animate-slide-up-fade"
        style={{ animationDelay: "0.3s" }}
      >
        I craft scalable web applications using{" "}
        <strong className="text-slate-800">Python & React</strong>. Blending logic
        with design to build digital experiences that feel magical. ✨
      </p>

      {/* CTA Buttons */}
      <div
        className="flex flex-wrap items-center gap-4 pt-4 animate-slide-up-fade"
        style={{ animationDelay: "0.4s" }}
      >
        <Button asChild>
          <a href="#projects" className="group">
            View My Work
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </Button>

        <Button variant="secondary" asChild>
          <a href="#contact">Contact Me</a>
        </Button>
      </div>

      {/* Social Links */}
      <div
        className="flex items-center gap-6 pt-8 text-slate-400 animate-slide-up-fade"
        style={{ animationDelay: "0.5s" }}
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-slate-900 transition-colors"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/mercy-m-183056362/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-700 transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:munzenzimercy9@gmail.com"
          className="hover:text-brand-500 transition-colors"
        >
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

