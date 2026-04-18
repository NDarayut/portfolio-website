import React from 'react';
import { Terminal } from 'lucide-react';

interface NavigationProps {
  onNavigate: (id: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--bg-color)]/95 border-b border-[var(--border-color)] px-4 md:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Terminal size={16} className="text-[var(--color-heading)]" />
        <span className="font-bold text-[var(--color-heading)] tracking-widest">NHEM DARAYUT</span>
      </div>
      <nav className="flex gap-4 md:gap-8">
        <button onClick={() => onNavigate('bio')} className="bracket-link font-bold uppercase tracking-widest hidden sm:inline">BIO</button>
        <button onClick={() => onNavigate('projects')} className="bracket-link font-bold uppercase tracking-widest">PROJECTS</button>
        <button onClick={() => onNavigate('pubs')} className="bracket-link font-bold uppercase tracking-widest hidden sm:inline">PUBS</button>
        <button onClick={() => onNavigate('connect')} className="bracket-link font-bold uppercase tracking-widest">CONNECT</button>
      </nav>
    </header>
  );
}
