'use client';

import { useEffect, useRef } from 'react';

export default function StaticNoise() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer32 = new Uint32Array(imageData.data.buffer);
      for (let i = 0; i < buffer32.length; i++) {
        buffer32[i] = Math.random() < 0.5 ? 0x00000000 : 0xffffffff;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const animateNoise = () => {
      generateNoise();
      requestAnimationFrame(animateNoise);
    };

    animateNoise();

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 opacity-[0.06] md:opacity-[0.07] z-[9999] pointer-events-none select-none"
    />
  );
}