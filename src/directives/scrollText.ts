import type { Directive } from 'vue';

/**
 * v-scroll-text — découpe le texte de l'élément en mots et les révèle
 * progressivement (opacité + flou) au fil du scroll, au lieu d'un fade-in
 * statique. La progression est recalculée en continu tant que l'élément
 * est visible (un seul listener de scroll actif à la fois, throttlé par rAF).
 */

function computeProgress(el: HTMLElement): number {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  // Le texte commence à se révéler quand son haut atteint 85% de la hauteur
  // d'écran, et termine sa révélation vers 35% (zone de lecture confortable).
  const start = vh * 0.85;
  const end = vh * 0.35;
  const raw = (start - rect.top) / (start - end);
  return Math.min(1, Math.max(0, raw));
}

export const vScrollText: Directive<HTMLElement> = {
  mounted(el) {
    const words = (el.textContent ?? '').trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return;

    el.textContent = '';
    el.classList.add('scroll-text');
    const spans = words.map((word) => {
      const span = document.createElement('span');
      span.className = 'sw';
      span.textContent = word;
      el.appendChild(span);
      el.appendChild(document.createTextNode(' '));
      return span;
    });

    let ticking = false;
    const update = () => {
      ticking = false;
      const progress = computeProgress(el);
      const revealed = Math.round(progress * spans.length);
      spans.forEach((span, i) => {
        span.classList.toggle('sw-in', i < revealed);
      });
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    // N'écoute le scroll que pendant que l'élément est proche du viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries[0]?.isIntersecting;
        if (active) {
          update();
          window.addEventListener('scroll', onScroll, { passive: true });
        } else {
          window.removeEventListener('scroll', onScroll);
        }
      },
      { rootMargin: '35% 0px 35% 0px' }
    );
    observer.observe(el);
  },
};
