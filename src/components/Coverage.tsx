'use client';

import { useState } from 'react';
import { Search, MapPin, CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Lista de povoados atendidos mapeados a partir de cconect.md
const povoados = [
  'ABERLADOS', 'ALTO DA MAÇARANDUBA', 'ALTO-ALEGRE', 'ANAJÁ', 'ANGICO',
  'ARAÇAR', 'ARMAZÉM', 'BACABALZINHO', 'BAIXAO', 'BALCEIRO',
  'BARRIGUDA', 'BARROCA DA VACA', 'BARROCAO', 'BELA VISTA', 'BOA ESPERANÇA',
  'BOA HORA', 'BOCA DA MATA DOS CARDOSO', 'BOCA DA MATA DOS LONGUIN', 'BOI PRETO', 'BOM JESUS',
  'BUQUERÃO', 'CAJAZEIRA DOS DOUROS', 'CAJAZEIRAS', 'CAMPESTRE', 'CAMPOS NOVOS',
  'CANTO DO ARAÇAR', 'CANTO DOS BOI', 'CANTO FERREIRA', 'CAPINAL II', 'CAPITAL I',
  'CARAMICA', 'CENTRO DO BURACO', 'CENTRÃO', 'COCAL', 'CRUZ VELHA',
  'CURRALINHO', 'ESTRELA II', 'FAVEIRA', 'FELICIANA', 'FOLHA LARGA',
  'GUABIRABA', 'JOÃO INÁCIO', 'LIMÃO', 'LOIOLA', 'MACAJUBA',
  'MACAJUBA DOS LEITES', 'MACAMBEIRA', 'MADEIRA CORTADA', 'MALHADA DO MEIO', 'MALHADA DOS FRANCESES',
  'MORRO VERMELHO', 'MUCAMBIRA', 'OLHO D’ÁGUA SECO', 'PAI JOÃO', 'PATAQUEIRA',
  'PAU DARCO', 'PÉ DO MORRO', 'PINTOBEIRA DOS LEITES', 'PIRA', 'POCOVAL',
  'POÇOS', 'POÇOS DANTAS', 'QUEIMADAS', 'RETIRANA', 'RETIRO DOS OLIVERAS',
  'RIACHO', 'RIACHO DA MATA', 'RIACHO FUNDO', 'RIACHÃO', 'ROCINHA',
  'SANTA ANINHA', 'SANTA CLARA', 'SANTA RITA', 'SANTA ROSA', 'SAPUCAIA',
  'SOLEDADE', 'SÃO DOMINGOS', 'SÃO JOAQUIM', 'SÃO PEDRO', 'TABOCA',
  'TABULEIRAO', 'TAMBURI', 'TINGUINS', 'UCURANA', 'VAREDA GRANDE',
  'VERDE', 'VILA PANDOCA', 'VILA UNIÃO'
];

export default function Coverage() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'idle' | 'available' | 'check_manually'>('idle');
  const [matchedLocation, setMatchedLocation] = useState('');
  const [showAllList, setShowAllList] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const cleanQuery = query
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // Remove acentos

    // Verifica se parece um CEP (somente números ou formato de CEP)
    const isCep = /^[0-9\-\s]+$/.test(cleanQuery);

    if (isCep) {
      // Chapadinha MA CEP começa com 655
      const numbersOnly = cleanQuery.replace(/\D/g, '');
      if (numbersOnly.startsWith('655')) {
        setStatus('available');
        setMatchedLocation('Chapadinha (Sede)');
      } else {
        setStatus('check_manually');
        setMatchedLocation(query);
      }
      return;
    }

    // Busca nos povoados
    const match = povoados.find((p) => {
      const cleanP = p
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      return cleanP.includes(cleanQuery) || cleanQuery.includes(cleanP);
    });

    if (match) {
      setStatus('available');
      setMatchedLocation(match);
    } else {
      setStatus('check_manually');
      setMatchedLocation(query);
    }
  };

  // Coordenadas conceituais para os nós do mapa interativo
  const mapNodes = [
    { name: 'SÃO JOAQUIM', x: '25%', y: '20%' },
    { name: 'CAJAZEIRAS', x: '45%', y: '15%' },
    { name: 'BOA HORA', x: '70%', y: '25%' },
    { name: 'SÃO DOMINGOS', x: '15%', y: '45%' },
    { name: 'SANTA ANINHA', x: '35%', y: '50%' },
    { name: 'SAPUCAIA', x: '60%', y: '40%' },
    { name: 'LOIOLA', x: '80%', y: '55%' },
    { name: 'UCURANA', x: '20%', y: '75%' },
    { name: 'POÇOS', x: '50%', y: '80%' },
    { name: 'BUQUERÃO', x: '75%', y: '75%' },
  ];

  return (
    <section id="cobertura" className="bg-[#090b1a] text-white py-20 md:py-28 relative overflow-hidden z-20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Lado Esquerdo - Formulário de Consulta */}
        <div className="lg:col-span-6 flex flex-col text-left">
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-cyan-300 border border-white/10 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
            Rede de Cobertura
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Consulte disponibilidade na sua região
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
            Atendemos a sede urbana de Chapadinha/MA e mais de 80 povoados da região com conexão 100% fibra óptica estável e rápida. Digite seu CEP ou localidade para verificar.
          </p>

          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <input
                type="text"
                placeholder="Digite seu CEP ou Povoado (Ex: São Joaquim)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/15 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all text-sm"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/95 transition-all text-sm shadow-lg shadow-primary/20 shrink-0"
            >
              Consultar disponibilidade
            </button>
          </form>

          {/* Animação dos Resultados da Busca */}
          <AnimatePresence mode="wait">
            {status === 'available' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 max-w-xl flex items-start gap-4 mb-6"
              >
                <CheckCircle size={24} className="shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">Disponibilidade Confirmada!</h4>
                  <p className="text-xs text-white/80 mt-1 leading-relaxed">
                    Excelente! Temos cobertura de fibra óptica 100% ativa em <strong className="text-white">{matchedLocation}</strong>.
                  </p>
                  <a
                    href={`https://wa.me/5598985271601?text=Olá!%20Verifiquei%20no%20site%20e%20gostaria%20de%20assinar%20a%20internet%20da%20Cconect%20para%20a%20região:%20${encodeURIComponent(matchedLocation)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition-colors shadow-sm"
                  >
                    Contratar via WhatsApp
                  </a>
                </div>
              </motion.div>
            )}

            {status === 'check_manually' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 max-w-xl flex items-start gap-4 mb-6"
              >
                <AlertCircle size={24} className="shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm">Verificar viabilidade técnica</h4>
                  <p className="text-xs text-white/80 mt-1 leading-relaxed">
                    Não mapeamos de forma automática o local &ldquo;<strong className="text-white">{matchedLocation}</strong>&rdquo;, mas nossa equipe técnica atende a região e fará uma checagem manual de viabilidade na hora para você.
                  </p>
                  <a
                    href={`https://wa.me/5598985271601?text=Olá!%20Gostaria%20de%20verificar%20a%20viabilidade%20técnica%20de%20internet%20Cconect%20para%20o%20endereço:%20${encodeURIComponent(matchedLocation)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors shadow-sm"
                  >
                    Consultar com atendente
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botão de Toggle da Lista Completa */}
          <button
            onClick={() => setShowAllList(!showAllList)}
            className="flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-cyan-400 transition-colors w-fit focus:outline-none"
          >
            {showAllList ? (
              <>
                <EyeOff size={16} /> Ocultar lista completa de povoados
              </>
            ) : (
              <>
                <Eye size={16} /> Ver todos os povoados atendidos (+80)
              </>
            )}
          </button>
        </div>

        {/* Lado Direito - Mapa de Conexões em SVG */}
        <div className="lg:col-span-6 relative h-[350px] sm:h-[400px] bg-white/[0.02] border border-white/[0.06] rounded-3xl overflow-hidden flex items-center justify-center">
          {/* Linha/Grade Holográfica de fundo */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* SVG Map Container */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
            {/* Desenha conexões entre alguns nós vizinhos para parecer uma constelação */}
            <line x1="25%" y1="20%" x2="45%" y2="15%" stroke="#06b6d4" strokeWidth="1" />
            <line x1="45%" y1="15%" x2="70%" y2="25%" stroke="#06b6d4" strokeWidth="1" />
            <line x1="25%" y1="20%" x2="35%" y2="50%" stroke="#06b6d4" strokeWidth="1" />
            <line x1="35%" y1="50%" x2="60%" y2="40%" stroke="#06b6d4" strokeWidth="1" />
            <line x1="60%" y1="40%" x2="70%" y2="25%" stroke="#06b6d4" strokeWidth="1" />
            <line x1="15%" y1="45%" x2="35%" y2="50%" stroke="#06b6d4" strokeWidth="1" />
            <line x1="35%" y1="50%" x2="50%" y2="80%" stroke="#06b6d4" strokeWidth="1" />
            <line x1="60%" y1="40%" x2="80%" y2="55%" stroke="#06b6d4" strokeWidth="1" />
            <line x1="80%" y1="55%" x2="75%" y2="75%" stroke="#06b6d4" strokeWidth="1" />
            <line x1="50%" y1="80%" x2="75%" y2="75%" stroke="#06b6d4" strokeWidth="1" />
          </svg>

          {/* Nós Renderizados */}
          {mapNodes.map((node, i) => (
            <div
              key={i}
              className="absolute group/node flex items-center justify-center cursor-pointer"
              style={{ left: node.x, top: node.y }}
            >
              {/* Círculo Pulsante */}
              <div className="absolute w-6 h-6 rounded-full bg-cyan-400/10 group-hover/node:bg-cyan-400/30 scale-0 group-hover/node:scale-100 transition-all duration-300 animate-ping pointer-events-none" />
              <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#090b1a] relative z-10 transition-transform group-hover/node:scale-125" />
              
              {/* Tooltip com Nome */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/10 px-2.5 py-1.5 rounded-lg text-[10px] font-bold tracking-wide whitespace-nowrap shadow-xl pointer-events-none opacity-0 group-hover/node:opacity-100 transition-all duration-200 translate-y-2 group-hover/node:translate-y-0 flex items-center gap-1">
                <MapPin size={10} className="text-cyan-300" />
                {node.name}
              </div>
            </div>
          ))}

          {/* Central Hub */}
          <div className="absolute left-[38%] top-[35%] flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 relative z-20">
              <MapPin size={12} className="text-white" />
            </div>
            <div className="mt-1 bg-primary text-[8px] font-extrabold uppercase px-2 py-0.5 rounded tracking-widest text-center shadow-md">
              Chapadinha
            </div>
          </div>
        </div>
      </div>

      {/* Lista Completa Expandível de Povoados */}
      <AnimatePresence>
        {showAllList && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto px-6 overflow-hidden mt-12"
          >
            <div className="border-t border-white/10 pt-10">
              <h3 className="text-lg font-bold mb-6 text-center text-cyan-300">
                Lista de Povoados e Localidades Atendidos
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 text-left">
                {povoados.map((povoado, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs hover:bg-white/[0.05] hover:border-white/[0.1] transition-all text-white/90"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    {povoado}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
