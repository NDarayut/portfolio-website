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

      <div className="font-mono text-lg">
            <span className="text-[var(--color-heading)]">darayut</span>
            <span className="text-[var(--color-title)]">@portfolio</span>
            <span className="text-[var(--text-dim)]">:</span>
            <span className="text-[var(--color-text)]">~</span>
            <span className="text-[var(--text-dim)]">$</span>{' '}
            
            <span className="text-[var(--color-text)]">contact</span>

            <span className="text-[var(--color-heading)] cursor-blink">▌</span>
          </div>
      {/* <div className="flex items-center gap-4">
        <h2 className="text-[var(--color-title)] text-lg tracking-[0.2em] bg-[var(--color-title-bg)] px-2 py-1">Contacts</h2>
      </div> */}

      <div className="mt-8">
        <div className="space-y-1 font-mono text-sm">
          {SOCIALS.map(s => (
            <div key={s.name} className="flex gap-4 group">
              <span className="text-[var(--text-dim)] w-16 uppercase text-[10px]">link</span>
              <span className="text-[var(--text-dim)]">{'='}{'>'}</span>
              <a 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--color-text)] hover:text-[var(--color-link)] transition-none"
              >
                {s.name}
              </a>
            </div>
          ))}
          <div className="flex gap-4 mt-4 text-[var(--text-dim)] text-[10px]">
            <span>EOF</span>
            <span>---</span>
            <span>0.0.0.0:3000</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
