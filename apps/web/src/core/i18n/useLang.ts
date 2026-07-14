import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import { dictionary, Lang } from './dictionary';

export function langFromCookie(cookie?: string): Lang {
  return /kk-Cyrl-KZ/.test(cookie ?? '') ? 'kz' : 'ru';
}

export function useLang(): { lang: Lang; t: (key: string) => string } {
  const [lang, setLang] = useState<Lang>('ru');
  useEffect(() => {
    setLang(Cookies.get('lang') === 'kk-Cyrl-KZ' ? 'kz' : 'ru');
  }, []);
  const t = (key: string) => dictionary[lang][key] ?? dictionary.ru[key] ?? key;
  return { lang, t };
}

// Note: first paint is always 'ru' (useEffect runs client-side only), so a brief
// flash to 'kz' is possible before hydration settles for KZ-cookie users. For
// SSR pages where this matters, derive lang from the request cookie header via
// langFromCookie() and pass it down as a prop instead of relying on useLang().
