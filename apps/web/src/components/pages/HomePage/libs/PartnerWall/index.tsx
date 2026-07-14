import { Btn } from 'components/molecules/msk';
import { useLang } from 'core/i18n';
import React, { FC } from 'react';

/** Ported from reference/medsupportkz/public/site/index.html:1337-1357. */
export const PartnerWall: FC = () => {
  const { t } = useLang();

  return (
    <section
      className="section section--tight"
      style={{ background: 'var(--offwhite)' }}
      id="partners"
      data-screen-label="Partners"
    >
      <div className="container">
        <div
          className="section-head reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 24,
            maxWidth: 'none',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p className="eyebrow">{t('pw.eyebrow')}</p>
            <h2 className="h-lg">{t('pw.h2')}</h2>
          </div>
          <Btn href="/partner" variant="ghost" withArrow>
            {t('pw.cta')}
          </Btn>
        </div>
        <div className="logo-wall reveal">
          <div className="cell">UNICEF</div>
          <div className="cell">WHO</div>
          <div className="cell">USAID</div>
          <div className="cell">UNFPA</div>
          <div className="cell">Kaspi.kz</div>
          <div className="cell">MoH NCPH</div>
        </div>
      </div>
    </section>
  );
};
