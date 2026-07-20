import { Btn, SectionHead } from 'components/molecules/msk';
import { useLang } from 'core/i18n';
import React, { FC, useState } from 'react';

const FILTERS = [
  { key: 'all', labelKey: 'pf.f.all' },
  { key: 'vax', labelKey: 'pf.f.vax' },
  { key: 'aware', labelKey: 'pf.f.aware' },
  { key: 'edu', labelKey: 'pf.f.edu' },
  { key: 'emerg', labelKey: 'pf.f.emerg' },
  { key: 'research', labelKey: 'pf.f.research' },
];

/** Ported from reference/medsupportkz/public/site/index.html:1174-1259. */
export const Portfolio: FC = () => {
  const { t } = useLang();
  const [active, setActive] = useState('all');

  const hiddenCls = (cats: string) => (active !== 'all' && !cats.split(' ').includes(active) ? ' is-hidden' : '');

  return (
    <section className="section" id="portfolio" data-screen-label="Portfolio">
      <div className="container">
        <SectionHead eyebrowVariant="rose" eyebrow={t('pf.eyebrow')} title={t('pf.h2')} lead={t('pf.lead')} />

        <div className="filters reveal" role="group" aria-label="Фильтр проектов">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`chip${active === f.key ? ' is-active' : ''}`}
              data-pf-filter={f.key}
              aria-pressed={active === f.key}
              onClick={() => setActive(f.key)}
            >
              {t(f.labelKey)}
            </button>
          ))}
        </div>

        <div className="bento">
          <article
            className={`pcard pcard--fill pcard--teal span-4 reveal${hiddenCls('vax edu')}`}
            data-pf-cat="vax edu"
          >
            <span className="pcard__cat">{t('pf.f.vax')}</span>
            <h3>{t('pf.egu.h')}</h3>
            <p>{t('pf.egu.p')}</p>
            <div className="pcard__tags">
              <span className="tag">UNICEF</span>
              <span className="tag">MoH NCPH</span>
              <span className="tag">USAID</span>
            </div>
          </article>

          <article className={`pcard reveal${hiddenCls('vax aware')}`} data-delay="1" data-pf-cat="vax aware">
            <span className="pcard__cat">{t('pf.f.aware')}</span>
            <h3>{t('pf.bic.h')}</h3>
            <p>{t('pf.bic.p')}</p>
            <div className="pcard__metric">{t('pf.bic.m')}</div>
          </article>

          <article className={`pcard reveal${hiddenCls('aware research')}`} data-pf-cat="aware research">
            <span className="pcard__cat">{t('pf.f.aware')}</span>
            <h3>{t('pf.waaw.h')}</h3>
            <p>{t('pf.waaw.p')}</p>
            <div className="pcard__metric">{t('pf.waaw.m')}</div>
          </article>

          <article
            className={`pcard pcard--fill pcard--rose span-4 tall reveal${hiddenCls('aware research')}`}
            data-delay="1"
            data-pf-cat="aware research"
          >
            <span className="pcard__cat">{t('pf.f.research')}</span>
            <h3>{t('pf.organ.h')}</h3>
            <p>{t('pf.organ.p')}</p>
            <div
              className="ph ph--teal"
              style={{
                marginTop: 'auto',
                height: 96,
                background: 'rgba(255,255,255,.12)',
                backgroundImage:
                  'repeating-linear-gradient(135deg,rgba(255,255,255,.16) 0 2px,transparent 2px 11px)',
              }}
            >
              <span className="ph__tag" style={{ color: '#fff', background: 'rgba(255,255,255,.2)' }}>
                film still
              </span>
            </div>
          </article>

          <article className={`pcard reveal${hiddenCls('edu emerg')}`} data-pf-cat="edu emerg">
            <span className="pcard__cat teal">{t('pf.f.emerg')}</span>
            <h3>{t('pf.aid.h')}</h3>
            <p>{t('pf.aid.p')}</p>
            <div className="pcard__tags">
              <span className="tag">{t('pf.f.edu')}</span>
            </div>
          </article>

          <article className={`pcard span-3 reveal${hiddenCls('edu aware')}`} data-pf-cat="edu aware">
            <span className="pcard__cat teal">{t('pf.f.edu')}</span>
            <h3>{t('pf.unfpa.h')}</h3>
            <p>{t('pf.unfpa.p')}</p>
            <div className="pcard__tags">
              <span className="tag">UNFPA</span>
            </div>
          </article>

          <article className={`pcard span-3 reveal${hiddenCls('research')}`} data-delay="1" data-pf-cat="research">
            <span className="pcard__cat">{t('pf.f.research')}</span>
            <h3>{t('pf.eu.h')}</h3>
            <p>{t('pf.eu.p')}</p>
            <div className="pcard__tags">
              <span className="tag">EU</span>
              <span className="tag">2023</span>
            </div>
          </article>
        </div>

        <div className="reveal" style={{ marginTop: 40 }}>
          <Btn href="/partner" variant="rose" lg withArrow>
            {t('pf.cta')}
          </Btn>
        </div>
      </div>
    </section>
  );
};
