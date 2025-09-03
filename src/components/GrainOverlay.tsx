import { useEffect, useRef } from 'react';

export function GrainOverlay() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255;
      data[i] = v; // R
      data[i + 1] = v; // G
      data[i + 2] = v; // B
      data[i + 3] = 28; // alpha ~11%
    }
    ctx.putImageData(imageData, 0, 0);
    const url = canvas.toDataURL();
    if (ref.current) {
      ref.current.style.backgroundImage = `url(${url})`;
    }
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
        mixBlendMode: 'overlay',
        opacity: 0.15,
        filter: 'blur(0.8px)',
      }}
    />
  );
}

