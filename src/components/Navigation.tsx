import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

interface NavigationProps {
  onNavigate: (id: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNav = (id: string) => {
    if (isHome) {
      onNavigate(id);
    } else {
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--bg-color)] border-b border-[var(--border-color)] px-4 md:px-8 h-10 flex items-center justify-between font-mono text-xs uppercase">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#fb4934]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#fabd2f]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#b8bb26]" />
          </div>
          <span className="text-[var(--text-dim)] ml-2 hidden sm:inline">ndarayut@terminal:~{location.pathname}</span>
        </Link>
      </div>
      <nav className="flex gap-6">
        <button onClick={() => handleNav('bio')} className="text-[var(--text-dim)] hover:text-[var(--color-link)] transition-colors cursor-pointer">/about</button>
        <button onClick={() => handleNav('projects')} className="text-[var(--text-dim)] hover:text-[var(--color-link)] transition-colors cursor-pointer">/projects</button>
        <button onClick={() => handleNav('pubs')} className="text-[var(--text-dim)] hover:text-[var(--color-link)] transition-colors cursor-pointer">/publications</button>
        <Link to="/posts" className={`${location.pathname.startsWith('/posts') ? 'text-[var(--color-link)]' : 'text-[var(--text-dim)]'} hover:text-[var(--color-link)] transition-colors`}>/posts</Link>
        <button onClick={() => handleNav('connect')} className="text-[var(--text-dim)] hover:text-[var(--color-link)] transition-colors cursor-pointer">/contact</button>
      </nav>
    </header>
  );
}
