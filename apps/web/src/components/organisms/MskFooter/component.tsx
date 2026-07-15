import { LangSwitch, Logo } from 'components/molecules/msk';
import { useLang } from 'core/i18n';
import React, { FC } from 'react';

import { Props } from './props';

export const MskFooter: FC<Props> = ({ sections }) => {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Logo />
            <p className="footer__tag">{t('ft.tag')}</p>
            <LangSwitch style={{ marginTop: 24, background: 'rgba(255,255,255,.12)' }} />
          </div>

          {sections && sections.length ? (
            sections.map((section, i) => (
              <div className="footer__col" key={`cms-${i}`}>
                <h4>{section.title}</h4>
                {(section.links ?? []).map((link, j) => (
                  <a key={`cms-${i}-${j}`} href={link.href ?? link.link ?? '#'}>
                    {link.title ?? link.label ?? ''}
                  </a>
                ))}
              </div>
            ))
          ) : (
            <>
              <div className="footer__col">
                <h4>{t('ft.nav')}</h4>
                <a href="/#mission">{t('nav.about')}</a>
                <a href="/#portfolio">{t('nav.portfolio')}</a>
                <a href="/partner">{t('nav.partner')}</a>
                <a href="/#contact">{t('nav.contact')}</a>
              </div>
              <div className="footer__col">
                <h4>{t('ft.kb')}</h4>
                <a href="/knowledge-base?track=patient">{t('ft.kb.patient')}</a>
                <a href="/knowledge-base?track=doctor">{t('ft.kb.doctor')}</a>
              </div>
              <div className="footer__col">
                <h4>{t('ft.connect')}</h4>
                <a href="mailto:hello@medsupport.kz">hello@medsupport.kz</a>
                <a href="https://instagram.com">@medsupportkz</a>
                <a href="#">{t('ct.loc')}</a>
              </div>
            </>
          )}
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <span>{t('ft.legal1')}</span>
            <span>
              · <span>{t('ft.legal2')}</span>
            </span>
            <span>
              · <span>{t('ft.legal3')}</span>
            </span>
          </div>
          <div>© 2026 Medsupportkz. {t('ft.rights')}</div>
        </div>
      </div>
    </footer>
  );
};
