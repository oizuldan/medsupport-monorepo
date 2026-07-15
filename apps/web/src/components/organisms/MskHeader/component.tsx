import { LangSwitch, Logo } from 'components/molecules/msk';
import { useHeaderScrolled, useMobileMenu, useScrollProgress } from 'core/hooks';
import { useLang } from 'core/i18n';
import React, { FC } from 'react';

import { Props } from './props';

const staticNav = [
  { href: '/#mission', key: 'nav.about' },
  { href: '/#portfolio', key: 'nav.portfolio' },
  { href: '/knowledge-base', key: 'nav.kb' },
  { href: '/partner', key: 'nav.partner' },
  { href: '/#contact', key: 'nav.contact' },
];

export const MskHeader: FC<Props> = ({ dark, links }) => {
  const progress = useScrollProgress();
  const scrolled = useHeaderScrolled();
  const { open, toggle, close } = useMobileMenu();
  const { t } = useLang();

  const navItems =
    links && links.length
      ? links.map((link, i) => ({
          key: `cms-${i}`,
          href: link.href ?? link.link ?? '#',
          label: link.title ?? link.label ?? '',
        }))
      : staticNav.map((item) => ({ key: item.href, href: item.href, label: t(item.key) }));

  const headerClass = `header${dark ? ' header--dark' : ''}${scrolled ? ' is-scrolled' : ''}`;

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
            <LangSwitch />
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
          <LangSwitch />
          <a className="btn btn--rose btn--lg btn--block" href="/partner">
            {t('cta.partner')}
          </a>
        </div>
      </div>
    </>
  );
};
