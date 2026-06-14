import { PUBLICATIONS } from '../constants';

export default function Publications() {
  return (
    <>
      <div className="win-content p-0" style={{ overflowY: 'auto' }}>
        {PUBLICATIONS.map((item) => (
          <div
            key={item.id}
            onClick={() => item.link && window.open(item.link, '_blank', 'noopener,noreferrer')}
            className="win-listitem"
            role="button"
            tabIndex={0}
          >
            <div className="flex items-start gap-2">
              <span style={{ fontSize: 22, flexShrink: 0, marginTop: 1 }}>📄</span>
              <div className="flex flex-col min-w-0 gap-1">
                <span style={{ fontWeight: 'bold', lineHeight: 1.4 }}>{item.name}</span>
                <span style={{ fontSize: 15, fontStyle: 'italic', opacity: 0.7, lineHeight: 1.4 }}>
                  {item.journal} · {item.date}
                </span>
                <p style={{ fontSize: 16, lineHeight: 1.4, opacity: 0.8 }} className="line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="win-statusbar">
        <div className="win-statusbar-cell flex-1">{PUBLICATIONS.length} object(s)</div>
        <div className="win-statusbar-cell w-20">Ready</div>
      </div>
    </>
  );
}
