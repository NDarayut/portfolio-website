import React, { useState, useEffect } from 'react';

export default function TerminalWidgets() {
  const [cpu, setCpu] = useState(0);
  const [ram, setRam] = useState(0);
  const [lastPing, setLastPing] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * 15) + 5);
      setRam(Math.floor(Math.random() * 2) + 42);
      setLastPing(Math.floor(Math.random() * 20) + 10);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[var(--bg-color)] border-t border-[var(--border-color)] p-2 z-50 font-mono text-[10px] flex flex-wrap items-center justify-between pointer-events-none sm:pointer-events-auto">
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <span className="text-[var(--text-dim)] uppercase">CPU</span>
          <div className="w-16 h-1.5 bg-[#282828] border border-[var(--border-color)] relative">
            <div 
              className="h-full bg-[var(--color-text)] transition-all duration-1000" 
              style={{ width: `${cpu}%` }} 
            />
          </div>
          <span className="text-[var(--color-text)]">{cpu}%</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[var(--text-dim)] uppercase">RAM</span>
          <div className="w-16 h-1.5 bg-[#282828] border border-[var(--border-color)] relative">
            <div 
              className="h-full bg-[var(--color-heading)] transition-all duration-1000" 
              style={{ width: `${ram}%` }} 
            />
          </div>
          <span className="text-[var(--color-heading)]">{ram}%</span>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <div className="flex items-center gap-2">
          <span className="text-[var(--text-dim)]">PING:</span>
          <span className="text-[var(--color-accent)]">{lastPing}ms</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span className="text-[var(--text-dim)]">UPTIME:</span>
          <span className="text-[var(--text-primary)]">142:22:11</span>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <span className="text-[var(--text-dim)]">LOCATION:</span>
          <span className="text-[var(--color-title)]">PHNOM_PENH/KH</span>
        </div>
      </div>
    </div>
  );
}
