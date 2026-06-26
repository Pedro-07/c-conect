'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function Plans() {
  const [showAllPlans, setShowAllPlans] = useState(false);

  const plans = [
    {
      name: '260 Megas',
      price: 'R$ 90,00',
      description: 'Perfeito para famílias conectadas que buscam velocidade e estabilidade diária.',
      highlight: 'Roteador Wi-Fi em Comodato',
      ctaText: 'Contratar 260 Megas',
      popular: false,
      isLower: false,
      whatsappMsg: 'Olá! Gostaria de assinar o plano de 260 Megas por R$ 90,00.',
    },
    {
      name: '220 Megas',
      price: 'R$ 80,00',
      description: 'O mais vendido! Velocidade ideal para redes sociais e vídeos com tranquilidade.',
      highlight: 'Roteador Wi-Fi em Comodato',
      ctaText: 'Contratar 220 Megas',
      popular: true,
      isLower: false,
      whatsappMsg: 'Olá! Gostaria de assinar o plano de 220 Megas por R$ 80,00 (Mais Vendido).',
    },
    {
      name: '360 Megas',
      price: 'R$ 100,00',
      description: 'Excelente velocidade para múltiplos aparelhos conectarem ao mesmo tempo.',
      highlight: 'Roteador em Comodato (Alta Performance)',
      ctaText: 'Contratar 360 Megas',
      popular: false,
      isLower: false,
      whatsappMsg: 'Olá! Gostaria de assinar o plano de 360 Megas por R$ 100,00.',
    },
    {
      name: '450 Megas',
      price: 'R$ 130,00',
      description: 'Performance premium para home office intenso e transmissões ao vivo sem delays.',
      highlight: 'Roteador Turbo em Comodato',
      ctaText: 'Contratar 450 Megas',
      popular: false,
      isLower: true,
      whatsappMsg: 'Olá! Gostaria de assinar o plano de 450 Megas por R$ 130,00.',
    },
    {
      name: '600 Megas',
      price: 'R$ 150,00',
      description: 'Velocidade máxima e ultra performance sem limites. Ideal para gaming e empresas.',
      highlight: 'Roteador Turbo Premium em Comodato',
      ctaText: 'Contratar 600 Megas',
      popular: false,
      isLower: true,
      whatsappMsg: 'Olá! Gostaria de assinar o plano de 600 Megas por R$ 150,00.',
    },
  ];

  return (
    <section id="planos" className="bg-white pt-20 pb-10 md:pt-28 md:pb-14 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            NOSSOS PLANOS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-main leading-tight tracking-tight">
            Escolha a velocidade ideal
            <span className="block font-serif italic text-primary font-normal mt-2">
              para a sua necessidade.
            </span>
          </h2>
          <p className="text-text-muted mt-4 text-sm sm:text-base leading-relaxed">
            Internet estável de alta performance, sem taxas de instalação e sob medida para você.
          </p>
        </div>

        {/* Recursos Gerais Inclusos (Substitui a repetição dentro dos cards) */}
        <div className="max-w-5xl mx-auto mb-14 bg-slate-50/60 border border-black/[0.04] rounded-3xl p-5 md:p-6 shadow-sm relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          <div className="flex flex-col items-center md:items-start shrink-0 text-center md:text-left md:border-r md:border-black/[0.08] md:pr-8 md:mr-2 w-full md:w-auto pb-3 md:pb-0 border-b md:border-b-0 border-black/[0.06]">
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-primary mb-0.5">
              Vantagem Garantida
            </span>
            <h4 className="text-xs sm:text-sm font-black text-text-main">
              Incluso em todos os planos:
            </h4>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-y-3 gap-x-6 sm:gap-x-8 text-[11px] sm:text-xs font-bold text-text-main w-full">
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-primary font-extrabold text-sm">✓</span> Conexão 100% Fibra
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-primary font-extrabold text-sm">✓</span> Instalação Grátis
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-primary font-extrabold text-sm">✓</span> Equipamentos em Comodato
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-primary font-extrabold text-sm">✓</span> Clube de Vantagens (Parceiros)
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-primary font-extrabold text-sm">✓</span> Benefícios na Arena Cconect
            </div>
          </div>
        </div>

        {/* Layout Desktop (Sempre exibe os 5 planos em flex-wrap) */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 md:gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const planCardAnimation = {
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: index * 0.12 },
              },
            };

            return (
              <motion.div
                key={plan.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={planCardAnimation}
                className={`flex flex-col justify-between rounded-3xl transition-all duration-300 hover:-translate-y-2 flex-grow-0 shrink-0 ${
                  plan.isLower
                    ? 'w-[310px] p-5 lg:scale-[0.96] opacity-90'
                    : 'w-[330px] p-6'
                } ${
                  plan.popular
                    ? 'bg-primary text-white border-2 border-primary shadow-2xl shadow-primary/20 scale-100 lg:scale-105 z-10 relative'
                    : 'bg-white text-text-main border border-black/[0.06] shadow-sm hover:shadow-xl hover:border-black/[0.1]'
                }`}
              >
                {/* Destaque "Mais Popular / Mais Vendido" */}
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-300 text-primary text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                    Mais Vendido
                  </span>
                )}

                <div>
                  {/* Cabeçalho do Card */}
                  <div className="mb-6">
                    <p className={`text-[10px] font-extrabold uppercase tracking-widest mb-1.5 ${plan.popular ? 'text-cyan-300' : 'text-primary'}`}>
                      {plan.name === '600 Megas' ? 'Ultra Gamer / Empresa' : 'Fibra Óptica'}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-extrabold mb-3">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-2xl sm:text-3xl font-black">{plan.price}</span>
                      <span className={`text-[10px] ${plan.popular ? 'text-white/70' : 'text-text-muted'}`}>/mês</span>
                    </div>
                    <p className={`text-xs leading-relaxed min-h-[36px] ${plan.popular ? 'text-white/80' : 'text-text-muted'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <hr className={`my-4 ${plan.popular ? 'border-white/10' : 'border-black/[0.06]'}`} />

                  {/* Diferencial / Recurso Único */}
                  <div className="flex items-start gap-2 text-xs mb-6">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-cyan-400/20 text-cyan-300' : 'bg-primary/5 text-primary'
                    }`}>
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className={`font-bold ${plan.popular ? 'text-cyan-200' : 'text-text-main/90'}`}>{plan.highlight}</span>
                  </div>
                </div>

                {/* Botão CTA */}
                <a
                  href={`https://wa.me/5598985271601?text=${encodeURIComponent(plan.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-xs tracking-wide text-center transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                    plan.popular
                      ? 'bg-white text-primary hover:bg-slate-50 hover:shadow-lg hover:shadow-white/5'
                      : 'bg-primary text-white hover:bg-primary/95 shadow-md shadow-primary/10 hover:shadow-primary/20'
                  }`}
                >
                  {plan.ctaText}
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Layout Mobile (Carrossel dos 3 primeiros planos + Grid compacto dos planos extras) */}
        <div className="block md:hidden w-full">
          {/* Carrossel dos 3 primeiros */}
          <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 items-stretch px-4 pb-6 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {plans.filter(p => !p.isLower).map((plan, index) => {
              const cardAnim = {
                hidden: { opacity: 0, x: 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: index * 0.1 },
                },
              };

              return (
                <motion.div
                  key={plan.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardAnim}
                  className={`flex flex-col justify-between rounded-2xl transition-all duration-300 w-[66vw] xs:w-[250px] sm:w-[280px] p-5 shrink-0 snap-center ${
                    plan.popular
                      ? 'bg-primary text-white border-2 border-primary shadow-2xl shadow-primary/20 scale-100 z-10 relative'
                      : 'bg-white text-text-main border border-black/[0.06] shadow-sm'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-300 text-primary text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                      Mais Vendido
                    </span>
                  )}

                  <div>
                    <div className="mb-4">
                      <p className={`text-[10px] font-extrabold uppercase tracking-widest mb-1 ${plan.popular ? 'text-cyan-300' : 'text-primary'}`}>
                        Fibra Óptica
                      </p>
                      <h3 className="text-lg font-extrabold mb-2">{plan.name}</h3>
                      <div className="flex items-baseline gap-1 mb-1.5">
                        <span className="text-xl sm:text-2xl font-black">{plan.price}</span>
                        <span className={`text-[9px] ${plan.popular ? 'text-white/70' : 'text-text-muted'}`}>/mês</span>
                      </div>
                      <p className={`text-[11px] leading-relaxed min-h-[32px] ${plan.popular ? 'text-white/80' : 'text-text-muted'}`}>
                        {plan.description}
                      </p>
                    </div>

                    <hr className={`my-3 ${plan.popular ? 'border-white/10' : 'border-black/[0.06]'}`} />

                    <div className="flex items-start gap-2 text-[11px] mb-5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-cyan-400/20 text-cyan-300' : 'bg-primary/5 text-primary'
                      }`}>
                        <Check size={9} strokeWidth={3} />
                      </div>
                      <span className={`font-bold ${plan.popular ? 'text-cyan-200' : 'text-text-main/90'}`}>{plan.highlight}</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/5598985271601?text=${encodeURIComponent(plan.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-5 rounded-full font-bold text-[11px] tracking-wide text-center transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                      plan.popular
                        ? 'bg-white text-primary'
                        : 'bg-primary text-white shadow-md shadow-primary/10'
                    }`}
                  >
                    {plan.ctaText}
                    <ArrowRight size={12} />
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Botão de Expansão (Mobile Only) */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAllPlans(!showAllPlans)}
              className="px-6 py-3.5 bg-primary text-white font-bold rounded-full text-xs uppercase tracking-widest shadow-md shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-95 flex items-center gap-2"
            >
              {showAllPlans ? 'Ocultar planos adicionais' : 'Conhecer mais planos'}
            </button>
          </div>

          {/* Grid Compacto de Planos Extras (Exibido se showAllPlans for true) */}
          {showAllPlans && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 gap-3 mt-8 px-4"
            >
              {plans.filter(p => p.isLower).map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col justify-between rounded-2xl bg-white text-text-main border border-black/[0.06] p-4 shadow-sm"
                >
                  <div>
                    <div className="mb-3">
                      <span className="text-[8px] font-extrabold uppercase tracking-wider text-primary mb-1 block">
                        {plan.name === '600 Megas' ? 'Ultra Gamer' : 'Turbo Pro'}
                      </span>
                      <h4 className="text-sm font-black text-text-main">{plan.name}</h4>
                      <div className="flex items-baseline gap-0.5 mt-1">
                        <span className="text-base font-black text-text-main">{plan.price}</span>
                        <span className="text-[8px] text-text-muted">/mês</span>
                      </div>
                    </div>

                    <p className="text-[10px] leading-snug text-text-muted mb-3 min-h-[40px]">
                      {plan.description}
                    </p>

                    <hr className="my-2.5 border-black/[0.05]" />

                    <div className="flex items-start gap-1.5 text-[9px] mb-4">
                      <div className="w-3.5 h-3.5 rounded-full bg-primary/5 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={8} strokeWidth={3} />
                      </div>
                      <span className="font-bold text-text-main/90 leading-tight">{plan.highlight}</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/5598985271601?text=${encodeURIComponent(plan.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-full bg-primary text-white text-center text-[10px] font-bold tracking-wide hover:bg-primary/95 transition-all flex items-center justify-center gap-1.5"
                  >
                    Contratar
                    <ArrowRight size={10} />
                  </a>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Nota Explicativa sobre Comodato */}
        <p className="text-[10px] sm:text-xs text-text-muted mt-12 text-center max-w-2xl mx-auto leading-relaxed border-t border-black/[0.04] pt-6 px-4">
          💡 <strong>O que é Roteador em Comodato?</strong> É um modelo de empréstimo gratuito onde a Cconect cede o aparelho de alta performance para uso do cliente sem custo de compra enquanto durar o contrato, devendo ser devolvido ao final do mesmo.
        </p>
      </div>
    </section>
  );
}
