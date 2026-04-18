import React from 'react';
import { motion } from 'motion/react';
import { SOCIALS } from '../constants';

export default function Connect() {
  return (
    <motion.section 
      id="connect" 
      className="space-y-8 pt-8 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >

      <div className="flex items-center gap-4">
        <h2 className="text-[var(--color-title)] text-lg tracking-[0.2em] bg-[var(--color-title-bg)] px-1 py-1">## Contacts</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        
         
         <div className="space-y-4">
            <ul className="list-disc pl-5 flex flex-col gap-4">
              {SOCIALS.map(s => (
                <li key={s.name}>
                  <a 
                    href={s.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold  text-[var(--color-text)] tracking-[0.1em] mb-4 hover:text-[var(--color-link)] hover:underline transition-none"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
         </div>
         
         
      </div>
    </motion.section>
  );
}
