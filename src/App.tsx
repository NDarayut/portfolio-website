import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
import Navigation from './components/Navigation';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';
import Connect from './components/Connect';
import TerminalWidgets from './components/TerminalWidgets';

function Home() {
  return (
    <>
      <Bio />
      <Projects />
      <Publications />
      <Connect />
    </>
  );
}

function AppContent() {
  const [isBooted, setIsBooted] = useState(false);
  const location = useLocation();

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
      
      <Routes>
        <Route path="/" element={
          <main className="max-w-2xl mx-auto pt-20">
            <Home />
          </main>
        } />
        <Route path="/posts" element={
          <main className="max-w-2xl mx-auto pt-20">
            <Posts />
          </main>
        } />
        <Route path="/posts/:slug" element={
          <main className="max-w-4xl mx-auto pt-20">
            <PostDetail />
          </main>
        } />
      </Routes>

      <TerminalWidgets />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
