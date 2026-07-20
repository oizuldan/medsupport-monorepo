import { Btn } from 'components/molecules/msk';
import { useLang } from 'core/i18n';
import React, { FC } from 'react';

/** Ported from reference/medsupportkz/public/site/index.html:1307-1334. */
export const PartnerTeaser: FC = () => {
  const { t } = useLang();

  return (
    <section className="section" id="partner" data-screen-label="Partner teaser">
      <div className="container">
        <div className="why">
          <div className="reveal">
            <p className="eyebrow eyebrow--rose">{t('pt.eyebrow')}</p>
            <h2 className="h-xl">{t('pt.h2')}</h2>
            <p className="lead" style={{ marginTop: 18, marginBottom: 32 }}>
              {t('pt.lead')}
            </p>
            <Btn href="/partner" variant="rose" lg withArrow>
              {t('pt.cta')}
            </Btn>
          </div>
          <div className="why-reasons reveal" data-delay="1">
            <div className="why-reason">
              <div className="why-reason__n">01</div>
              <div>
                <h3>{t('pt.r1.h')}</h3>
                <p>{t('pt.r1.p')}</p>
              </div>
            </div>
            <div className="why-reason">
              <div className="why-reason__n">02</div>
              <div>
                <h3>{t('pt.r2.h')}</h3>
                <p>{t('pt.r2.p')}</p>
              </div>
            </div>
            <div className="why-reason">
              <div className="why-reason__n">03</div>
              <div>
                <h3>{t('pt.r3.h')}</h3>
                <p>{t('pt.r3.p')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
