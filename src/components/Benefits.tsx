'use client';

import { motion } from 'framer-motion';
import { Zap, Tv, Home, Shield, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Benefits() {
  const cards = [
    {
      icon: <Zap className="text-primary w-5 h-5 lg:w-6 lg:h-6" />,
      title: 'Baixa latência',
      description: 'Jogos online competitivos sem delays e quedas. O ping ideal para sua gameplay.',
      color: 'from-blue-500/10 to-transparent',
    },
    {
      icon: <Tv className="text-primary w-5 h-5 lg:w-6 lg:h-6" />,
      title: 'Streaming em 4K',
      description: 'Filmes e séries na resolução máxima sem travamentos ou tempo de carregamento.',
      color: 'from-indigo-500/10 to-transparent',
    },
    {
      icon: <Home className="text-primary w-5 h-5 lg:w-6 lg:h-6" />,
      title: 'Home Office',
      description: 'Videoconferências estáveis e transferência rápida de arquivos pesados de trabalho.',
      color: 'from-cyan-500/10 to-transparent',
    },
    {
      icon: <Shield className="text-primary w-5 h-5 lg:w-6 lg:h-6" />,
      title: 'Rede confiável',
      description: 'Infraestrutura de ponta e monitoramento contínuo para garantir estabilidade 24 horas.',
      color: 'from-purple-500/10 to-transparent',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  } as const;

  return (
    <section id="beneficios" className="bg-gradient-to-b from-slate-50/50 to-white py-20 md:py-28 relative overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-4"
          >
            POR QUE CCONECT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-main leading-tight tracking-tight"
          >
            Mais velocidade para hoje,
            <span className="block font-serif italic text-primary font-normal mt-2">
              mais estabilidade para sempre.
            </span>
          </motion.h2>
        </div>

        {/* Grid de Benefícios Principais (2 colunas no mobile, 4 colunas no desktop) */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-16 px-4 lg:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white/80 backdrop-blur-md border border-black/[0.05] rounded-2xl lg:rounded-3xl p-4 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_20px_40px_rgb(16,40,216,0.04)] hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
            >
              {/* Efeito hover de luz interna do card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="relative z-10 text-left">
                <div className="w-9 h-9 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-primary/5 flex items-center justify-center mb-4 lg:mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <div className="transition-transform duration-300 group-hover:scale-110 group-hover:text-white [&>svg]:group-hover:text-white flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-sm lg:text-xl font-bold text-text-main mb-2 lg:mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-[10px] sm:text-xs lg:text-sm text-text-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Destaque Arena Cconect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl bg-primary text-white p-8 md:p-12 overflow-hidden shadow-xl shadow-primary/10 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Luz de Fundo */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-400/20 blur-[60px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold tracking-wider uppercase mb-4">
              #VemSerCconect
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
              Clientes Cconect têm benefícios exclusivos na Arena Cconect!
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Como assinante Cconect, você tem direito a vantagens e condições especiais em nosso espaço oficial de entretenimento gamer e eSports em Chapadinha. Jogue com latência ultrabaixa na melhor estrutura da cidade.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto shrink-0">
            <Link
              href="/arena"
              className="px-6 py-4 bg-white text-primary font-bold rounded-full text-center flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-md group"
            >
              Conhecer a Arena Cconect
              <ArrowUpRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="#planos"
              className="px-6 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full text-center hover:bg-white/15 transition-colors"
            >
              Assinar Internet
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
