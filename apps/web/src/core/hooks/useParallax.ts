import { useEffect } from 'react';

export function useParallax(): void {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('.msk [data-parallax]'));
    const onScroll = () => {
      const y = window.scrollY;
      els.forEach((el) => {
        const rate = parseFloat(el.dataset.parallax || '0');
        el.style.transform = `translate3d(0, ${y * rate}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
