'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageSquare, MapPin, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const InstagramIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#070914]">
      {/* Seção CTA Final */}
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 border border-white/5 rounded-3xl p-10 md:p-20 relative overflow-hidden text-center shadow-2xl"
        >
          {/* Luz de Fundo Gigante (Glow Azul) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-primary/25 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-cyan-300 border border-white/10 text-xs font-bold uppercase tracking-wider mb-6">
              Assine Já
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none mb-6">
              Pronto para navegar
              <span className="block font-serif italic text-cyan-300 font-normal mt-2">
                sem limites?
              </span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-lg mb-10 leading-relaxed">
              Junte-se à rede que conecta você de verdade com 100% fibra óptica de ultra performance. Instalação grátis e suporte prioritário imediato.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/5598985271601?text=Olá!%20Verifiquei%20no%20site%20e%20gostaria%20de%20assinar%20a%20internet%20Cconect."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/95 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                Contratar agora
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/5598985271601"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 text-white border border-white/15 font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} className="text-cyan-300" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Rodapé Oficial (Footer) */}
      <footer className="border-t border-white/5 py-12 md:py-20 text-white/60 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo e Bio */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <div className="relative h-9 w-28 md:w-32 brightness-0 invert opacity-90 mb-6">
              <Image
                src="/logosemfundo.png"
                alt="Cconect Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed mb-6">
              Seu provedor de Internet 100% Fibra Óptica em Chapadinha e região. Conexão estável e ultra rápida para toda sua família e empresa. Suporte e atendimento altamente eficaz, inclusive aos finais de semana e feriados.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="md:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4">Navegação</h4>
            <div className="flex flex-col gap-3">
              <Link href="/#beneficios" className="hover:text-cyan-300 transition-colors text-xs sm:text-sm">Benefícios</Link>
              <Link href="/#cobertura" className="hover:text-cyan-300 transition-colors text-xs sm:text-sm">Cobertura</Link>
              <Link href="/#planos" className="hover:text-cyan-300 transition-colors text-xs sm:text-sm">Planos</Link>
              <Link href="/#depoimentos" className="hover:text-cyan-300 transition-colors text-xs sm:text-sm">Depoimentos</Link>
              <Link href="/arena" className="hover:text-cyan-300 transition-colors text-xs sm:text-sm">Arena Cconect</Link>
            </div>
          </div>

          {/* Contatos */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4">Contatos</h4>
            <div className="flex flex-col gap-3.5">
              <a href="https://wa.me/5598985271601" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors text-xs sm:text-sm">
                <Phone size={14} className="text-cyan-300" />
                (98) 98527-1601 (WhatsApp)
              </a>
              <a href="mailto:provedorcconect@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors text-xs sm:text-sm">
                <Mail size={14} className="text-cyan-300" />
                provedorcconect@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-white/50">
                <MapPin size={14} className="text-cyan-300 shrink-0 mt-0.5" />
                <span>
                  Travessa do Matadouro, Nº 76<br />
                  Bairro Fonte do Mato (próximo ao Posto de Saúde)<br />
                  Chapadinha - MA
                </span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4">Siga-nos</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/cconectprovedor/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-300 transition-colors text-xs sm:text-sm"
              >
                <InstagramIcon size={14} className="text-cyan-300" />
                @cconectprovedor
              </a>
              <a
                href="https://www.instagram.com/arenacconect/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-300 transition-colors text-xs sm:text-sm"
              >
                <InstagramIcon size={14} className="text-cyan-300" />
                @arenacconect
              </a>
            </div>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {currentYear} Cconect Provedor. Todos os direitos reservados.</p>
          <p>Chapadinha, Maranhão (MA)</p>
        </div>
      </footer>
    </div>
  );
}

