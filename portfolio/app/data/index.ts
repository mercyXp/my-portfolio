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
    id: "tichicleaning",
    title: "Tichi Cleaning Services",
    description: "A booking system providing professional cleaning services for homes & businesses.",
    problemStatement: "Most households and businesses in Zambia rely on informal and inefficient ways to find and book cleaning services, making it difficult to access reliable cleaners, schedule appointments, and manage service requests.",
    solution: "A user-friendly online booking platform that allows customers to easily browse cleaning services, select their preferred date and time, submit booking requests, and receive confirmation, while helping Tichi Cleaning Services efficiently manage appointments and customer requests",
    duration: "3 Weeks",
    publishedDate: "August 8, 2026",
    projectType: "Web App",
    features: [
      "Online booking for residential and commercial cleaning services",
      "Service selection with preferred date and time scheduling",
      "Customer booking and request management",
      "Admin dashboard for managing bookings and customers"
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    link: "https://tichicleaning.com",
    image: "/tichicleaning.png",
    github: "https://github.com/TICHI-SERVICES"
  },
  {
    id: "bluestick-cooperative",
    title: "Blue-Stick Cooperative",
    description: "A digital cooperative management platform that helps members access financial services, manage their accounts, and complete onboarding online.",
    problemStatement: "Traditional cooperative processes can be time-consuming and heavily dependent on paperwork, making it difficult for members to register, submit documents, access financial information, and manage their cooperative activities efficiently.",
    solution: "Blue-Stick Cooperative provides a centralized digital platform for member registration, KYC verification, financial management, loan applications, and administrative operations.",
    duration: "3 Months",
    publishedDate: "August 18, 2026",
    projectType: "Web App",
    features: [
      "Online member registration and authentication",
      "KYC document submission and verification",
      "Loan application and management",
      "Member financial dashboard",
      "Digital accounting and transaction records",
      "Administrative management portal"
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    image: "/bluestick.png",
    link: "https://bluestickcooperative.org",
    github: "https://github.com/mercyXp/cooperative"

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