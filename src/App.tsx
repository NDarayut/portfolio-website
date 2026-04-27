import React, { useState, useEffect } from 'react';
import { ContentItem } from './constants';
import Navigation from './components/Navigation';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Connect from './components/Connect';

export default function App() {
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsBooted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isBooted) {
    return (
      <div className="min-h-screen bg-[var(--bg-color)] flex items-center justify-center font-mono text-[var(--color-link)] uppercase tracking-[0.3em] text-xs">
        [ system_boot_sequence_init ]
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-[var(--bg-color)] font-mono text-[var(--text-primary)] px-4 md:px-8 pb-32">
      <Navigation onNavigate={scrollToSection} />

      <main className="max-w-2xl mx-auto pt-20">
        <Bio />
        <Projects />
        <Publications />
        <Connect />
      </main>
    </div>
  );
}
