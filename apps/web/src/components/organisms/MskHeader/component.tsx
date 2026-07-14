import { Logo } from 'components/molecules/msk';
import { useHeaderScrolled, useMobileMenu, useScrollProgress } from 'core/hooks';
import { useLang } from 'core/i18n';
import Cookies from 'js-cookie';
import React, { FC } from 'react';

import { Props } from './props';

const staticNav = [
  { href: '/#mission', key: 'nav.about' },
  { href: '/#portfolio', key: 'nav.portfolio' },
  { href: '/knowledge-base', key: 'nav.kb' },
  { href: '/partner', key: 'nav.partner' },
  { href: '/#contact', key: 'nav.contact' },
];

const setLang = (lang: 'ru-RU' | 'kk-Cyrl-KZ') => () => {
  Cookies.set('lang', lang);
  window.location.assign(window.location.href);
};

export const MskHeader: FC<Props> = ({ dark, links }) => {
  const progress = useScrollProgress();
  const scrolled = useHeaderScrolled();
  const { open, toggle, close } = useMobileMenu();
  const { t, lang: activeLang } = useLang();

  const navItems =
    links && links.length
      ? links.map((link, i) => ({
          key: `cms-${i}`,
          href: link.href ?? link.link ?? '#',
          label: link.title ?? link.label ?? '',
        }))
      : staticNav.map((item) => ({ key: item.href, href: item.href, label: t(item.key) }));

  const headerClass = `header${dark ? ' header--dark' : ''}${scrolled ? ' is-scrolled' : ''}`;

  const renderLangSwitch = () => (
    <div className="lang" role="group" aria-label="Язык">
      <button type="button" className={activeLang === 'ru' ? 'is-active' : ''} onClick={setLang('ru-RU')}>
        РУС
      </button>
      <button type="button" className={activeLang === 'kz' ? 'is-active' : ''} onClick={setLang('kk-Cyrl-KZ')}>
        ҚАЗ
      </button>
    </div>
  );

  return (
    <>
      <header className={headerClass} id="top">
        <div className="progress" style={{ width: `${progress}%` }} />
        <div className="container header__inner">
          <Logo />

          <nav className="nav" aria-label="Главное меню">
            {navItems.map((item) => (
              <a key={item.key} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__right">
            {renderLangSwitch()}
            <a className="btn btn--rose" href="/partner">
              {t('cta.partner')}
            </a>
            <button
              className="burger"
              aria-label="Меню"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={toggle}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className="mobile-menu" id="mobile-menu">
        {navItems.map((item) => (
          <a key={item.key} className="m-link" href={item.href} onClick={close}>
            {item.label}
          </a>
        ))}
        <div className="m-foot">
          {renderLangSwitch()}
          <a className="btn btn--rose btn--lg btn--block" href="/partner">
            {t('cta.partner')}
          </a>
        </div>
      </div>
    </>
  );
};
