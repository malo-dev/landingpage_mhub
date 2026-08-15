import type { DirectiveBinding } from 'vue';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in' | 'zoom-in' | 'step';

export interface AnimateOptions {
  type?: AnimationType;
  delay?: number;
  /** Rejoue l'animation à chaque entrée/sortie de viewport (effet "timeline" continu). */
  repeat?: boolean;
}

const CLASS_MAP: Record<AnimationType, string> = {
  'fade-up': 'sa-fade-up',
  'fade-left': 'sa-fade-left',
  'fade-right': 'sa-fade-right',
  'fade-in': 'sa-fade-in',
  'zoom-in': 'sa-zoom-in',
  'step': 'sa-step',
};

export const vAnimate = {
  mounted(el: HTMLElement, binding: DirectiveBinding<AnimationType | AnimateOptions | undefined>) {
    let type: AnimationType = 'fade-up';
    let delay = 0;
    let repeat = false;

    if (typeof binding.value === 'string') {
      type = binding.value as AnimationType;
    } else if (binding.value && typeof binding.value === 'object') {
      type = (binding.value as AnimateOptions).type ?? 'fade-up';
      delay = (binding.value as AnimateOptions).delay ?? 0;
      repeat = (binding.value as AnimateOptions).repeat ?? false;
    }

    const animClass = CLASS_MAP[type] ?? 'sa-fade-up';
    el.classList.add(animClass);

    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('sa-in');
            if (!repeat) observer.unobserve(el);
          } else if (repeat) {
            // Sort du viewport : on repart de l'état initial pour rejouer l'entrée au prochain passage.
            el.classList.remove('sa-in');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
  },
};
