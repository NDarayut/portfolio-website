import React from 'react';
import { motion } from 'motion/react';

export default function Bio() {
  return (
    <motion.section 
      id="bio" 
      className="space-y-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-mono text-lg leading-snug space-y-1">
        <p className='text-[var(--color-text)]'>Notreal Terminal</p>
        <p className='text-[var(--color-text)]'>Copyright (C) NDarayut Terminal [Version 1.0.0]. All rights reserved.</p>
      </div>

      <div className="text-[var(--color-text)] opacity-60 select-none hidden md:block">
        <pre className="leading-tight overflow-x-auto">
      {`
      ██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗██╗██╗
      ██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝██║██║
      ██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  ██║██║
      ██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  ╚═╝╚═╝
      ╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗██╗██╗
      ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝╚═╝
      `}
        </pre>
      </div>

      <div className="space-y-8">

        <div className="space-y-6 leading-loose max-w-4xl text-lg">
          <div className="font-mono text-lg">
            <span className="text-sky-400">darayut</span>
            <span className="text-yellow-200">@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-emerald-300">~</span>
            <span className="text-gray-500">$</span>{' '}
            
            <span className="text-[var(--color-text)]">about</span>

            <span className="text-sky-400 cursor-blink">▌</span>
          </div>

          <p>
            Hey, I’m <span className="bg-mist-700 text-emerald-400 px-2">darayut</span>
          </p>
          <p>
            I’m a <span className="bg-mist-700 text-emerald-400 px-2">data scientist</span> based in Phnom Penh, currently working at a credit bureau where I build machine learning models to help banks and financial institutions make better decisions.
          </p>
          <p>
            I graduated with a Bachelor’s degree in <span className="bg-mist-700 text-emerald-400 px-2">Information Technology Engineering</span> from the Royal University of Phnom Penh in 2026.
          </p>
          <p>
            I’m especially interested in deep learning and enjoy exploring new advancements in the field. I’ve worked on projects ranging from Khmer OCR to historical document reconstruction using deep learning.
          </p>
          <p>
            Outside of coding, I like drawing and getting lost in good films.
          </p>
        </div>
        
      </div>
    </motion.section>
  );
}
