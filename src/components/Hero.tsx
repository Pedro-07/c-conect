'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Video, Download, Gamepad2, ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  } as const;

  const nodeVariants = (delay: number) => ({
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'easeInOut' as const,
        delay: delay,
      },
    },
  });

  return (
    <section className="relative min-h-screen bg-primary text-white flex items-center pt-28 pb-16 overflow-hidden">
      {/* Glow Blobs decorativos */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-white/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Lado Esquerdo - Conteúdo de Texto */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-wider text-white/90 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Fibra Óptica 100% de Alta Performance
          </motion.div>

          {/* Headline Bicolor */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            <span className="block font-sans">Internet que acompanha</span>
            <span className="block font-serif italic text-cyan-300 font-normal mt-1">
              o ritmo da sua vida.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/80 font-normal leading-relaxed max-w-xl mb-10"
          >
            Fibra óptica de alta performance para streaming, games, home office e empresas. Experimente a ultra velocidade da Cconect.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#cobertura"
              className="px-8 py-4 bg-white text-primary font-bold text-center rounded-full transition-all duration-300 hover:bg-white/95 hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5"
            >
              Consultar cobertura
            </a>
            <a
              href="#planos"
              className="px-8 py-4 bg-transparent text-white font-bold text-center rounded-full border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Ver planos
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Lado Direito - Mockup Tecnológico de Conexão */}
        <motion.div
          className="lg:col-span-5 relative w-full h-[380px] sm:h-[450px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* SVG Container para as linhas conectadas */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Linhas de conexão */}
            <motion.path
              d="M 50% 50% L 20% 20%"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="2"
              strokeDasharray="6, 6"
              id="line1"
            />
            <motion.path
              d="M 50% 50% L 80% 22%"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="2"
              strokeDasharray="6, 6"
              id="line2"
            />
            <motion.path
              d="M 50% 50% L 18% 75%"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="2"
              strokeDasharray="6, 6"
              id="line3"
            />
            <motion.path
              d="M 50% 50% L 82% 78%"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="2"
              strokeDasharray="6, 6"
              id="line4"
            />

            {/* Pulsos de luz correndo pelas linhas */}
            <circle r="4" fill="#67e8f9">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 50% 50% L 20% 20%" />
            </circle>
            <circle r="4" fill="#67e8f9">
              <animateMotion dur="2.4s" repeatCount="indefinite" path="M 50% 50% L 80% 22%" />
            </circle>
            <circle r="4" fill="#67e8f9">
              <animateMotion dur="3.5s" repeatCount="indefinite" path="M 50% 50% L 18% 75%" />
            </circle>
            <circle r="4" fill="#67e8f9">
              <animateMotion dur="2.8s" repeatCount="indefinite" path="M 50% 50% L 82% 78%" />
            </circle>
          </svg>

          {/* Central Hub (Cconect) */}
          <div className="relative z-10 w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl">
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping pointer-events-none" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="text-white flex items-center justify-center"
            >
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 border-2 border-dashed border-white/30 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-300 font-extrabold text-lg">C</div>
              </div>
            </motion.div>
          </div>

          {/* Node 1: Netflix 4K (Top-Left) */}
          <motion.div
            variants={nodeVariants(0)}
            animate="animate"
            className="absolute left-[5%] top-[12%] z-10 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/10"
          >
            <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400">
              <Play size={16} fill="currentColor" />
            </div>
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-widest font-semibold">Streaming</p>
              <p className="text-xs font-bold">Netflix 4K</p>
            </div>
          </motion.div>

          {/* Node 2: Video Call (Top-Right) */}
          <motion.div
            variants={nodeVariants(0.8)}
            animate="animate"
            className="absolute right-[5%] top-[14%] z-10 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/10"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Video size={16} />
            </div>
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-widest font-semibold">Trabalho</p>
              <p className="text-xs font-bold">Call em Vídeo</p>
            </div>
          </motion.div>

          {/* Node 3: Download (Bottom-Left) */}
          <motion.div
            variants={nodeVariants(1.5)}
            animate="animate"
            className="absolute left-[4%] bottom-[18%] z-10 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/10"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Download size={16} />
            </div>
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-widest font-semibold">Velocidade</p>
              <p className="text-xs font-bold">Download Ultra</p>
            </div>
          </motion.div>

          {/* Node 4: Gaming (Bottom-Right) */}
          <motion.div
            variants={nodeVariants(2.2)}
            animate="animate"
            className="absolute right-[3%] bottom-[16%] z-10 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/10"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Gamepad2 size={16} />
            </div>
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-widest font-semibold">Games</p>
              <p className="text-xs font-bold">Lag Baixíssimo</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Seta indicativa de scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase font-semibold">Descobrir mais</span>
        <ChevronDown size={14} />
      </div>
    </section>
  );
}
