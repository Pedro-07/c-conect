'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Gift, Heart, Shield, Landmark } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: 'OrthoLab',
      logo: '/partners/Parceiro1.png',
      benefit: 'Condições Especiais',
      description: 'Condições diferenciadas em tratamentos odontológicos, radiografias e consultas preventivas para assinantes.',
      icon: <Heart className="text-primary" size={20} />,
    },
    {
      name: 'RedeOrto',
      logo: '/partners/Parceiro2.png',
      benefit: 'Condições Especiais',
      description: 'Condições exclusivas e vantagens diferenciadas em aparelhos ortodônticos, manutenção e profilaxia.',
      icon: <Shield className="text-primary" size={20} />,
    },
    {
      name: 'Instituto Visão',
      logo: '/partners/Parceiro3.png',
      benefit: 'Condições Especiais',
      description: 'Condições facilitadas em exames de vista, mapeamento de retina e consultas oftalmológicas.',
      icon: <Landmark className="text-primary" size={20} />,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
    <section id="parceiros" className="bg-gradient-to-b from-white to-slate-50/50 py-16 md:py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Gift size={12} />
            CLUBE DE VANTAGENS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-main leading-tight tracking-tight">
            Sua conexão que rende
            <span className="block font-serif italic text-primary font-normal mt-2">
              vantagens na cidade.
            </span>
          </h2>
          <p className="text-text-muted mt-4 text-sm sm:text-base leading-relaxed">
            Quem é cliente Cconect economiza no dia a dia. Apresente sua última fatura paga nos estabelecimentos parceiros em Chapadinha e garanta benefícios exclusivos.
          </p>
        </div>

        {/* Grade de Parceiros (Carrossel no mobile, 3 colunas no desktop) */}
        <motion.div
          className="flex flex-row md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none px-4 md:px-0 pb-6 md:pb-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white border border-black/[0.05] rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_20px_40px_rgb(16,40,216,0.05)] hover:border-primary/10 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between w-[78vw] xs:w-[280px] sm:w-[310px] md:w-auto shrink-0 snap-center"
            >
              {/* Efeito Glow de fundo suave */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Logo Area */}
                <div className="w-full h-32 bg-slate-50/50 border border-black/[0.03] rounded-2xl flex items-center justify-center p-2 mb-6 relative overflow-hidden group-hover:bg-white group-hover:border-black/[0.06] transition-all">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain scale-[1.35] transition-transform duration-500 group-hover:scale-[1.42]"
                      sizes="(max-w-768px) 100vw, 300px"
                    />
                  </div>
                </div>

                {/* Tag de Benefício */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-extrabold uppercase tracking-wide mb-4">
                  {partner.icon}
                  {partner.benefit}
                </span>

                {/* Título do Parceiro */}
                <h3 className="text-lg font-bold text-text-main mb-3 group-hover:text-primary transition-colors text-left">
                  {partner.name}
                </h3>

                {/* Descrição */}
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed text-left">
                  {partner.description}
                </p>
              </div>

              {/* Linha Divisória & Instrução */}
              <div className="mt-8 border-t border-black/[0.04] pt-5 flex items-center justify-between text-[10px] font-bold tracking-wider text-text-muted uppercase">
                <span>Benefício Ativo</span>
                <span className="text-primary font-extrabold">Apresente a Fatura</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
