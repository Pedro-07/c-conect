'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const m1Ref = useRef<HTMLSpanElement>(null);
  const m2Ref = useRef<HTMLSpanElement>(null);
  const m3Ref = useRef<HTMLSpanElement>(null);
  const m4Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const triggerEl = containerRef.current;
    if (!triggerEl) return;

    // Animação 1: 99.8%
    const t1 = { val: 0 };
    const a1 = gsap.to(t1, {
      val: 99.8,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        if (m1Ref.current) {
          m1Ref.current.innerText = t1.val.toFixed(1).replace('.', ',');
        }
      },
    });

    // Animação 2: +15.000
    const t2 = { val: 0 };
    const a2 = gsap.to(t2, {
      val: 15000,
      duration: 2.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        if (m2Ref.current) {
          // Formata com pontos como separador de milhares
          m2Ref.current.innerText = Math.floor(t2.val).toLocaleString('pt-BR');
        }
      },
    });

    // Animação 3: 100%
    const t3 = { val: 0 };
    const a3 = gsap.to(t3, {
      val: 100,
      duration: 1.8,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        if (m3Ref.current) {
          m3Ref.current.innerText = Math.floor(t3.val).toString();
        }
      },
    });

    // Animação 4: 24/7 (Anima o 24)
    const t4 = { val: 0 };
    const a4 = gsap.to(t4, {
      val: 24,
      duration: 1.5,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        if (m4Ref.current) {
          m4Ref.current.innerText = Math.floor(t4.val).toString();
        }
      },
    });

    // Fade-in dos textos secundários e containers
    const a5 = gsap.fromTo(
      triggerEl.querySelectorAll('.metric-item'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top 85%',
          once: true,
        },
      }
    );

    return () => {
      a1.scrollTrigger?.kill();
      a1.kill();
      a2.scrollTrigger?.kill();
      a2.kill();
      a3.scrollTrigger?.kill();
      a3.kill();
      a4.scrollTrigger?.kill();
      a4.kill();
      a5.scrollTrigger?.kill();
      a5.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-white py-16 md:py-24 border-y border-black/[0.04] relative z-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 md:gap-x-12 text-center">
          {/* Métricas 1 */}
          <div className="metric-item flex flex-col items-center">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary tracking-tight mb-2">
              <span ref={m1Ref}>0</span>%
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-text-muted uppercase tracking-wider">
              Disponibilidade
            </p>
          </div>

          {/* Métricas 2 */}
          <div className="metric-item flex flex-col items-center">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary tracking-tight mb-2">
              +<span ref={m2Ref}>0</span>
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-text-muted uppercase tracking-wider">
              Clientes Conectados
            </p>
          </div>

          {/* Métricas 3 */}
          <div className="metric-item flex flex-col items-center">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary tracking-tight mb-2">
              <span ref={m3Ref}>0</span>%
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-text-muted uppercase tracking-wider">
              Fibra Óptica
            </p>
          </div>

          {/* Métricas 4 */}
          <div className="metric-item flex flex-col items-center">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary tracking-tight mb-2">
              <span ref={m4Ref}>0</span>/7
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-text-muted uppercase tracking-wider">
              Suporte Técnico
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
