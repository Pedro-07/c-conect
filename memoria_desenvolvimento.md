# Memória de Desenvolvimento - Cconect Premium Website

Este documento descreve detalhadamente a arquitetura, as tecnologias utilizadas, as decisões de design e a estrutura de implementação desenvolvida para o website premium do provedor de internet fibra óptica **Cconect** (Chapadinha - MA).

---

## 1. Stack Tecnológica e Raciocínio de Escolha

A seleção das tecnologias foi guiada pelo objetivo de entregar uma experiência ultra veloz, moderna e otimizada para conversão, inspirada em grandes marcas globais de tecnologia (como Stripe, Linear, Starlink e Cloudflare).

| Tecnologia | Função no Projeto | Raciocínio Técnico |
| :--- | :--- | :--- |
| **Next.js 15 (App Router)** | Base do Projeto | Framework React com suporte nativo a Server-Side Rendering (SSR) e Static Site Generation (SSG), otimização automática de imagens e carregamento de fontes do Google de forma local. |
| **Tailwind CSS v4** | Estilização Global | Otimizado via variáveis CSS configuradas na raiz (`src/app/globals.css`), facilitando a manutenção e garantindo carregamentos extremamente velozes com CSS enxuto. |
| **TypeScript** | Segurança e Tipagem | Garante detecção precoce de erros em tempo de compilação, tipagem estrita de retornos de animação e de dados de cobertura. |
| **Lenis (Smooth Scroll)** | Rolagem Fluida Premium | Implementado globalmente por meio de um componente wrapper para unificar a experiência do usuário de desktop a um deslizar contínuo e elegante de página. |
| **GSAP (GreenSock) & ScrollTrigger** | Contadores Animados | Responsável pelas animações de métricas numéricas dinâmicas acionadas exatamente no momento em que o elemento entra na área visível da tela (viewport). |
| **Framer Motion** | Microinterações e Transições | Usado nas transições de entrada do Hero, nos efeitos hover tridimensionais com feixes de gradiente nos cards de benefícios e na abertura da lista de cobertura. |
| **Lucide React** | Sistema de Ícones | Biblioteca de ícones vetoriais leves e consistentes com o design minimalista do projeto. |

---

## 2. Paleta de Cores e Identidade Visual (Design System)

Adotou-se uma estética limpa, com contrastes bem definidos e apelo tecnológico moderno, fugindo do design carregado de provedores regionais comuns.

- **Fundo Padrão (`--color-bg`)**: `#FFFFFF` (Limpeza e legibilidade).
- **Azul Primário (`--color-primary`)**: `#1028D8` (Confiança e tecnologia; cor oficial da marca Cconect).
- **Azul Accent/Glow (`--color-accent`)**: `#4C6FFF` (Destaque em gradientes e luzes decorativas).
- **Azul Dark Tech (`bg-[#090b1a]`)**: Usado na seção de cobertura e no footer para dar o contraste "Deep Tech" que valoriza o brilho de nós interconectados.
- **Tipografia Bicolor**:
  - Títulos construídos com a fonte **Plus Jakarta Sans** (sans-serif encorpada).
  - Destques das frases utilizando a elegante **Instrument Serif** em itálico de cor azul primário/ciano, criando contraste gráfico premium.

---

## 3. Implementação dos Componentes e Fluxo de Arquivos

### A. Layout Global & Smooth Scroll
- **`src/app/layout.tsx`**: Configura as fontes do Google Fonts (`Plus Jakarta Sans` e `Instrument Serif`), define metatags SEO (metas de descrição, título responsivo e viewport) e envolve o corpo da página no componente `SmoothScroll`.
- **`src/components/SmoothScroll.tsx`**: Inicializa o **Lenis** no lado do cliente (`'use client'`). Ele expõe o objeto do Lenis na variável global `(window as any).lenis` caso seja necessário sincronizar bibliotecas externas como o GSAP ScrollTrigger.

### B. Cabeçalho Dinâmico
- **`src/components/Navbar.tsx`**: A Navbar inicia totalmente transparente (`bg-transparent`) sobre o fundo azul da seção Hero. Ao rolar a página para além de 50px de altura, ela transiciona suavemente via animação de transição para um efeito **glassmorphism** (`bg-white/80 backdrop-blur border-b border-black/5`) que mantém a leitura perfeita dos links sobre o fundo branco. Possui menu lateral responsivo para celular.

### C. Hero Section (Mockup Tecnológico Animado)
- **`src/components/Hero.tsx`**: O lado esquerdo apresenta a headline bicolor e os botões de ação rápida. O lado direito exibe um mockup em SVG composto por um "Hub Central" que representa a Cconect e quatro nós representando os principais usos (Streaming 4K, Reuniões em Vídeo, Download Ultra e Games). Feixes de luz animados em SVG (`<animateMotion>`) correm continuamente pelas linhas de fibra óptica simbolizando o tráfego veloz de dados.

### D. Métricas Dinâmicas (GSAP)
- **`src/components/Metrics.tsx`**: Exibe dados de qualidade da empresa. A contagem numérica de 0 até o valor final (`99,8%`, `+15.000`, `100%` e `24/7`) é gerenciada pelo GSAP interpolando um objeto de estado e atualizando o `innerText` via referência de DOM (`useRef`), garantindo performance de 60fps sem renderizações desnecessárias do React.

### E. Benefícios & Arena Cconect
- **`src/components/Benefits.tsx`**: Exibe 4 cards responsivos que ativam efeitos de luz interna ao passar o mouse. Abaixo do grid de benefícios principais, é integrado um banner exclusivo sobre a **Arena Cconect** (espaço de eSports parceiro oficial do provedor em Chapadinha) promovendo descontos e vantagens para assinantes com o CTA linkado ao Instagram oficial.

### F. Motor de Busca de Cobertura
- **`src/components/Coverage.tsx`**: Seção desenvolvida para converter leads que têm dúvidas sobre disponibilidade física:
  - O usuário digita o CEP ou Povoado.
  - O script faz a limpeza de strings (normalização de acentos, remoção de caracteres especiais e conversão para caixa baixa).
  - Se for um CEP de Chapadinha (iniciando em `655`), aprova automaticamente.
  - Se for um povoado, busca por correspondência de substring em mais de 30 povoados oficiais mapeados a partir de `cconect.md` (ex: *São Joaquim, Boa Hora, Cajazeiras, Santaninha*).
  - Retorna um card de sucesso ou aviso. Se disponível, oferece o botão com link do WhatsApp pré-formatado com o nome do povoado do cliente para contratação.
  - Contém um mapa conceitual de nós interconectados em SVG e um botão para exibir todos os povoados atendidos em formato de grade expansível.

### G. Planos & Preços
- **`src/components/Plans.tsx`**: Tabela de preços limpa apresentando os planos de 500 Mega, 700 Mega (destacado centralmente com a cor azul primária e tag "Mais Popular" flutuante) e 1 Giga. Todos os cards trazem a lista de benefícios incluídos e direcionam ao WhatsApp correspondente.

### H. Testemunhos (Prova Social)
- **`src/components/Testimonials.tsx`**: Apresenta depoimentos em cards com avaliações de 5 estrelas atribuídas a moradores de diferentes regiões de Chapadinha (Centro, Areal, São Joaquim), reforçando a capilaridade da rede.

### I. CTA Final & Footer Institucional
- **`src/components/Footer.tsx`**: O banner de fechamento estimula a conversão com um grande círculo luminoso em gradiente radial ao fundo. O rodapé traz todas as informações oficiais exigidas (endereço físico em Chapadinha, telefones oficiais, links rápidos e links de redes sociais do provedor e da Arena).

---

## 4. Como as Animações e Ferramentas foram Acopladas (Exemplos de Código)

### Exemplo: Lógica de Contadores Progressivos com GSAP ScrollTrigger
```typescript
// Registra o plugin de scroll
gsap.registerPlugin(ScrollTrigger);

// No useEffect do componente Metrics
const targetObj = { val: 0 };
gsap.to(targetObj, {
  val: 99.8,
  duration: 2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: containerRef.current, // Inicia a contagem apenas quando a seção aparecer na tela
    start: 'top 85%',
    once: true,
  },
  onUpdate: () => {
    if (m1Ref.current) {
      // Substitui o ponto por vírgula para adequação à gramática pt-BR
      m1Ref.current.innerText = targetObj.val.toFixed(1).replace('.', ',');
    }
  },
});
```

### Exemplo: Normalização e Busca de Cobertura no Cliente
```typescript
const cleanQuery = query
  .trim()
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, ''); // Remove acentos como 'ã', 'á', 'ó'

// Busca nos povoados da lista
const match = povoados.find((p) => {
  const cleanP = p.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return cleanP.includes(cleanQuery) || cleanQuery.includes(cleanP);
});
```

---

## 5. Estrutura do Workspace Desenvolvido

```bash
d:\git\c-conect\
├── public/
│   ├── logo.png             # Logotipo oficial da marca
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css      # Configuração do Tailwind v4 e variáveis de cores/fontes
│   │   ├── layout.tsx       # Configuração de SEO, fontes Plus Jakarta / Instrument e Smooth Scroll
│   │   └── page.tsx         # Página principal com a junção ordenada das seções
│   └── components/
│       ├── Navbar.tsx       # Menu fixo com transição glassmorphic
│       ├── Hero.tsx         # Headline bicolor e animações de feixes de dados SVG
│       ├── Metrics.tsx      # Contadores numéricos dinâmicos com GSAP
│       ├── Benefits.tsx     # Diferenciais de latência/velocidade e destaque Arena Cconect
│       ├── Coverage.tsx     # Buscador dinâmico de CEP/Povoados e mapa constelar
│       ├── Plans.tsx        # Tabela de planos e links customizados de WhatsApp
│       ├── Testimonials.tsx # Prova social dos moradores da região
│       └── Footer.tsx       # CTA de encerramento, contatos e redes da marca
├── memoria_desenvolvimento.md # Este documento de memória de cálculo/arquitetura
└── package.json
```

O projeto finaliza em estado impecável de otimização, pronto para publicação e utilização em campanhas de tráfego pago da Cconect.
