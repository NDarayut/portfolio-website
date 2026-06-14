import { useState, useEffect } from 'react';
import type { WinState } from '../App';
import { SOCIALS } from '../constants';

interface NavigationProps {
  onToggle: (id: string) => void;
  wins: Record<string, WinState>;
  winMeta: Record<string, { icon: string; label: string }>;
}

const CONTACT_ICONS: Record<string, string> = {
  'GitHub': '/assets/github.ico',
  'ResearchGate': '/assets/researchgate.ico',
  'LinkedIn': '/assets/linkedin.ico',
  'ArtStation': '/assets/artstation.ico',
};

export default function Navigation({ onToggle, wins, winMeta }: NavigationProps) {
  const [time, setTime] = useState('');
  const [startOpen, setStartOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!startOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setStartOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [startOpen]);

  const openWins = (Object.entries(wins) as [string, WinState][]).filter(([, w]) => w.isOpen);

  return (
    <footer className="win-taskbar h-9 flex items-center px-1 gap-1 shrink-0">
      {/* Click-away overlay for the Start menu */}
      {startOpen && (
        <div className="fixed inset-0 z-9999" onClick={() => setStartOpen(false)} />
      )}

      {/* Start Button + menu */}
      <div className="relative">
        <button
          className={`win-start-button ${startOpen ? 'active' : ''}`}
          onClick={() => setStartOpen(o => !o)}
        >
          <img src="/assets/start_button.ico" alt="" width={16} height={16} style={{ imageRendering: 'pixelated' }} />
          <span>Start</span>
        </button>

        {startOpen && (
          <div className="win-startmenu">
            <div className="win-startmenu-banner">Contact</div>
            <div className="win-startmenu-list">
              {SOCIALS.map(s => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="win-startmenu-item"
                  onClick={() => setStartOpen(false)}
                >
                  <img src={CONTACT_ICONS[s.name]} alt="" width={20} height={20} style={{ imageRendering: 'pixelated' }} />
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="w-0.5 h-7 mx-1" style={{ borderLeft: '1px solid #808080', borderRight: '1px solid #dfdfdf' }} />

      {/* Open window buttons */}
      {openWins.map(([id, w]) => (
        <button
          key={id}
          onClick={() => onToggle(id)}
          className={`win-taskbar-button ${!w.isMinimized ? 'active' : ''}`}
        >
          <img src={winMeta[id].icon} alt="" width={16} height={16} style={{ imageRendering: 'pixelated', flexShrink: 0 }} />
          <span>{winMeta[id].label}</span>
        </button>
      ))}

      {/* Spacer */}
      <div className="flex-1" />

      {/* System Tray */}
      <div className="win-systrap">
        <span>{time}</span>
      </div>
    </footer>
  );
}
