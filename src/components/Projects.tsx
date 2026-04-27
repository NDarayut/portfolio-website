import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Monitor, Cpu, Globe } from 'lucide-react';
import { RESEARCH, ContentItem } from '../constants';

interface ProjectsProps {}

export default function Projects({}: ProjectsProps) {
  const getVisualIcon = (id: string) => {
    if (id === 'r1') return <Monitor size={48} className="text-[var(--color-heading)]" />;
    if (id === 'r2') return <Globe size={48} className="text-[var(--color-link)]" />;
    return <Cpu size={48} className="text-[var(--color-accent)]" />;
  };

  return (
    <motion.section 
      id="projects" 
      className="space-y-8 pt-8 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >

      <div className="font-mono text-lg">
        <span className="text-[var(--color-heading)]">darayut</span>
        <span className="text-[var(--color-title)]">@portfolio</span>
        <span className="text-[var(--text-dim)]">:</span>
        <span className="text-[var(--color-text)]">~</span>
        <span className="text-[var(--text-dim)]">$</span>{' '}
        
        <span className="text-[var(--color-text)]">projects</span>

        <span className="text-[var(--color-heading)] cursor-blink">▌</span>
      </div>

      {/* <div className="flex items-center gap-4">
        <h2 className="text-[var(--color-title)] text-lg tracking-[0.2em] bg-[var(--color-title-bg)] px-2 py-1">Projects</h2>
      </div> */}

      <div className="mt-8 space-y-4">
        {RESEARCH.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              if (item.github) {
                window.open(item.github, '_blank', 'noopener,noreferrer');
              }
            }}
            className="group cursor-pointer border-l-2 border-transparent hover:border-[var(--color-link)] pl-4 py-1 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-[var(--text-dim)] text-[10px] hidden sm:inline">drwx------</span>
              <h3 className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-link)] transition-none flex items-center gap-2">
                <span className="text-[var(--color-heading)] opacity-60">./</span>{item.name.toLowerCase().replace(/\s+/g, '_')}
              </h3>
            </div>
            
            <p className="mt-1 text-xs opacity-70 leading-relaxed font-mono pl-4 sm:pl-[70px]">
              {item.description}
            </p>
            
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-[var(--text-dim)] uppercase tracking-tighter pl-4 sm:pl-[70px]">
              {item.tech.map(t => (
                <span key={t} className="bg-[var(--border-color)] px-1 py-0 px-2 rounded-none">#{t.toLowerCase().replace(/\s+/g, '')}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
