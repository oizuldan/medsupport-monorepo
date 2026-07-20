import { SectionHead } from 'components/molecules/msk';
import { useLang } from 'core/i18n';
import React, { FC } from 'react';

/** Ported from reference/medsupportkz/public/site/index.html:1262-1304. */
export const KbSplit: FC = () => {
  const { t } = useLang();

  return (
    <section
      className="section section--tight"
      style={{ background: 'var(--offwhite)' }}
      id="kb"
      data-screen-label="Knowledge Base"
    >
      <div className="container">
        <SectionHead eyebrow={t('kb.eyebrow')} title={t('kb.h2')} lead={t('kb.lead')} />

        <div className="kb-split">
          <a className="kb-tile kb-tile--rose reveal" href="/knowledge-base?track=patient">
            <span className="kb-tile__icon" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round">
                <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
              </svg>
            </span>
            <h3>{t('kb.patient.h')}</h3>
            <p>{t('kb.patient.p')}</p>
            <div className="kb-tile__chips">
              <span>{t('kb.patient.c1')}</span>
              <span>{t('kb.patient.c2')}</span>
              <span>{t('kb.patient.c3')}</span>
            </div>
            <span className="kb-tile__go" style={{ marginTop: 26 }}>
              <span>{t('kb.patient.go')}</span>
              <span className="arr" aria-hidden="true">
                →
              </span>
            </span>
          </a>

          <a className="kb-tile kb-tile--teal reveal" data-delay="1" href="/knowledge-base?track=doctor">
            <span className="kb-tile__icon" aria-hidden="true">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 3v6a6 6 0 0 0 12 0V3" />
                <circle cx="18" cy="17" r="3" />
                <path d="M6 3v0M18 14v0" />
              </svg>
            </span>
            <h3>{t('kb.doctor.h')}</h3>
            <p>{t('kb.doctor.p')}</p>
            <div className="kb-tile__chips">
              <span>{t('kb.doctor.c1')}</span>
              <span>{t('kb.doctor.c2')}</span>
              <span>{t('kb.doctor.c3')}</span>
            </div>
            <span className="kb-tile__go" style={{ marginTop: 26 }}>
              <span>{t('kb.doctor.go')}</span>
              <span className="arr" aria-hidden="true">
                →
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
