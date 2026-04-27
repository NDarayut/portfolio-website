import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Database } from 'lucide-react';
import { PUBLICATIONS, ContentItem } from '../constants';

interface PublicationsProps {
  onSelect: (item: ContentItem) => void;
}

export default function Publications({ onSelect }: PublicationsProps) {
  return (
    <motion.section 
      id="pubs" 
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
            
            <span className="text-[var(--color-text)]">publications</span>

            <span className="text-[var(--color-heading)] cursor-blink">▌</span>
          </div>
      {/* <div className="flex items-center gap-4">
        <h2 className="text-[var(--color-title)] text-lg tracking-[0.2em] bg-[var(--color-title-bg)] px-2 py-1">Publications</h2>
      </div> */}

      <div className="mt-12 space-y-2">
        {PUBLICATIONS.map((item) => (
          <div 
            key={item.id} 
            onClick={() => {
              if (item.link) {
                window.open(item.link, '_blank', 'noopener,noreferrer');
              } else {
                onSelect(item);
              }
            }}
            className="group flex flex-col xl:flex-row gap-8 cursor-pointer border-b border-[var(--border-color)]/20 pb-12 items-start h-full"
            role="button"
            tabIndex={0}
          >
            {/* Left Side: Title + Metadata */}
            <div className="w-full xl:w-[45%] flex flex-col">
              <h3 className="text-lg text-[var(--color-text)] tracking-[0.1em] mb-4 group-hover:text-[var(--color-link)] transition-none">
                {item.name}
              </h3>
              
              <div className="mb-4">
                 <p className="text-[var(--text-primary)] leading-tight opacity-60 text-sm">{item.journal}</p>
                 <p className="text-[var(--text-dim)] font-bold mt-1 text-xs">[{item.date}]</p>
              </div>

              <p className="text-lg leading-relaxed opacity-80 group-hover:opacity-100 lg:text-sm line-clamp-6">
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
                 <div className="p-8 opacity-20 flex items-center justify-center h-full">
                   <Database size={48} className="text-[#333] group-hover:text-[var(--color-link)] transition-colors" />
                 </div>
               )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
