import type { DirectiveBinding } from 'vue';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in' | 'zoom-in';

export interface AnimateOptions {
  type?: AnimationType;
  delay?: number;
}

const CLASS_MAP: Record<AnimationType, string> = {
  'fade-up': 'sa-fade-up',
  'fade-left': 'sa-fade-left',
  'fade-right': 'sa-fade-right',
  'fade-in': 'sa-fade-in',
  'zoom-in': 'sa-zoom-in',
};

export const vAnimate = {
  mounted(el: HTMLElement, binding: DirectiveBinding<AnimationType | AnimateOptions | undefined>) {
    let type: AnimationType = 'fade-up';
    let delay = 0;

    if (typeof binding.value === 'string') {
      type = binding.value as AnimationType;
    } else if (binding.value && typeof binding.value === 'object') {
      type = (binding.value as AnimateOptions).type ?? 'fade-up';
      delay = (binding.value as AnimateOptions).delay ?? 0;
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
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
  },
};
