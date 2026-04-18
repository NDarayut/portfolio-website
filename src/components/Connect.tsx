import React from 'react';
import { motion } from 'motion/react';
import { SOCIALS } from '../constants';

export default function Connect() {
  return (
    <motion.section 
      id="connect" 
      className="space-y-8 border-t border-[var(--border-color)] pt-8 pb-16 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >

      <div className="flex items-center gap-4">
        <h2 className="text-[var(--color-title)] font-bold text-2xl tracking-[0.2em] bg-[var(--color-title-bg)] px-1 py-1">## Contacts</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
         <div className="space-y-6 col-span-1 xl:col-span-2">
            <p className="text-[var(--text-primary)] leading-relaxed max-w-2xl">
              My architecture logic favors open-source research and continuous development.
              Reach me through the secure nodes listed below. Direct SMTP is open for critical transmissions.
            </p>
         </div>
         
         <div className="space-y-4">
            <h3 className="text-[var(--color-link)] font-bold uppercase border-b border-[var(--border-color)] pb-2 block">Social Pings</h3>
            <div className="flex flex-col gap-4 items-start">
              {SOCIALS.map(s => (
                <a 
                  key={s.name} 
                  href={s.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bracket-link font-bold uppercase tracking-widest"
                >
                  {s.name}
                </a>
              ))}
            </div>
         </div>
         
         <div className="space-y-4">
             <h3 className="text-[var(--color-link)] font-bold uppercase border-b border-[var(--border-color)] pb-2 block">Direct Comms</h3>
             <a href="mailto:darayutnhem009@gmail.com" className="bracket-link font-bold font-mono tracking-widest block w-fit">
               SEND_DATAGRAM
             </a>
             <div className="pt-2 text-[var(--text-dim)]">
               {"<"}<span className="text-[var(--color-highlight)]">darayutnhem009</span>@gmail.com{">"}
             </div>
         </div>
      </div>
    </motion.section>
  );
}
