import { useEffect, useState } from 'react';

/**
 * True once a dark (hero-overlay) header has scrolled past the dark hero.
 *
 * The dark header is transparent with white text, which is only legible over the
 * hero. Past it the page turns white, so the header must drop back to its normal
 * light treatment instead of going invisible.
 */
export function useHeaderSolid(enabled: boolean): boolean {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    if (!enabled) return undefined;

    // Measured on mount/resize only — reading offsetHeight per scroll event forces a reflow.
    let limit = 0;
    const measure = () => {
      const hero = document.querySelector<HTMLElement>('.msk .hero');
      limit = hero ? hero.offsetHeight - 72 : window.innerHeight * 0.7;
    };
    const onScroll = () => setSolid(window.scrollY > limit);
    const onResize = () => {
      measure();
      onScroll();
    };

    onResize();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [enabled]);

  return solid;
}
