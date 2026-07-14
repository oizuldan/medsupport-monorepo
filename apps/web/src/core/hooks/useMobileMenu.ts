import { useCallback, useEffect, useState } from 'react';

export function useMobileMenu(): { open: boolean; toggle: () => void; close: () => void } {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);
  useEffect(() => {
    const root = document.querySelector('.msk');
    root?.classList.toggle('menu-open', open);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.querySelector('.msk')?.classList.remove('menu-open');
    };
  }, [open, close]);
  return { open, toggle, close };
}
