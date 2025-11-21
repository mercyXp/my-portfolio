"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight"
                data-testid="text-hero-heading"
              >
                Hi, I&apos;m Mercy
              </h1>
              <p
                className="text-xl md:text-2xl font-medium text-muted-foreground"
                data-testid="text-hero-subheading"
              >
                I build modern web experiences.
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Full-stack developer passionate about creating beautiful,
              functional, and user-friendly applications. Specialized in React,
              Node.js, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gap-2"
                  data-testid="button-hero-hire"
                >
                  Hire Me
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  data-testid="button-hero-projects"
                >
                  View Projects
                </Button>
              </Link>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                data-testid="link-social-github"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                data-testid="link-social-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                data-testid="link-social-email"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <Image
                src="/assets/images/mercy-dev2.png"
                alt="Mercy - Web Developer Portrait"
                width={400}
                height={400}
                className="relative rounded-2xl w-full h-auto object-cover shadow-xl"
                data-testid="img-hero-portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;