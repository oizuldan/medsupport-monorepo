import axios from 'axios';
import { Btn } from 'components/molecules/msk';
import { useLang } from 'core/i18n';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Values {
  name: string;
  email: string;
  message: string;
  company: string;
}

interface Errors {
  name: boolean;
  email: boolean;
  message: boolean;
}

const initialValues: Values = { name: '', email: '', message: '', company: '' };
const noErrors: Errors = { name: false, email: false, message: false };

/** Ported from reference/medsupportkz/public/site/index.html:1360-1413. */
export const Contact: FC = () => {
  const { t } = useLang();
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>(noErrors);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const onChange = (field: keyof Values) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    // Honeypot filled — likely a bot, silently no-op.
    if (values.company) return;

    const nextErrors: Errors = {
      name: !values.name.trim(),
      email: !EMAIL_RE.test(values.email.trim()),
      message: !values.message.trim(),
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email || nextErrors.message) {
      setStatus('error');
      setStatusMsg(t('form.error'));
      return;
    }

    setStatus('sending');
    setStatusMsg('');
    try {
      await axios.post('/api/contact/message', values);
      setSubmitted(true);
      setStatus('idle');
    } catch (err) {
      setStatus('error');
      setStatusMsg(axios.isAxiosError(err) && err.response ? t('form.error') : t('form.network'));
    }
  };

  return (
    <section className="section" id="contact" data-screen-label="Contact">
      <div className="container">
        <div
          className="contact-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 'clamp(32px,5vw,80px)', alignItems: 'start' }}
        >
          <div className="reveal">
            <p className="eyebrow eyebrow--rose">{t('ct.eyebrow')}</p>
            <h2 className="h-xl">{t('ct.h2')}</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              {t('ct.lead')}
            </p>
            <div style={{ marginTop: 34, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div>
                <p className="trust-label" style={{ color: 'var(--ink-30)' }}>
                  {t('ct.or')}
                </p>
                <a href="mailto:hello@medsupport.kz" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--teal-deep)' }}>
                  hello@medsupport.kz
                </a>
              </div>
              <div>
                <p className="trust-label" style={{ color: 'var(--ink-30)' }}>
                  {t('ct.social')}
                </p>
                <a href="https://instagram.com" style={{ fontSize: '1.1rem', fontWeight: 500 }}>
                  @medsupportkz
                </a>
              </div>
              <div>
                <p className="trust-label" style={{ color: 'var(--ink-30)' }}>
                  Astana
                </p>
                <p style={{ margin: 0, fontWeight: 500 }}>{t('ct.loc')}</p>
              </div>
            </div>
          </div>

          <div className="form-card reveal" data-delay="1">
            {!submitted && (
              <form id="contact-form" noValidate onSubmit={onSubmit}>
                <div className={`field${errors.name ? ' has-error' : ''}`}>
                  <label htmlFor="cf-name">
                    <span>{t('ct.name')}</span> <span className="req">*</span>
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    required
                    value={values.name}
                    onChange={onChange('name')}
                    placeholder={t('ct.ph.name')}
                  />
                  <span className="err">—</span>
                </div>
                <div className={`field${errors.email ? ' has-error' : ''}`}>
                  <label htmlFor="cf-email">
                    <span>{t('ct.email')}</span> <span className="req">*</span>
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    required
                    value={values.email}
                    onChange={onChange('email')}
                    placeholder={t('ct.ph.email')}
                  />
                  <span className="err">—</span>
                </div>
                <div className={`field${errors.message ? ' has-error' : ''}`}>
                  <label htmlFor="cf-msg">
                    <span>{t('ct.msg')}</span> <span className="req">*</span>
                  </label>
                  <textarea
                    id="cf-msg"
                    required
                    value={values.message}
                    onChange={onChange('message')}
                    placeholder={t('ct.ph.msg')}
                  />
                  <span className="err">—</span>
                </div>
                <div
                  aria-hidden="true"
                  style={{ position: 'absolute', left: -9999, width: 1, height: 1, overflow: 'hidden' }}
                >
                  <label>
                    Company
                    <input
                      id="cf-company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={values.company}
                      onChange={onChange('company')}
                    />
                  </label>
                </div>
                {status === 'error' && statusMsg && (
                  <p className="err" role="alert" style={{ display: 'block', margin: '0 0 16px' }}>
                    {statusMsg}
                  </p>
                )}
                <Btn type="submit" variant="teal" lg block disabled={status === 'sending'}>
                  {status === 'sending' ? t('form.sending') : t('ct.send')}
                </Btn>
              </form>
            )}
            <div id="contact-ok" className={`confirm${submitted ? '' : ' is-hidden'}`}>
              <div className="confirm__icon" aria-hidden="true">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#137E96" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 className="h-md">{t('ct.ok.h')}</h3>
              <p className="muted" style={{ marginTop: 10 }}>
                {t('ct.ok.p')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
