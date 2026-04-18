import React from 'react';
import { ArrowUpRight, Monitor, Cpu, Globe } from 'lucide-react';
import { RESEARCH, ContentItem } from '../constants';

interface ProjectsProps {
  onSelect: (item: ContentItem) => void;
}

export default function Projects({ onSelect }: ProjectsProps) {
  const getVisualIcon = (id: string) => {
    if (id === 'r1') return <Monitor size={48} className="text-[var(--color-heading)]" />;
    if (id === 'r2') return <Globe size={48} className="text-[var(--color-link)]" />;
    return <Cpu size={48} className="text-[var(--color-accent)]" />;
  };

  return (
    <section id="projects" className="space-y-8 border-t border-[var(--border-color)] pt-8 relative">
      <div className="absolute top-0 right-0 p-4 border-b border-l border-[var(--border-color)] text-[var(--color-heading)] font-bold tracking-widest bg-[var(--bg-color)]">
         MODULE_01
      </div>
      <div className="flex items-center gap-4">
        <h2 className="text-[var(--color-heading)] font-bold uppercase tracking-[0.2em] bg-[var(--color-heading)]/10 px-4 py-2 border border-[var(--color-heading)]/20">Active_Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {RESEARCH.map((item) => (
          <div 
            key={item.id}
            onClick={() => onSelect(item)}
            className="group flex flex-col gap-4 cursor-pointer"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-[var(--color-link)] font-bold uppercase tracking-widest leading-tight group-hover:text-[var(--color-highlight)] transition-colors line-clamp-2 min-h-[2.5rem]">
                {item.name}
              </h3>
            </div>
            
            <div className="flex items-stretch gap-6">
              {/* Text on Left */}
              <div className="w-[55%] flex flex-col justify-between">
                <p className="text-[var(--text-primary)] leading-snug line-clamp-6 mb-2">{item.description}</p>
                <div className="flex items-center gap-2 text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity font-bold mt-auto">
                   <span>VIEW_TRACE</span>
                   <ArrowUpRight size={14} />
                </div>
              </div>
              {/* Semantic Placeholder Image on Right */}
              <div className="w-[45%] rounded-md terminal-border flex items-center justify-center group-hover:border-[var(--color-link)] transition-colors relative overflow-hidden aspect-[4/3] bg-black/40">
                 <div className="absolute inset-0 bg-[var(--color-link)] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                 <div className="group-hover:scale-110 transition-transform duration-500">
                   {getVisualIcon(item.id)}
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
