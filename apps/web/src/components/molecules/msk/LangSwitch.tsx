import { useLang } from 'core/i18n';
import Cookies from 'js-cookie';
import React, { CSSProperties, FC } from 'react';

const setLang = (value: 'ru-RU' | 'kk-Cyrl-KZ') => () => {
  Cookies.set('lang', value);
  window.location.assign(window.location.href);
};

/** Shared РУС/ҚАЗ language switch, deduped from MskHeader and MskFooter. */
export const LangSwitch: FC<{ className?: string; style?: CSSProperties }> = ({ className, style }) => {
  const { lang } = useLang();

  return (
    <div className={`lang${className ? ` ${className}` : ''}`} role="group" aria-label="Язык" style={style}>
      <button type="button" className={lang === 'ru' ? 'is-active' : ''} onClick={setLang('ru-RU')}>
        РУС
      </button>
      <button type="button" className={lang === 'kz' ? 'is-active' : ''} onClick={setLang('kk-Cyrl-KZ')}>
        ҚАЗ
      </button>
    </div>
  );
};
