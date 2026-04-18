import React from 'react';
import { Terminal } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

interface NavigationProps {
  onNavigate: (id: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--bg-color)]/95 border-b border-[var(--border-color)] px-4 md:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Terminal size={16} className="text-[var(--color-text)]" />
        <span className="font-bold text-[var(--color-text)] tracking-widest">NHEM DARAYUT</span>
      </div>
      <nav className="flex gap-4 md:gap-8">
        <button onClick={() => onNavigate('bio')} className="bracket-link font-bold tracking-widest hidden sm:inline">About</button>
        <button onClick={() => onNavigate('projects')} className="bracket-link font-bold tracking-widest">Projects</button>
        <button onClick={() => onNavigate('pubs')} className="bracket-link font-bold tracking-widest hidden sm:inline">Publications</button>
        <button onClick={() => onNavigate('connect')} className="bracket-link font-bold tracking-widest">Contact</button>
      </nav>
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-text)] origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}
