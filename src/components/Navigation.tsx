import React from 'react';
import { Terminal } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

interface NavigationProps {
  onNavigate: (id: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--bg-color)] border-b border-[var(--border-color)] px-4 md:px-8 h-10 flex items-center justify-between font-mono text-xs uppercase">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#fb4934]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#fabd2f]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#b8bb26]" />
        </div>
        <span className="text-[var(--text-dim)] ml-2 hidden sm:inline">ndarayut@terminal:~</span>
      </div>
      <nav className="flex gap-6">
        <button onClick={() => onNavigate('bio')} className="text-[var(--text-dim)] hover:text-[var(--color-link)] transition-colors cursor-pointer">/about</button>
        <button onClick={() => onNavigate('projects')} className="text-[var(--text-dim)] hover:text-[var(--color-link)] transition-colors cursor-pointer">/projects</button>
        <button onClick={() => onNavigate('pubs')} className="text-[var(--text-dim)] hover:text-[var(--color-link)] transition-colors cursor-pointer">/publications</button>
        <button onClick={() => onNavigate('connect')} className="text-[var(--text-dim)] hover:text-[var(--color-link)] transition-colors cursor-pointer">/contact</button>
      </nav>
    </header>
  );
}
