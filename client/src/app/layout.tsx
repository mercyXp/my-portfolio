'use client';

import type { Metadata } from 'next'
import '@styles/globals.css';
import Header from '@/components/header'  
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Mercy Munzenzi - Portfolio',
  description: 'Showcasing my work and projects',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}