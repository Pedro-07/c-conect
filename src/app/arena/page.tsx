'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Users, 
  Calendar, 
  Wifi, 
  MapPin, 
  MessageSquare, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

const InstagramIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
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

export default function ArenaPage() {
  const whatsappUrl = "https://wa.me/5598985271601?text=Olá!%20Gostaria%20de%20consultar%20a%20disponibilidade%20de%20horários%20e%20valores%20para%20reserva%20na%20Arena%20Cconect.";
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const handleGalleryScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.clientWidth;
    const index = Math.round(scrollPosition / itemWidth);
    if (index !== activePhotoIndex) {
      setActivePhotoIndex(index);
    }
  };

  // Variantes para animações de fade-in sequencial
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  } as const;

  const spaces = [
    {
      icon: <Trophy className="text-accent" size={32} />,
      title: "Arena de Areia Premium",
      description: "Espaço perfeito para a prática de futevôlei, vôlei de praia e beach tennis. Areia fina de alta qualidade, rede profissional regulável e refletores potentes de LED para jogos noturnos.",
      features: ["Futevôlei & Beach Tennis", "Areia Fina Selecionada", "Rede Oficial Regulável"],
      image: "/arena/arena1.jpeg"
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: "Campo de Futebol Society",
      description: "Gramado sintético padrão internacional de alta performance com excelente amortecimento de impactos. Marcações oficiais, refletores de LED profissionais e vestiários higienizados.",
      features: ["Gramado Sintético Pro", "Iluminação LED Anti-Sombra", "Vestiários Equipados"],
      image: "/arena/arena2.jpeg"
    },
    {
      icon: <Calendar className="text-accent" size={32} />,
      title: "Área Gourmet & Eventos",
      description: "A estrutura completa para o seu pós-jogo e celebrações. Quiosques equipados com churrasqueiras individuais, freezer, balcões de apoio e mesas integrados a um amplo salão coberto.",
      features: ["Churrasqueiras e Freezers", "Espaço Amplo Coberto", "Ambiente Familiar Seguro"],
      image: "/arena/arena3.jpeg"
    }
  ];


  return (
    <div className="relative min-h-screen bg-[#070914] text-white">
      <Navbar />

      <main>
        {/* HERO SECTION DE ALTO IMPACTO */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-36 overflow-hidden">
          {/* Efeitos de Luz no Fundo */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Texto Hero */}
            <div className="lg:col-span-7 text-left flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold uppercase tracking-wider mb-6"
              >
                <Sparkles size={14} />
                Complexo Esportivo & Eventos
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
              >
                Arena Cconect
                <span className="block font-serif italic text-accent font-normal mt-2">
                  Esporte, lazer & conexão
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/70 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
              >
                O complexo esportivo society mais moderno de Chapadinha - MA. Quadras sintéticas de padrão internacional, quiosques integrados para confraternizações e benefícios exclusivos para assinantes Cconect.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/95 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <MessageSquare size={18} />
                  Agendar quadra
                </a>
                <a
                  href="#estrutura"
                  className="px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  Ver espaços
                  <ArrowRight size={18} className="text-accent" />
                </a>
              </motion.div>
            </div>

            {/* Reprodutor do Vídeo Real da Arena (Vertical 9:16 Otimizado) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative w-full max-w-[320px] aspect-[9/16] mx-auto lg:ml-auto rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/5 bg-slate-950"
            >
              <video
                src="/arena/video1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Badges de Destaque Flutuantes */}
              <div className="absolute top-6 left-6 z-20 bg-[#070914]/80 backdrop-blur border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/90">Vídeo Oficial</span>
              </div>
              
              <div className="absolute bottom-6 right-6 z-20 bg-[#070914]/80 backdrop-blur border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                <Wifi className="text-accent" size={14} />
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/95">Wi-Fi Liberado</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEÇÃO SOBRE A ARENA (Fundo Branco/Cinza para Contraste) */}
        <section id="estrutura" className="bg-white text-text-main py-20 md:py-28 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24 flex flex-col items-center">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/10 text-xs font-bold uppercase tracking-wider mb-4">
                Infraestrutura Completa
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none mb-6">
                Muito mais que uma quadra,
                <span className="block font-serif italic text-primary font-normal mt-2">
                  um complexo de lazer completo
                </span>
              </h2>
              <p className="text-text-muted text-sm sm:text-base max-w-xl leading-relaxed">
                A Arena Cconect foi desenhada para proporcionar a melhor experiência de futebol society e convivência social em Chapadinha. Do gramado impecável ao terceiro tempo com churrasco.
              </p>
            </div>

            {/* Espaços - Grid de Cards (Mobile Carrossel Horizontal Deslizável) */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-6 px-6 md:mx-0 md:px-0"
            >
              {spaces.map((space, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="min-w-[72vw] sm:min-w-[300px] md:min-w-0 snap-center bg-slate-50 border border-black/5 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full aspect-video">
                      <Image 
                        src={space.image}
                        alt={space.title}
                        fill
                        className="object-cover"
                        sizes="(max-w-7xl) 33vw, 100vw"
                      />
                    </div>
                    <div className="p-6 pb-0">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        {space.icon}
                      </div>
                      <h3 className="text-lg font-bold text-text-main mb-2">{space.title}</h3>
                      <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-4">
                        {space.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 pb-6">
                    <ul className="border-t border-black/5 pt-4 flex flex-col gap-2">
                      {space.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-center gap-2.5 text-xs sm:text-sm text-text-muted font-medium">
                          <CheckCircle2 size={16} className="text-primary shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* SEÇÃO GALERIA DE FOTOS (Fundo Cinza Claro) */}
        <section className="bg-slate-50 py-20 md:py-28 relative border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24 flex flex-col items-center">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/10 text-xs font-bold uppercase tracking-wider mb-4">
                Galeria de Fotos
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none mb-6 text-text-main">
                Nossa estrutura
                <span className="block font-serif italic text-primary font-normal mt-2">
                  em cada detalhe
                </span>
              </h2>
              <p className="text-text-muted text-sm sm:text-base max-w-xl leading-relaxed">
                Explore os espaços da Arena Cconect. Fotos reais do complexo para você conhecer nosso padrão de qualidade.
              </p>
            </div>

            {/* Mobile Carousel (tipo Instagram) */}
            <div className="relative md:hidden">
              <div 
                onScroll={handleGalleryScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-6 px-4 gap-0"
              >
                {[4, 5, 6, 7, 8].map((num) => (
                  <div 
                    key={num}
                    className="min-w-full snap-center px-2"
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-black/5">
                      <Image 
                        src={`/arena/arena${num}.jpeg`}
                        alt={`Arena Foto ${num}`}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pontinhos tipo Instagram */}
              <div className="flex justify-center gap-1.5 mt-4">
                {[0, 1, 2, 3, 4].map((idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activePhotoIndex === idx 
                        ? 'w-3 bg-primary' 
                        : 'w-1.5 bg-black/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Grid Bento Moderno (Apenas Desktop) */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Foto 1 (Maior) */}
              <div className="relative aspect-[16/9] sm:col-span-2 rounded-3xl overflow-hidden group shadow-md border border-black/5">
                <Image 
                  src="/arena/arena4.jpeg" 
                  alt="Infraestrutura Arena Cconect" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  sizes="(max-w-7xl) 66vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Foto 2 */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-md border border-black/5">
                <Image 
                  src="/arena/arena5.jpeg" 
                  alt="Quadra Society e Refletores" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  sizes="(max-w-7xl) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Foto 3 */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-md border border-black/5">
                <Image 
                  src="/arena/arena6.jpeg" 
                  alt="Área de Lazer e Confraternização" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  sizes="(max-w-7xl) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Foto 4 */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-md border border-black/5">
                <Image 
                  src="/arena/arena7.jpeg" 
                  alt="Quiosques com Churrasqueira" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  sizes="(max-w-7xl) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Foto 5 */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-md border border-black/5">
                <Image 
                  src="/arena/arena8.jpeg" 
                  alt="Salão de Festas da Arena" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  sizes="(max-w-7xl) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO LOCALIZAÇÃO & CONTATO (Fundo Branco Centralizado) */}
        <section className="bg-white text-text-main py-20 md:py-28 relative">
          <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/10 text-xs font-bold uppercase tracking-wider mb-4">
              Localização & Contato
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none mb-6">
              Fácil de chegar,
              <span className="block font-serif italic text-primary font-normal mt-2">
                perfeito para reunir a galera
              </span>
            </h2>
            <p className="text-text-muted text-sm sm:text-base max-w-xl leading-relaxed mb-8">
              Localizada em Chapadinha - MA, a Arena Cconect conta com estacionamento privativo e vias de fácil acesso. Garanta já a reserva de horário para o seu time!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full mb-10 text-left max-w-xl">
              <a 
                href="https://share.google/DIzUAEKtu35NE6Kdv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 flex-1 bg-slate-50 border border-black/5 p-5 rounded-2xl hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <h5 className="font-bold text-text-main text-sm sm:text-base group-hover:text-primary transition-colors">Endereço da Arena</h5>
                  <p className="text-text-muted text-xs sm:text-sm mt-1">Rua 1 - Angelim, Chapadinha - MA</p>
                  <span className="text-primary text-xs font-semibold mt-2 inline-flex items-center gap-1 group-hover:underline">
                    Ver no Google Maps
                    <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
              <div className="flex items-start gap-3 flex-1 bg-slate-50 border border-black/5 p-5 rounded-2xl">
                <InstagramIcon className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <h5 className="font-bold text-text-main text-sm sm:text-base">Siga no Instagram</h5>
                  <a 
                    href="https://www.instagram.com/arenacconect/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline text-xs sm:text-sm font-semibold mt-1 inline-block"
                  >
                    @arenacconect
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/95 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <MessageSquare size={18} />
                Reservar via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
