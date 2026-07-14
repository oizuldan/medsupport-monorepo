import { Btn, StatCounter } from 'components/molecules/msk';
import { useLang } from 'core/i18n';
import React, { FC } from 'react';

/** Ported from reference/medsupportkz/public/site/index.html:1133-1171. */
export const Impact: FC = () => {
  const { t } = useLang();

  return (
    <section
      className="section section--tight"
      style={{ background: 'var(--pink-wash)' }}
      id="impact"
      data-screen-label="Impact"
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
          <div style={{ maxWidth: 620 }}>
            <p className="eyebrow">{t('impact.eyebrow')}</p>
            <h2 className="h-xl">{t('impact.h2')}</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              {t('impact.lead')}
            </p>
          </div>
          <Btn href="#portfolio" variant="ghost-teal" withArrow>
            {t('impact.cta')}
          </Btn>
        </div>

        <div className="impact reveal">
          <div className="impact__grid">
            <StatCounter className="istat" value={42} suffix="+" label={t('impact.s1.l')} />
            <StatCounter className="istat" value={2300000} suffix="+" label={t('impact.s2.l')} />
            <StatCounter className="istat" value={640} suffix="+" label={t('impact.s3.l')} />
            <StatCounter className="istat" value={6} label={t('impact.s4.l')} />
            <StatCounter className="istat" value={25} suffix="+" label={t('impact.s5.l')} />
          </div>
        </div>
      </div>
    </section>
  );
};
