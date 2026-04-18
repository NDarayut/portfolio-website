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
      className="space-y-8 border-t border-[var(--border-color)] pt-8 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 right-0 p-4 border-b border-l border-[var(--border-color)] text-[var(--color-heading)] font-bold tracking-widest bg-[var(--bg-color)]">
         MODULE_02
      </div>
      <div className="flex items-center gap-4">
        <h2 className="text-[var(--color-heading)] font-bold uppercase tracking-[0.2em] bg-[var(--color-heading)]/10 px-4 py-2 border border-[var(--color-heading)]/20">Publications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {PUBLICATIONS.map((item) => (
          <div 
            key={item.id} 
            onClick={() => onSelect(item)}
            className="group flex flex-col gap-4 cursor-pointer"
          >
            <h3 className="text-[var(--color-link)] font-bold uppercase tracking-widest leading-tight group-hover:text-[var(--color-highlight)] transition-colors line-clamp-2 min-h-[2.5rem]">
              {item.name}
            </h3>
            
            <div className="flex items-stretch gap-6">
               <div className="w-[55%] flex flex-col justify-between">
                  <div>
                    <p className="text-[var(--text-primary)] leading-snug">{item.journal}</p>
                    <p className="text-[var(--text-dim)] font-bold mt-2">[{item.date}]</p>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity font-bold mt-auto">
                     <span>READ_DOC</span>
                     <ArrowUpRight size={14} />
                  </div>
               </div>
               <div className="w-[45%] rounded-md terminal-border flex items-center justify-center group-hover:border-[var(--color-link)] transition-colors relative overflow-hidden aspect-[4/3] bg-black/40">
                  <div className="absolute inset-0 bg-[var(--color-link)] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    <Database size={48} className="text-[#333] group-hover:text-[var(--color-link)] transition-colors" />
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
