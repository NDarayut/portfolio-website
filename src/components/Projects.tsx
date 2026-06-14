import { RESEARCH } from '../constants';

export default function Projects() {
  return (
    <>
      <div className="win-content p-0" style={{ overflowY: 'auto' }}>
        {RESEARCH.map((item) => (
          <div
            key={item.id}
            onClick={() => item.github && window.open(item.github, '_blank', 'noopener,noreferrer')}
            className="win-listitem"
          >
            <div className="flex items-center gap-2">
              <span style={{ fontSize: 22, flexShrink: 0 }}>📁</span>
              <span style={{ fontWeight: 'bold' }}>{item.name}</span>
            </div>
            <p className="mt-1.5 ml-8 opacity-80" style={{ fontSize: 16, lineHeight: 1.4 }}>
              {item.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2 ml-8">
              {item.tech.map(t => (
                <span key={t} className="win-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="win-statusbar">
        <div className="win-statusbar-cell flex-1">{RESEARCH.length} object(s)</div>
        <div className="win-statusbar-cell w-20">Ready</div>
      </div>
    </>
  );
}
