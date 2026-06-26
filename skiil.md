# 🎯 SKILL: Criação de Site Nível Pro
**Versão Adaptável por Marca**

---

## 📌 REGRA FUNDAMENTAL

> **Nunca use cores fixas como padrão.** Todas as cores devem ser substituídas pelas cores da marca fornecidas pelo cliente antes de qualquer criação. Solicite sempre: cor primária, cor de acento, cor de fundo e cor de texto.

---

## 🛠️ 1. FRAMEWORK & PLATAFORMA

Use **Framer** para projetos no-code/low-code, ou **Next.js + Framer Motion** para projetos em código puro.

- Inclua **Google Analytics 4** via Google Tag Manager
- Inclua botão de **WhatsApp Business** no formulário de contato
- Use animações via **Framer Motion** com `scroll-triggered appear animations`

---

## 🎨 2. SISTEMA DE CORES (ADAPTÁVEL POR MARCA)

Ao receber uma marca, mapeie as cores nos seguintes papéis:

| Papel | Variável | Descrição |
|---|---|---|
| `--color-bg` | *[fornecida pelo cliente]* | Cor de fundo global |
| `--color-surface` | *[derivada do bg com 4–7% de opacidade]* | Fundo de cards e superfícies elevadas |
| `--color-primary` | *[fornecida pelo cliente]* | Cor principal — botões e destaques |
| `--color-accent` | *[fornecida pelo cliente]* | Acento — segunda linha de headings e ornamentos |
| `--color-text-main` | *[fornecida pelo cliente]* | Texto principal |
| `--color-text-muted` | *[derivada: text-main com 60–80% de opacidade]* | Texto secundário |
| `--color-glow` | *[derivada da primary com 40% de opacidade]* | Glows e efeitos radiais decorativos |
| `--color-border` | *[derivada: branco ou preto com 8–12% de opacidade]* | Bordas sutis |

### Exemplo — Dark Brand
```css
--color-bg:         #0A0A0A;
--color-surface:    rgba(255,255,255,0.05);
--color-primary:    #E05A2B;
--color-accent:     #F0C27F;
--color-text-main:  #FFFFFF;
--color-text-muted: rgba(255,255,255,0.65);
--color-glow:       rgba(224,90,43,0.35);
--color-border:     rgba(255,255,255,0.08);
```

### Exemplo — Light Brand
```css
--color-bg:         #F8F8F5;
--color-surface:    rgba(0,0,0,0.04);
--color-primary:    #1A56DB;
--color-accent:     #F59E0B;
--color-text-main:  #111111;
--color-text-muted: rgba(0,0,0,0.55);
--color-glow:       rgba(26,86,219,0.2);
--color-border:     rgba(0,0,0,0.08);
```

---

## ✍️ 3. TIPOGRAFIA

### Combinação de Fontes

Use sempre **duas famílias** em conjunto nos headings:

| Papel | Tipo | Exemplos | Peso |
|---|---|---|---|
| **Fonte principal** | Sans-serif moderna | Satoshi, Inter, Geist, Plus Jakarta Sans, DM Sans | 400–700 |
| **Fonte de acento** | Serif itálica | Instrument Serif, Playfair Display, Lora, Cormorant | 400 italic |

> A fonte de acento é usada **apenas na segunda linha do heading**, na `--color-accent` da marca.

### Escala Tipográfica

| Nível | Tamanho | Line-Height | Peso |
|---|---|---|---|
| H1 hero | `72–88px` | `1.05–1.1` | 500–600 |
| H2 seção | `44–56px` | `1.15–1.25` | 500 |
| H3 card | `20–24px` | `1.3` | 500–600 |
| Body | `16–18px` | `1.6–1.7` | 400 |
| Label / Pill | `11–13px` | `1` | 400–500 |
| Métrica / Número | `48–64px` | `1` | 700 |

### Técnica do Heading Bicolor

```css
.heading-line-1 {
  font-family: var(--font-principal), sans-serif;
  font-weight: 500;
  color: var(--color-text-main);
}

.heading-line-2 {
  font-family: var(--font-acento), serif;
  font-style: italic;
  font-weight: 400;
  color: var(--color-accent);
}
```

---

## 📐 4. ESPAÇAMENTO

### Seções

```css
.section {
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 40px;
  padding-right: 40px;
}

.section--hero {
  padding-top: 150px;
  padding-bottom: 40px;
}

.section--stats {
  padding-top: 64px;
  padding-bottom: 64px;
}
```

### Grid e Gaps

```css
/* Grid de cards (2 colunas) */
.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

/* Grid de métricas (3–4 colunas) */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
}

/* Flex interno de seção */
.section-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}
```

### Navbar

```css
nav {
  height: 96px;
  background: transparent;
  /* Opcional — glassmorphism */
  backdrop-filter: blur(12px);
  background: rgba(var(--color-bg-rgb), 0.7);
}
```

---

## 🧱 5. COMPONENTES UI

### Pill / Badge de Seção

```css
.section-pill {
  background: rgba(var(--color-text-main-rgb), 0.05);
  backdrop-filter: blur(6px);
  border-radius: 30px;
  padding: 6px 12px;
  font-size: 12px;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
}
```

### Botão CTA Principal

```css
.btn-primary {
  background: var(--color-primary);
  color: var(--color-bg);
  border-radius: 100px;
  padding: 14px 32px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  transition: opacity 0.2s, transform 0.2s;
}

.btn-primary:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}
```

### Botão CTA Secundário (Glassmorphism)

```css
.btn-secondary {
  background: rgba(var(--color-text-main-rgb), 0.05);
  backdrop-filter: blur(12px);
  border-radius: 100px;
  padding: 12px 24px;
  font-size: 14px;
  color: var(--color-text-main);
  border: 1px solid var(--color-border);
}
```

### Cards

```css
.card {
  background: var(--color-surface);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  padding: 28px 32px;
  box-shadow: 0 0 40px rgba(var(--color-glow-rgb), 0.15);
}
```

### Glow Decorativo (Blob de Luz)

```css
.glow-blob {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 100%;
  background: radial-gradient(
    circle,
    rgba(var(--color-glow-rgb), 0.35) 0%,
    transparent 70%
  );
  filter: blur(70px);
  pointer-events: none;
  z-index: 0;
}
```

---

## 🧩 6. ESTRUTURA DE PÁGINA (WIREFRAME PADRÃO)