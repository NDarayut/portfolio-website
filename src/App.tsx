import React, { useState, useEffect } from 'react';
import { ContentItem } from './constants';
import Navigation from './components/Navigation';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Connect from './components/Connect';
import ItemModal from './components/ItemModal';

export default function App() {
  const [isBooted, setIsBooted] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsBooted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
      <div className="min-h-screen bg-[var(--bg-color)] flex items-center justify-center font-mono text-[var(--color-link)] uppercase tracking-widest">
        Booting...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-[var(--bg-color)] font-mono text-[var(--text-primary)] px-4 md:px-8 pb-32">
      <Navigation onNavigate={scrollToSection} />

      <main className="max-w-4xl mx-auto mt-32">
        <Bio />
        <Projects onSelect={setSelectedItem} />
        <Publications onSelect={setSelectedItem} />
        <Connect />


      </main>

      <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
