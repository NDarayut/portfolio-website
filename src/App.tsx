import { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import WindowFrame from './components/WindowFrame';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Publications from './components/Publications';

export interface WinState {
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

const DEFAULT_POS: Record<string, { x: number; y: number }> = {
  bio:      { x: 60,  y: 20  },
  projects: { x: 340, y: 30  },
  pubs:     { x: 380, y: 190 },
};

const DEFAULT_WIDTH: Record<string, number> = {
  bio:      400,
  projects: 500,
  pubs:     500,
};

const WIN_META: Record<string, { title: string; icon: string; label: string }> = {
  bio:      { title: 'About Me',      icon: '/assets/about_me.ico',     label: 'About Me'     },
  projects: { title: 'Projects',      icon: '/assets/projects.ico',     label: 'Projects'     },
  pubs:     { title: 'Publications',  icon: '/assets/publications.ico', label: 'Publications' },
};

const DESKTOP_ICONS = ['bio', 'projects', 'pubs'] as const;

export default function App() {
  const [isBooted, setIsBooted] = useState(false);
  const [wins, setWins] = useState<Record<string, WinState>>({
    bio:      { isOpen: true,  isMinimized: false, isMaximized: false, zIndex: 1 },
    projects: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0 },
    pubs:     { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0 },
  });
  const topZ = useRef(1);
  const desktopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsBooted(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const focusWin = (id: string) => {
    topZ.current += 1;
    setWins(prev => ({ ...prev, [id]: { ...prev[id], zIndex: topZ.current } }));
  };

  const openWin = (id: string) => {
    topZ.current += 1;
    setWins(prev => ({ ...prev, [id]: { ...prev[id], isOpen: true, isMinimized: false, zIndex: topZ.current } }));
  };

  const closeWin = (id: string) => {
    setWins(prev => ({ ...prev, [id]: { ...prev[id], isOpen: false, isMinimized: false, isMaximized: false } }));
  };

  const minimizeWin = (id: string) => {
    setWins(prev => ({ ...prev, [id]: { ...prev[id], isMinimized: true } }));
  };

  const toggleMaximize = (id: string) => {
    topZ.current += 1;
    setWins(prev => ({ ...prev, [id]: { ...prev[id], isMaximized: !prev[id].isMaximized, zIndex: topZ.current } }));
  };

  const toggleWin = (id: string) => {
    const w = wins[id];
    if (!w.isOpen) {
      openWin(id);
    } else if (w.isMinimized) {
      topZ.current += 1;
      setWins(prev => ({ ...prev, [id]: { ...prev[id], isMinimized: false, zIndex: topZ.current } }));
    } else {
      minimizeWin(id);
    }
  };

  if (!isBooted) {
    return (
      <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center gap-3">
        <div style={{ fontFamily: "var(--win-ui-font)", fontWeight: 'bold', fontSize: 24, color: '#C0C0C0' }}>
          Windows
        </div>
        <div style={{ fontFamily: "var(--win-ui-font)", fontSize: 12, color: '#C0C0C0', marginTop: 8 }}>
          Starting Windows...
        </div>
        <div className="w-[200px] h-[18px] mt-4" style={{ border: '2px solid #808080' }}>
          <div className="h-full flex gap-[2px] p-[2px]">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex-1 bg-[#000080]" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // The focused window is the open, non-minimized one with the highest z-index.
  const activeId = (Object.keys(wins) as string[])
    .filter(id => wins[id].isOpen && !wins[id].isMinimized)
    .sort((a, b) => wins[b].zIndex - wins[a].zIndex)[0];

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      {/* Desktop area */}
      <div ref={desktopRef} className="relative flex-1 bg-[#008080] overflow-hidden">
        {/* Desktop icons — sit at the base layer so windows drag over them */}
        <div className="absolute top-2 left-2 flex flex-col gap-2 z-0">
          {DESKTOP_ICONS.map(id => (
            <button
              key={id}
              onClick={() => openWin(id)}
              className="flex flex-col items-center gap-1.5 p-2 w-20 text-white border-0 bg-transparent cursor-pointer hover:bg-white/20 rounded"
              style={{ fontSize: 11, textAlign: 'center' }}
            >
              <img src={WIN_META[id].icon} alt="" width={32} height={32} style={{ filter: 'drop-shadow(1px 1px 2px #000)', imageRendering: 'pixelated' }} />
              <span style={{ textShadow: '1px 1px 2px #000', lineHeight: 1.3 }}>{WIN_META[id].label}</span>
            </button>
          ))}
        </div>

        {/* Windows */}
        {(Object.keys(wins) as string[]).map(id =>
          wins[id].isOpen ? (
            <WindowFrame
              key={id}
              title={WIN_META[id].title}
              icon={WIN_META[id].icon}
              isMinimized={wins[id].isMinimized}
              isMaximized={wins[id].isMaximized}
              isActive={id === activeId}
              zIndex={wins[id].zIndex}
              defaultPos={DEFAULT_POS[id]}
              defaultWidth={DEFAULT_WIDTH[id]}
              desktopRef={desktopRef}
              onClose={() => closeWin(id)}
              onMinimize={() => minimizeWin(id)}
              onMaximize={() => toggleMaximize(id)}
              onFocus={() => focusWin(id)}
            >
              {id === 'bio'      && <Bio />}
              {id === 'projects' && <Projects />}
              {id === 'pubs'     && <Publications />}
            </WindowFrame>
          ) : null
        )}
      </div>

      {/* Taskbar */}
      <Navigation onToggle={toggleWin} wins={wins} winMeta={WIN_META} />
    </div>
  );
}
