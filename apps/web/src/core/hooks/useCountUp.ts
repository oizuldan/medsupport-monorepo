import { RefObject, useEffect } from 'react';

export function useCountUp(
  ref: RefObject<HTMLElement>,
  target: number,
  opts: { duration?: number } = {},
): void {
  const duration = opts.duration ?? 1600;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fmt = (n: number) => Math.round(n).toLocaleString('ru-RU').replace(/,/g, ' ');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = fmt(target); return;
    }
    let raf = 0; let start = 0;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const tick = (t: number) => {
        if (!start) start = t;
        const p = Math.min((t - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [ref, target, duration]);
}
