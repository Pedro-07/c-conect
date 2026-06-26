'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Torna o Lenis disponível globalmente para integração com GSAP ScrollTrigger, se necessário
    (window as unknown as { lenis: Lenis | null }).lenis = lenis;

    return () => {
      lenis.destroy();
      (window as unknown as { lenis: Lenis | null }).lenis = null;
    };
  }, []);

  return <>{children}</>;
}
