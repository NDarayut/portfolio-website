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
      className="space-y-8 border-t border-[var(--border-color)] pt-8 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >

      <div className="flex items-center gap-4">
        <h2 className="text-[var(--color-title)] font-bold text-2xl tracking-[0.2em] bg-[var(--color-title-bg)] px-1 py-1">## Projects</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24 mt-12">
        {RESEARCH.map((item) => (
          <div 
            key={item.id}
            onClick={() => onSelect(item)}
            className="group flex flex-col xl:flex-row gap-8 cursor-pointer border-b border-[var(--border-color)]/20 pb-12 items-start h-full"
          >
            {/* Left Side: Title + Description */}
            <div className="w-full xl:w-[45%] flex flex-col">
              <h3 className="text-xl font-bold text-[var(--color-text)] tracking-[0.1em] mb-4 group-hover:text-[var(--color-link)] transition-colors">
                {item.name}
              </h3>
              
              <p className="text-[var(--text-primary)] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity text-xs lg:text-sm line-clamp-6">
                {item.description}
              </p>
              
              
            </div>

            {/* Right Side: Image */}
            <div className="w-full xl:w-[55%] relative aspect-video bg-black/10 rounded-sm overflow-hidden flex items-center justify-center">
               {item.image ? (
                 <img 
                    src={item.image} 
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain transition-all filter drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]" 
                  />
               ) : (
                 <div className="p-8 opacity-20">
                   {getVisualIcon(item.id)}
                 </div>
               )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
