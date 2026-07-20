import axios from 'axios';
import { Btn } from 'components/molecules/msk';
import { useLang } from 'core/i18n';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Values {
  org: string;
  type: string;
  interest: string;
  contact: string;
  email: string;
  proposal: string;
  hear: string;
  website: string;
}

interface Errors {
  org: boolean;
  type: boolean;
  interest: boolean;
  contact: boolean;
  email: boolean;
  proposal: boolean;
}

const initialValues: Values = {
  org: '',
  type: '',
  interest: '',
  contact: '',
  email: '',
  proposal: '',
  hear: '',
  website: '',
};

const noErrors: Errors = {
  org: false,
  type: false,
  interest: false,
  contact: false,
  email: false,
  proposal: false,
};

/** Ported from reference/medsupportkz/public/site/partner.html:1116-1188. */
export const PartnerForm: FC = () => {
  const { t } = useLang();
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>(noErrors);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const onChange =
    (field: keyof Values) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
    };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    // Honeypot filled — likely a bot, silently no-op.
    if (values.website) return;

    const nextErrors: Errors = {
      org: !values.org.trim(),
      type: !values.type,
      interest: !values.interest,
      contact: !values.contact.trim(),
      email: !EMAIL_RE.test(values.email.trim()),
      proposal: !values.proposal.trim(),
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) {
      setStatus('error');
      setStatusMsg(t('form.error'));
      return;
    }

    setStatus('sending');
    setStatusMsg('');
    try {
      await axios.post('/proxy/contact/partner', values);
      setSubmitted(true);
      setStatus('idle');
    } catch (err) {
      setStatus('error');
      setStatusMsg(axios.isAxiosError(err) && err.response ? t('form.error') : t('form.network'));
    }
  };

  return (
    <>
      <div
        className={`form-card reveal${submitted ? ' is-hidden' : ''}`}
        data-delay="1"
        id="partner-form-card"
      >
        <h2 className="h-md" style={{ marginBottom: 6 }}>
          {t('ptp.form.h')}
        </h2>
        <p className="muted" style={{ fontSize: '.9rem', margin: '0 0 26px' }}>
          {t('ptp.form.required')}
        </p>

        <form id="partner-form" noValidate onSubmit={onSubmit}>
          <div
            aria-hidden="true"
            style={{ position: 'absolute', left: -9999, width: 1, height: 1, overflow: 'hidden' }}
          >
            <label>
              Website
              <input
                id="pf-website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={onChange('website')}
              />
            </label>
          </div>

          <div className={`field${errors.org ? ' has-error' : ''}`}>
            <label htmlFor="pf-org">
              <span>{t('ptp.form.org')}</span> <span className="req">*</span>
            </label>
            <input
              id="pf-org"
              type="text"
              required
              value={values.org}
              onChange={onChange('org')}
              placeholder={t('ptp.ph.org')}
            />
            <span className="err">{t('ptp.err.org')}</span>
          </div>

          <div className="form-grid">
            <div className={`field${errors.type ? ' has-error' : ''}`}>
              <label htmlFor="pf-type">
                <span>{t('ptp.form.type')}</span> <span className="req">*</span>
              </label>
              <select id="pf-type" required value={values.type} onChange={onChange('type')}>
                <option value="">{t('ptp.form.type.opt0')}</option>
                <option value="commercial">{t('ptp.form.type.commercial')}</option>
                <option value="intl">{t('ptp.form.type.intl')}</option>
                <option value="foundation">{t('ptp.form.type.foundation')}</option>
                <option value="media">{t('ptp.form.type.media')}</option>
                <option value="other">{t('ptp.form.type.other')}</option>
              </select>
              <span className="err">{t('ptp.err.type')}</span>
            </div>
            <div className={`field${errors.interest ? ' has-error' : ''}`}>
              <label htmlFor="pf-interest">
                <span>{t('ptp.form.interest')}</span> <span className="req">*</span>
              </label>
              <select id="pf-interest" required value={values.interest} onChange={onChange('interest')}>
                <option value="">{t('ptp.form.interest.opt0')}</option>
                <option value="campaign">{t('ptp.form.interest.campaign')}</option>
                <option value="sponsor">{t('ptp.form.interest.sponsor')}</option>
                <option value="event">{t('ptp.form.interest.event')}</option>
                <option value="research">{t('ptp.form.interest.research')}</option>
                <option value="tech">{t('ptp.form.interest.tech')}</option>
                <option value="other">{t('ptp.form.interest.other')}</option>
              </select>
              <span className="err">{t('ptp.err.interest')}</span>
            </div>
            <div className={`field${errors.contact ? ' has-error' : ''}`}>
              <label htmlFor="pf-contact">
                <span>{t('ptp.form.contact')}</span> <span className="req">*</span>
              </label>
              <input
                id="pf-contact"
                type="text"
                required
                value={values.contact}
                onChange={onChange('contact')}
                placeholder={t('ptp.ph.contact')}
              />
              <span className="err">{t('ptp.err.contact')}</span>
            </div>
            <div className={`field${errors.email ? ' has-error' : ''}`}>
              <label htmlFor="pf-email">
                <span>{t('ptp.form.email')}</span> <span className="req">*</span>
              </label>
              <input
                id="pf-email"
                type="email"
                required
                value={values.email}
                onChange={onChange('email')}
                placeholder={t('ptp.ph.email')}
              />
              <span className="err">{t('ptp.err.email')}</span>
            </div>
          </div>

          <div className={`field${errors.proposal ? ' has-error' : ''}`}>
            <label htmlFor="pf-proposal">
              <span>{t('ptp.form.proposal')}</span> <span className="req">*</span>
            </label>
            <textarea
              id="pf-proposal"
              required
              maxLength={500}
              value={values.proposal}
              onChange={onChange('proposal')}
              placeholder={t('ptp.ph.proposal')}
            />
            <span className="count" id="pf-count">
              {values.proposal.length} / 500
            </span>
            <span className="err">{t('ptp.err.proposal')}</span>
          </div>

          <div className="field">
            <label htmlFor="pf-hear">{t('ptp.form.hear')}</label>
            <input
              id="pf-hear"
              type="text"
              value={values.hear}
              onChange={onChange('hear')}
              placeholder={t('ptp.ph.hear')}
            />
          </div>

          {status === 'error' && statusMsg && (
            <p className="err" role="alert" style={{ display: 'block', margin: '0 0 16px' }}>
              {statusMsg}
            </p>
          )}

          <Btn type="submit" variant="rose" lg block disabled={status === 'sending'}>
            {status === 'sending' ? t('form.sending') : t('ptp.form.submit')}
          </Btn>
        </form>
      </div>

      <div
        className={`form-card reveal${submitted ? '' : ' is-hidden'}`}
        data-delay="1"
        id="partner-ok"
        style={{ gridColumn: '2 / 3' }}
      >
        <div className="confirm">
          <div className="confirm__icon" aria-hidden="true">
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#137E96"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h3 className="h-lg">{t('ptp.ok.h')}</h3>
          <p className="lead" style={{ margin: '14px auto 28px', maxWidth: '46ch' }}>
            {t('ptp.ok.p')}
          </p>
          <Btn href="/" variant="teal" lg>
            {t('ptp.ok.b')}
          </Btn>
        </div>
      </div>
    </>
  );
};
