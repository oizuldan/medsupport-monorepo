import { Btn, StatCounter } from 'components/molecules/msk';
import { useParallax } from 'core/hooks';
import { useLang } from 'core/i18n';
import React, { FC } from 'react';

/** Ported from reference/medsupportkz/public/site/index.html:1046-1096. */
export const Hero: FC = () => {
  const { t } = useLang();
  useParallax();

  return (
    <section className="hero" data-screen-label="Hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid-overlay" />
        <div className="hero__blob hero__blob--rose" data-parallax="0.16" />
        <div className="hero__blob hero__blob--teal" data-parallax="-0.08" />
      </div>
      <div className="container hero__inner">
        <p className="eyebrow rise" style={{ color: 'var(--rose)' }}>
          {t('hero.eyebrow')}
        </p>
        <h1 className="display rise">
          <span>{t('hero.h1.a')}</span>
          <br />
          <span>{t('hero.h1.b')}</span>
          <br />
          <span className="accent">{t('hero.h1.accent')}</span>
        </h1>
        <p className="lead hero__sub rise" data-delay="1">
          {t('hero.sub')}
        </p>
        <div className="hero__cta rise" data-delay="2">
          <Btn href="/partner" variant="rose" lg withArrow>
            {t('hero.cta1')}
          </Btn>
          <Btn href="/knowledge-base" variant="ghost-light" lg>
            {t('hero.cta2')}
          </Btn>
        </div>
      </div>

      <div className="container hero__trust">
        <div
          className="hero__bottom"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 40,
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <p className="trust-label" style={{ margin: '0 0 14px' }}>
              {t('hero.trust')}
            </p>
            <div className="trust-logos">
              <span className="lg">UNICEF</span>
              <span className="lg">WHO</span>
              <span className="lg">USAID</span>
              <span className="lg">UNFPA</span>
            </div>
          </div>
          <div className="hero__stats">
            <StatCounter className="hstat" value={2300000} suffix="+" label={t('hero.stat1.l')} />
            <StatCounter className="hstat" value={25} suffix="+" label={t('hero.stat2.l')} />
            <StatCounter className="hstat" value={6} label={t('hero.stat3.l')} />
          </div>
        </div>
      </div>
    </section>
  );
};
