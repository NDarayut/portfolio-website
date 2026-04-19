import React from 'react';
import { motion } from 'motion/react';
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
    <motion.section 
      id="projects" 
      className="space-y-8 pt-8 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >

      <div className="font-mono text-lg">
        <span className="text-sky-400">darayut</span>
        <span className="text-yellow-200">@portfolio</span>
        <span className="text-gray-500">:</span>
        <span className="text-emerald-300">~</span>
        <span className="text-gray-500">$</span>{' '}
        
        <span className="text-[var(--color-text)]">projects</span>

        <span className="text-sky-400 cursor-blink">▌</span>
      </div>

      {/* <div className="flex items-center gap-4">
        <h2 className="text-[var(--color-title)] text-lg tracking-[0.2em] bg-[var(--color-title-bg)] px-2 py-1">Projects</h2>
      </div> */}

      <div className="mt-12 space-y-14">
        {RESEARCH.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              if (item.github) {
                window.open(item.github, '_blank', 'noopener,noreferrer');
              } else {
                onSelect(item);
              }
            }}
            className={`group flex gap-8 cursor-pointer border-b border-[var(--border-color)]/20 pb-12 items-start h-full
              ${item.image ? 'flex-col xl:flex-row' : 'flex-col items-center text-center'}
            `}
          >
            {/* Left Side: Title + Description */}
            <div
              className={`flex flex-col ${
                item.image
                  ? 'w-full xl:w-[45%]'
                  : 'w-full max-w-2xl items-center'
              }`}
>
              <h3 className="text-lg text-[var(--color-text)] tracking-[0.1em] mb-4 group-hover:text-[var(--color-link)] transition-none">
                {item.name}
              </h3>
              
              <p
                className={`leading-relaxed opacity-80 group-hover:opacity-100 lg:text-sm line-clamp-6 ${
                  item.image ? '' : 'text-center'
                }`}
              >
                {item.description}
              </p>
              
              
            </div>

            {/* Right Side: Image */}
            {item.image && (
              <div className="w-full xl:w-[55%] relative aspect-video bg-black/10 rounded-sm overflow-hidden flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain transition-all filter drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]" 
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
