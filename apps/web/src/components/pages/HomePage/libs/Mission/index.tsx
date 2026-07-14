import { SectionHead } from 'components/molecules/msk';
import { useLang } from 'core/i18n';
import React, { FC } from 'react';

/** Ported from reference/medsupportkz/public/site/index.html:1099-1130. */
export const Mission: FC = () => {
  const { t } = useLang();

  return (
    <section className="section" id="mission" data-screen-label="Mission">
      <div className="container">
        <SectionHead eyebrowVariant="rose" eyebrow={t('mission.eyebrow')} title={t('mission.h2')} lead={t('mission.lead')} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr',
            gap: 'clamp(28px,5vw,72px)',
            alignItems: 'end',
          }}
        >
          <div className="pillars">
            <div className="pillar pillar--rose reveal">
              <div className="pillar__no">{t('mission.p1.no')}</div>
              <h3 className="h-md">{t('mission.p1.h')}</h3>
              <p className="muted">{t('mission.p1.p')}</p>
            </div>
            <div className="pillar pillar--teal reveal" data-delay="1">
              <div className="pillar__no">{t('mission.p2.no')}</div>
              <h3 className="h-md">{t('mission.p2.h')}</h3>
              <p className="muted">{t('mission.p2.p')}</p>
            </div>
            <div className="pillar pillar--rose reveal" data-delay="2">
              <div className="pillar__no">{t('mission.p3.no')}</div>
              <h3 className="h-md">{t('mission.p3.h')}</h3>
              <p className="muted">{t('mission.p3.p')}</p>
            </div>
          </div>
          <blockquote className="pullquote reveal" data-delay="2" style={{ margin: 0 }}>
            <span>{t('mission.quote')}</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
