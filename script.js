/**
 * script.js — La Campesina | Página de Links
 * ─────────────────────────────────────────────────────────────
 * FUNCIONALIDADES:
 *  1. Efeito Ripple ao clicar nos cards
 *  2. Rastreamento de cliques (estrutura pronta — integre a ferramenta que preferir)
 *  3. Respeito à preferência de sistema "prefers-reduced-motion"
 *
 * COMO ADICIONAR ANALYTICS:
 *  Descomente os blocos marcados com "ANALYTICS" abaixo e
 *  substitua pelo código da sua ferramenta (Google Analytics, etc.)
 * ─────────────────────────────────────────────────────────────
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ════════════════════════════════════════════
     CONFIGURAÇÕES
     ════════════════════════════════════════════ */

  // Duração do ripple em milissegundos (ajuste se quiser mais rápido/lento)
  const DURACAO_RIPPLE = 560;

  // Respeita preferência de sistema para reduzir animações
  const prefereReducao = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


  /* ════════════════════════════════════════════
     1. EFEITO RIPPLE — Onda ao clicar nos cards
     ════════════════════════════════════════════ */
  const cards = document.querySelectorAll('.link-card');

  cards.forEach((card) => {
    card.addEventListener('pointerdown', function (evento) {
      // Não anima se o usuário preferir movimento reduzido
      if (prefereReducao) return;

      // Remove ripple anterior se ainda estiver visível
      const rippleExistente = this.querySelector('.ripple');
      if (rippleExistente) rippleExistente.remove();

      // Cria o elemento de ripple
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');

      const rect = this.getBoundingClientRect();
      const tamanho = Math.max(rect.width, rect.height);
      const posX = evento.clientX - rect.left - tamanho / 2;
      const posY = evento.clientY - rect.top  - tamanho / 2;

      ripple.style.width  = `${tamanho}px`;
      ripple.style.height = `${tamanho}px`;
      ripple.style.left   = `${posX}px`;
      ripple.style.top    = `${posY}px`;

      this.appendChild(ripple);

      // Remove o elemento após a animação para não acumular no DOM
      setTimeout(() => {
        if (ripple.parentNode) ripple.remove();
      }, DURACAO_RIPPLE);
    });
  });


  /* ════════════════════════════════════════════
     2. RASTREAMENTO DE CLIQUES
     Estrutura pronta — descomente e adapte
     para integrar com Google Analytics, Meta Pixel,
     ou qualquer outra plataforma.
     ════════════════════════════════════════════ */
  cards.forEach((card) => {
    card.addEventListener('click', function () {
      const textoDoCard = this.querySelector('.link-text')?.textContent?.trim() ?? 'Desconhecido';
      const linkDestino = this.getAttribute('href') ?? '';

      // Log para depuração — remova em produção se não precisar
      console.log(`[La Campesina] Clique: "${textoDoCard}" → ${linkDestino}`);

      /* ── ANALYTICS: Google Analytics 4 (gtag) ──────────────
         Descomente abaixo se tiver o GA4 configurado na página:

         gtag('event', 'link_click', {
           event_category: 'Links',
           event_label:    textoDoCard,
           value:          linkDestino
         });
      ─────────────────────────────────────────────────────── */

      /* ── ANALYTICS: Meta Pixel (Facebook) ──────────────────
         Descomente abaixo se tiver o Meta Pixel configurado:

         fbq('trackCustom', 'LinkClick', {
           label:       textoDoCard,
           destination: linkDestino
         });
      ─────────────────────────────────────────────────────── */
    });
  });


  /* ════════════════════════════════════════════
     3. ACESSIBILIDADE — Foco por teclado
     Garante que o outline de foco apareça apenas
     quando o usuário navega por teclado
     ════════════════════════════════════════════ */
  let navegandoPorTeclado = false;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      navegandoPorTeclado = true;
    }
  });

  document.addEventListener('pointerdown', () => {
    navegandoPorTeclado = false;
    document.body.classList.remove('navegacao-teclado');
  });

  document.addEventListener('focusin', () => {
    if (navegandoPorTeclado) {
      document.body.classList.add('navegacao-teclado');
    }
  });


  /* ════════════════════════════════════════════
     4. ESPAÇO PARA EXPANSÃO
     Adicione aqui qualquer funcionalidade extra:
     - Modal de horários de funcionamento
     - Contagem de visitas
     - Integração com Google Maps
     - Notificações de promoções
     ════════════════════════════════════════════ */

});
