import React from 'react';

export default function Bio() {
  return (
    <section id="bio" className="space-y-12">
      <div className="text-[var(--color-link)] opacity-60 select-none hidden md:block">
        <pre className="leading-tight overflow-x-auto">
{`
   ____  ___    ____  ___  __  ___  ________
  / __ \\/   |  / __ \\/   | \\ \\/ / / / /_  __/
 / / / / /| | / /_/ / /| |  \\  / / / / / /   
/ /_/ / ___ |/ _, _/ ___ |  / / /_/ / / /    
\\____/_/  |_/_/ |_/_/  |_| /_/\\____/ /_/     
                                             
`}
        </pre>
      </div>

      <div className="space-y-8">
        <h1 className="text-[var(--color-accent)] font-bold tracking-widest uppercase">Darayut Nhem, Data Scientist</h1>
        <div className="space-y-6 leading-loose max-w-4xl">
          <p>
            I develop machine learning solutions at <span className="text-[var(--color-highlight)] font-bold">Credit Bureau Cambodia</span>, working on 
            risk modeling and automated decision systems for the financial sector. 
            I operate out of Phnom Penh, combining classical statistical approaches with modern deep learning.
          </p>
          <p>
            A 2026 ITE graduate from <span className="text-[var(--color-heading)] font-bold">Royal University of Phnom Penh</span>. My recent focus has pivoted towards 
            <span className="text-[var(--color-link)] font-bold"> computer vision</span>, specifically robust Khmer OCR pipelines and 
            historical manuscript reconstruction—leveraging neural architectures to perform digital restoration on cultural heritage.
          </p>
        </div>
        <div className="flex gap-6 items-center font-bold text-[var(--text-dim)] pt-4">
           <span className="flex items-center gap-2 text-[var(--color-link)]">
             <span className="w-2 h-2 bg-[var(--color-link)] rounded-full animate-pulse"></span> 
             PHNOM PENH, KH
           </span>
           <span className="text-[var(--border-color)]">|</span>
           <span className="text-[var(--color-heading)]">AVAILABLE_FOR_CONTACT</span>
        </div>
      </div>
    </section>
  );
}
