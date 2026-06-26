'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Lucas Silva',
      location: 'Chapadinha (Centro)',
      initials: 'LS',
      review: 'Internet extremamente estável. Trabalho de home office e participo de reuniões por chamada de vídeo o dia todo sem nenhuma travada. A instalação foi super rápida!',
      stars: 5,
    },
    {
      name: 'Beatriz Costa',
      location: 'Povoado São Joaquim',
      initials: 'BC',
      review: 'O sinal de fibra óptica chega perfeito no povoado. Consigo assistir minhas séries em 4K e os meus filhos jogam online sem lags ou quedas. O atendimento de suporte é muito prestativo.',
      stars: 5,
    },
    {
      name: 'Felipe Neves',
      location: 'Chapadinha (Areal)',
      initials: 'FN',
      review: 'Assinei o plano de 700 Mega e é espetacular. Como gamer competitivo, o ping baixo é essencial para mim. Cconect é o único provedor da região que realmente entrega o que promete.',
      stars: 5,
    },
  ];

  return (
    <section id="depoimentos" className="bg-gradient-to-b from-white to-slate-50/30 pt-10 pb-20 md:pt-14 md:pb-28 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            PROVA SOCIAL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-main leading-tight tracking-tight">
            Milhares de clientes já escolheram
            <span className="block font-serif italic text-primary font-normal mt-2">
              uma conexão melhor.
            </span>
          </h2>
        </div>

        {/* Grid de Depoimentos (Carrossel no mobile, 3 colunas no desktop) */}
        <div className="flex flex-row md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none px-4 md:px-0 pb-6 md:pb-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border border-black/[0.05] rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-xl hover:border-black/[0.08] transition-all duration-300 flex flex-col justify-between w-[78vw] xs:w-[280px] sm:w-[310px] md:w-auto shrink-0 snap-center"
            >
              <div>
                {/* Estrelas */}
                <div className="flex items-center gap-1 mb-4 md:mb-5">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400 md:w-4 md:h-4" />
                  ))}
                </div>
                
                {/* Texto do Depoimento */}
                <p className="text-xs md:text-sm lg:text-base text-text-main/90 italic leading-relaxed mb-5 md:mb-6 font-normal text-left">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Informações do Autor */}
              <div className="flex items-center gap-3 border-t border-black/[0.04] pt-4 md:pt-5">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/5 text-primary font-bold text-xs md:text-sm flex items-center justify-center shrink-0 border border-primary/10">
                  {item.initials}
                </div>
                <div className="text-left">
                  <h4 className="text-xs md:text-sm font-bold text-text-main leading-tight">{item.name}</h4>
                  <p className="text-[10px] md:text-[11px] text-text-muted mt-0.5">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
