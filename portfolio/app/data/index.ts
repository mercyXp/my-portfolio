import React from 'react';

// ========================================
// TYPE DEFINITIONS
// ========================================

export interface Project {
  id: string;
  title: string;
  description: string;
  problemStatement: string;
  solution: string;
  duration: string;
  publishedDate: string; // NEW
  projectType: 'Web App' | 'Mobile App' | 'System Tool' | 'API' | 'Desktop App'; // NEW
  features: string[];
  tags: string[];
  link: string;
  image: string;
  github: string;
  screenshots?: string[]; // NEW - Optional additional screenshots
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  content: React.ReactNode;
}

// ========================================
// PROJECTS DATA
// ========================================

export const projects: Project[] = [
  {
    id: "tooleryhub",
    title: "TooleryHub",
    description: "A global digital tools platform offering productivity, media, and business tools. Featuring AI-integrated tools for productivity.",
    problemStatement: "Most people constantly switch between multiple tabs and tools for simple tasks like JSON formatting, regex testing, and base64 encoding. This context switching breaks flow and decreases productivity.",
    solution: "TooleryHub centralizes essential developer utilities into a single, intuitive dashboard. Integrated with Gemini AI, it goes beyond simple tools by offering intelligent code explanation, error debugging, and snippet optimization.",
    duration: "3 Weeks",
    publishedDate: "January 15, 2025",
    projectType: "Web App",
    features: [
      "AI-powered code analysis and optimization",
      "Real-time JSON/XML formatter and validator",
      "Regex tester with explanation",
      "Secure and local-first data processing"
    ],
    tags: ["React", "AI Integration", "Tailwind", "Vite"],
    link: "https://aistudio.google.com/apps/drive/18ukuz3OuvXSZnMQzWLNtUZi1v_5FmlI9?fullscreenApplet=true",
    image: "https://picsum.photos/id/1/600/400",
    github: "#"
  },
  {
    id: "smart-tour-zambia",
    title: "SmartTourZambia",
    description: "An interactive tourism web application promoting Zambia's rich heritage. Includes interactive maps, booking features, and local guides.",
    problemStatement: "Tourism information for Zambia is often fragmented across various outdated websites, making it difficult for international travelers to plan trips or discover hidden local gems.",
    solution: "SmartTourZambia provides a unified, interactive platform for discovering Zambia. It features dynamic maps, curated local guides, and a direct booking system that connects tourists with local service providers.",
    duration: "2 Months",
    publishedDate: "December 10, 2024",
    projectType: "Web App",
    features: [
      "Interactive map with points of interest",
      "Local guide booking system",
      "Itinerary planner",
      "Community reviews and ratings"
    ],
    tags: ["Django", "PostgreSQL", "React", "Maps API"],
    image: "https://picsum.photos/id/28/600/400",
    link: "#",
    github: "#"
  },
  {
    id: "codex",
    title: "CodeX",
    description: "A collaborative coding environment and snippet manager for developers. Share, review, and execute code in real-time.",
    problemStatement: "Remote technical interviews and pair programming sessions often suffer from latency and lack of environment consistency when sharing code.",
    solution: "CodeX is a real-time collaborative code editor that supports multiple languages. It allows developers to write, execute, and debug code simultaneously in a shared environment with persistent session history.",
    duration: "4 Weeks",
    publishedDate: "November 20, 2024",
    projectType: "Web App",
    features: [
      "Real-time operational transformation (OT) collaboration",
      "Integrated code execution engine",
      "Syntax highlighting for 20+ languages",
      "Code snippet sharing via unique URLs"
    ],
    tags: ["Next.js", "Supabase", "TypeScript", "Monaco Editor"],
    image: "https://picsum.photos/id/60/600/400",
    github: "https://github.com",
    link: "#"
  },
  {
    id: "mayatutor",
    title: "MayaTutor",
    description: "An educational platform connecting students with expert tutors. Features scheduling, video conferencing, and resource sharing.",
    problemStatement: "Students struggle to find qualified tutors for niche subjects, while tutors lack a professional platform to manage bookings and payments.",
    solution: "MayaTutor bridges the gap by offering a marketplace for education. It handles discovery, scheduling, payments, and video delivery in one seamless application.",
    duration: "6 Weeks",
    publishedDate: "October 5, 2024",
    projectType: "Web App",
    features: [
      "Advanced tutor search filters",
      "Integrated video conferencing",
      "Calendar and scheduling management",
      "Secure payment processing"
    ],
    tags: ["FastAPI", "React", "WebRTC", "SQL"],
    image: "https://picsum.photos/id/20/600/400",
    link: "#",
    github: "#"
  }
];