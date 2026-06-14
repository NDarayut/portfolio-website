import { useRef, ReactNode } from 'react';
import { motion, useDragControls } from 'motion/react';

interface WindowFrameProps {
  title: string;
  icon: string;
  isMinimized: boolean;
  isMaximized: boolean;
  isActive: boolean;
  zIndex: number;
  defaultPos: { x: number; y: number };
  defaultWidth: number;
  desktopRef: React.RefObject<HTMLDivElement | null>;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  children: ReactNode;
}

export default function WindowFrame({
  title,
  icon,
  isMinimized,
  isMaximized,
  isActive,
  zIndex,
  defaultPos,
  defaultWidth,
  desktopRef,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  children,
}: WindowFrameProps) {
  const dragControls = useDragControls();

  const maximizedStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 36,
    width: '100%',
    maxWidth: '100%',
    zIndex: 9999,
  };

  const normalStyle: React.CSSProperties = {
    position: 'absolute',
    zIndex,
    width: defaultWidth,
  };

  return (
    <motion.div
      drag={!isMaximized}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragConstraints={desktopRef}
      dragElastic={0}
      initial={{ x: defaultPos.x, y: defaultPos.y, opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.12 }}
      transformTemplate={(_, generated) => (isMaximized ? 'none' : generated)}
      style={isMaximized ? maximizedStyle : normalStyle}
      className="win-window"
      onMouseDown={onFocus}
      hidden={isMinimized}
    >
      {/* Titlebar — drag handle */}
      <div
        className={`win-titlebar ${isActive ? '' : 'inactive'}`}
        style={{ cursor: isMaximized ? 'default' : 'grab' }}
        onPointerDown={e => {
          onFocus();
          if (!isMaximized) dragControls.start(e);
        }}
        onDoubleClick={onMaximize}
      >
        <div className="flex items-center gap-1.5" style={{ pointerEvents: 'none' }}>
          <img src={icon} alt="" width={16} height={16} style={{ imageRendering: 'pixelated' }} />
          <span>{title}</span>
        </div>
        <div className="flex gap-0.5" style={{ pointerEvents: 'auto' }} onPointerDown={e => e.stopPropagation()}>
          <button className="win-button" onClick={onMinimize} aria-label="Minimize">_</button>
          <button className="win-button" onClick={onMaximize} aria-label={isMaximized ? 'Restore' : 'Maximize'}>
            {isMaximized ? '❐' : '□'}
          </button>
          <button className="win-button" onClick={onClose} aria-label="Close">✕</button>
        </div>
      </div>

      {/* Content slot */}
      {children}
    </motion.div>
  );
}
