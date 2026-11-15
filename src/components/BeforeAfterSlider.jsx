import { useRef, useState } from 'react';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  label,
}) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const pointerId = useRef(null);

  function updatePosition(clientX) {
    const bounds = sliderRef.current?.getBoundingClientRect();
    if (!bounds || !bounds.width) return;
    setPosition(Math.max(0, Math.min(100, ((clientX - bounds.left) / bounds.width) * 100)));
  }

  function handlePointerDown(event) {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
    pointerId.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updatePosition(event.clientX);
  }

  function handlePointerMove(event) {
    if (pointerId.current === event.pointerId) updatePosition(event.clientX);
  }

  function handlePointerEnd(event) {
    if (pointerId.current !== event.pointerId) return;
    pointerId.current = null;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleKeyDown(event) {
    const step = event.shiftKey ? 10 : 5;
    let nextPosition;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        nextPosition = position - step;
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        nextPosition = position + step;
        break;
      case 'PageDown':
        nextPosition = position - 10;
        break;
      case 'PageUp':
        nextPosition = position + 10;
        break;
      case 'Home':
        nextPosition = 0;
        break;
      case 'End':
        nextPosition = 100;
        break;
      default:
        return;
    }

    event.preventDefault();
    setPosition(Math.max(0, Math.min(100, nextPosition)));
  }

  return (
    <div
      ref={sliderRef}
      className={`before-after-slider${isDragging ? ' is-dragging' : ''}`}
      style={{ '--split-position': `${position}%` }}
      role="slider"
      tabIndex={0}
      aria-label={label ? `${label} before and after comparison` : 'Before and after image comparison'}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      aria-valuetext={`${Math.round(position)}% of the before image visible`}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
    >
      <img className="before-after-image" src={afterImage} alt={afterAlt} loading="lazy" draggable="false" />
      <div
        className="before-after-overlay"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img className="before-after-image" src={beforeImage} alt={beforeAlt} loading="lazy" draggable="false" />
      </div>
      <div className="before-after-divider" aria-hidden="true">
        <span className="before-after-handle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m8 5-5 7 5 7M16 5l5 7-5 7" />
          </svg>
        </span>
      </div>
      <span className="before-after-label before-after-label-left">Before</span>
      <span className="before-after-label before-after-label-right">After</span>
    </div>
  );
}
