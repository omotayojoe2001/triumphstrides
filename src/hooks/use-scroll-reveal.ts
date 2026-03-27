import { useEffect, useRef } from 'react';

type Direction = 'up' | 'left' | 'right' | 'fade';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  direction: Direction = 'up',
  delay: number = 0
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = '0';
    el.style.transform =
      direction === 'up' ? 'translateY(40px)' :
      direction === 'left' ? 'translateX(-40px)' :
      direction === 'right' ? 'translateX(40px)' :
      'none';
    el.style.transition = `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translate(0)';
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay]);

  return ref;
}
