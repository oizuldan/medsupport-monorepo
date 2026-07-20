import { useEffect, useState } from 'react';

export function useFloatingCta(afterSelector = '.hero'): boolean {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const anchor = document.querySelector(`.msk ${afterSelector}`);
    const onScroll = () => {
      if (!anchor) { setShow(window.scrollY > 600); return; }
      const b = anchor.getBoundingClientRect().bottom;
      setShow(b < 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [afterSelector]);
  return show;
}
