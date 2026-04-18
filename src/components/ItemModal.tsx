import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import { ContentItem } from '../constants';

interface ItemModalProps {
  item: ContentItem | null;
  onClose: () => void;
}

export default function ItemModal({ item, onClose }: ItemModalProps) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#000000e6] backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            className="w-full max-w-4xl terminal-border p-8 md:p-12 relative overflow-y-auto max-h-[85vh] shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-[var(--text-dim)] hover:text-[var(--color-accent)] transition-colors"
              title="Close Window"
            >
              <X size={24} />
            </button>
            
            <div className="space-y-12 mt-4">
              <div className="space-y-4 border-b border-[var(--border-color)] pb-6">
                 <div className="flex gap-4 items-center">
                   <span className="text-[var(--color-accent)] font-bold bg-[var(--color-accent)]/10 px-2 py-1 border border-[var(--color-accent)]/20 uppercase">
                     [{item.type}]
                   </span>
                   {item.date && <span className="text-[var(--text-dim)] font-bold">{item.date}</span>}
                 </div>
                 <h2 className="text-[var(--color-heading)] font-bold uppercase tracking-widest leading-tight">
                   {item.name}
                 </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="space-y-8">
                    {item.journal && (
                      <div className="space-y-2">
                        <h3 className="text-[var(--color-link)] font-bold uppercase tracking-widest border-b border-[var(--border-color)] pb-2 inline-block">Venue / Location</h3>
                        <p className="text-[var(--text-primary)] leading-relaxed pt-2">{item.journal}</p>
                      </div>
                    )}
                    
                    <div className="space-y-2">
                       <h3 className="text-[var(--color-link)] font-bold uppercase tracking-widest border-b border-[var(--border-color)] pb-2 inline-block">Technology Stack</h3>
                       <div className="flex flex-wrap gap-2 pt-2">
                          {item.tech.map(t => (
                            <span key={t} className="text-[var(--text-primary)] border border-[var(--border-color)] bg-[var(--bg-color)] px-2 py-1">#{t}</span>
                          ))}
                       </div>
                    </div>

                    {item.link && (
                      <div className="pt-8">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="bracket-link font-bold uppercase tracking-widest">
                          EXECUTE_ORIGIN_LINK
                        </a>
                      </div>
                    )}
                 </div>

                 <div className="space-y-2 border-t md:border-t-0 md:border-l border-[var(--border-color)] pt-8 md:pt-0 md:pl-12">
                    <h3 className="text-[var(--color-link)] font-bold uppercase tracking-widest border-b border-[var(--border-color)] pb-2 inline-block">Data Readout</h3>
                    <p className="text-[var(--text-primary)] leading-loose pt-2">
                      {item.details || item.description}
                    </p>
                 </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
