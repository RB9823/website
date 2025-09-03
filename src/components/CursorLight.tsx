import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { VISUAL } from '../config/visual';

export function CursorLight() {
  const lightRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const boostTargetRef = useRef(0);
  const boostRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onPointerMove = (e: PointerEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      const rs = document.documentElement.style;
      rs.setProperty('--cursor-x', `${e.clientX}px`);
      rs.setProperty('--cursor-y', `${e.clientY}px`);
      const el = e.target as Element | null;
      const interactive = el?.closest?.(
        '.glass-tile, a, button, .btn-primary, .btn-secondary'
      );
      boostTargetRef.current = interactive ? 1 : 0;
      if (!isVisible) setIsVisible(true);
      if (!rafRef.current) rafRef.current = requestAnimationFrame(step);
    };
    const onPointerEnter = () => setIsVisible(true);
    const onPointerLeave = () => setIsVisible(false);
    const onPointerCancel = () => setIsVisible(false);

    const step = () => {
      if (prefersReducedMotion) return;
      const light = lightRef.current;
      if (!light) {
        rafRef.current = null;
        return;
      }
      const cur = currentRef.current;
      const tgt = targetRef.current;
      cur.x += (tgt.x - cur.x) * VISUAL.HALO_FOLLOW_ALPHA;
      cur.y += (tgt.y - cur.y) * VISUAL.HALO_FOLLOW_ALPHA;
      const bT = boostTargetRef.current;
      boostRef.current += (bT - boostRef.current) * VISUAL.HALO_BOOST_ALPHA;
      const scale = VISUAL.HALO_SCALE_BASE + VISUAL.HALO_SCALE_RANGE * boostRef.current;
      const opacity = 0.75 + 0.15 * boostRef.current;
      light.style.transform = `translate3d(${cur.x - 210}px, ${cur.y - 210}px, 0) scale(${scale})`;
      light.style.opacity = String(opacity);
      const rootStyle = document.documentElement.style;
      rootStyle.setProperty('--cursor-x', `${cur.x}px`);
      rootStyle.setProperty('--cursor-y', `${cur.y}px`);
      rootStyle.setProperty('--cursor-boost', boostRef.current.toFixed(3));
      rafRef.current = requestAnimationFrame(step);
    };

    document.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerenter', onPointerEnter, { passive: true });
    document.addEventListener('pointerleave', onPointerLeave, { passive: true });
    document.addEventListener('pointercancel', onPointerCancel, { passive: true });

    return () => {
      document.removeEventListener('pointermove', onPointerMove as any);
      document.removeEventListener('pointerenter', onPointerEnter as any);
      document.removeEventListener('pointerleave', onPointerLeave as any);
      document.removeEventListener('pointercancel', onPointerCancel as any);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  const node = (
    <div
      ref={lightRef}
      className={`fixed pointer-events-none z-40 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        width: `${VISUAL.HALO_SIZE_PX}px`,
        height: `${VISUAL.HALO_SIZE_PX}px`,
        background: [
          'radial-gradient(closest-side, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.10) 40%, rgba(255,255,255,0) 70%)',
          'radial-gradient(closest-side, rgba(118,208,255,0.18) 0%, rgba(118,208,255,0.08) 45%, rgba(118,208,255,0) 80%)',
          'radial-gradient(closest-side, rgba(118,208,255,0.06) 0%, rgba(118,208,255,0) 90%)'
        ].join(','),
        borderRadius: '50%',
        filter: 'blur(1px)',
        willChange: 'transform, opacity',
        mixBlendMode: 'screen',
      }}
    />
  );

  // Render into body to avoid transformed ancestors breaking fixed positioning
  if (typeof document !== 'undefined') {
    return createPortal(node, document.body);
  }
  return node;
}
