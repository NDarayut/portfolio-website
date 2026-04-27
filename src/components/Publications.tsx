import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Database } from 'lucide-react';
import { PUBLICATIONS, ContentItem } from '../constants';

interface PublicationsProps {}

export default function Publications({}: PublicationsProps) {
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

      <div className="mt-8 space-y-4">
        {PUBLICATIONS.map((item) => (
          <div 
            key={item.id} 
            onClick={() => {
              if (item.link) {
                window.open(item.link, '_blank', 'noopener,noreferrer');
              }
            }}
            className="group cursor-pointer border-l-2 border-transparent hover:border-[var(--color-link)] pl-4 py-1 transition-all"
            role="button"
            tabIndex={0}
          >
            <div className="flex items-center gap-3">
              <span className="text-[var(--text-dim)] text-[10px] hidden sm:inline">-rw-r--r--</span>
              <h3 className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-link)] transition-none flex items-center gap-2">
                <span className="text-[var(--color-accent)] opacity-60">doc_</span>{item.name.toLowerCase().replace(/\s+/g, '_').substring(0, 40)}...
              </h3>
            </div>
              
            <div className="mt-1 pl-4 sm:pl-[70px]">
               <p className="text-[var(--text-primary)] leading-tight opacity-60 text-xs font-mono italic">
                 {item.journal} | {item.date}
               </p>
               <p className="mt-1 text-xs opacity-70 leading-relaxed font-mono line-clamp-2">
                 {item.description}
               </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
