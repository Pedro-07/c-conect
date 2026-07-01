# Plano de Implementação — Nova Página Arena Cconect

Este plano visa estruturar a criação de uma nova página dedicada para a **Arena Cconect** (sítio, quadras society e espaço de eventos) dentro do projeto Next.js App Router, integrando-a com a Landing Page principal.

## User Review Required

> [!IMPORTANT]
> A nova página será criada no mesmo domínio sob o caminho `/arena` (ex: `cconect.com.br/arena`), aproveitando a Navbar e o Footer globais. Para isso, faremos uma pequena modificação na Navbar para que os links de âncora funcionem de forma universal tanto na página principal quanto na página da Arena.

## Open Questions

> [!WARNING]
> **Por favor, forneça nos comentários:**
> 1. O texto de "Sobre Nós" / Apresentação que o cliente enviou para a Arena Cconect.
> 2. Se houver, informações específicas sobre as quadras (ex: "Duas quadras de futebol society de grama natural/sintética, refletores LED, etc.") e sobre a área de eventos.
> 3. Caso não tenha o texto final em mãos agora, criaremos um rascunho com escrita profissional e refinada que você poderá editar posteriormente no código.

---

## Proposed Changes

### [Core Layout & Navigation]

#### [MODIFY] [Navbar.tsx](file:///c:/git/c-conect/src/components/Navbar.tsx)
- Alterar as âncoras locais do array `navLinks` (como `#beneficios` e `#planos`) para links relativos à raiz (`/#beneficios`, `/#planos`), para que funcionem corretamente a partir de `/arena`.
- Ajustar o link do logo para apontar para `/` em vez de `#`.

---

### [Arena Feature Componentry]

#### [NEW] [arena/page.tsx](file:///c:/git/c-conect/src/app/arena/page.tsx)
- Criar a página principal da Arena contendo:
  - **Hero Section da Arena:** Fundo moderno com estilo natural/esportivo (gradientes verde, ciano e azul), título chamativo e botão para agendamento de quadras/eventos.
  - **Sobre a Arena (Sobre Nós):** Bloco estético para apresentar a história e proposta do complexo esportivo.
  - **Nossos Espaços (Cards):** 
    - *Quadras de Futebol Society* (Gramado, iluminação, vestiários)
    - *Área de Lazer & Confraternização* (Quiosques com churrasqueiras)
    - *Espaço para Eventos* (Aniversários e confraternizações)
  - **Vantagem Cliente Cconect:** Destaque para as condições especiais exclusivas de quem é assinante de internet Cconect.
  - **Galeria / Fotos dos Espaços:** Grid visual moderno com imagens.
  - **Localização e Contato:** Endereço da Arena e botão de WhatsApp focado especificamente em reservas de horários de quadras e eventos.

---

## Verification Plan

### Automated Tests
- Executar `npm run build` para garantir que a nova página e rota compilam perfeitamente sem conflitos de tipagem ou rotas estáticas.

### Manual Verification
- Testar a navegação da Navbar a partir da página principal para a página `/arena` e vice-versa.
- Validar a responsividade e o alinhamento visual da página no mobile e desktop.
