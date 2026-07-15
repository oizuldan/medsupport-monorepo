import { Eyebrow, MskLayout } from 'components';
import { services } from 'core';
import { useLang } from 'core/i18n';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import Head from 'next/head';
import React from 'react';

import { MainPage, MainPageVariables } from '../HomePage/__generated__/MainPage';
import { queryMainPage } from '../HomePage/graphql';
import { PartnerForm } from './libs/PartnerForm';
import { InitProps, Props } from './props';

const isNotNull = <T,>(value: T | null): value is T => value !== null;

/** Ported from reference/medsupportkz/public/site/partner.html:1041-1193. */
export const PartnerPage: NextComponentType<ApolloPageContext, InitProps, Props> = (props: Props) => {
  const cms = props.data?.data;
  const { t } = useLang();

  const chrome = services.mskChrome(cms);
  const headerLinks = chrome.links?.filter(isNotNull).map((link) => ({
    title: link.title ?? undefined,
    link: link.link ?? undefined,
  }));
  const footerSections = chrome.footerSections?.filter(isNotNull).map((section) => ({
    title: section.title,
    links: section.links?.filter(isNotNull).map((link) => ({
      title: link.title ?? undefined,
      link: link.link ?? undefined,
    })),
  }));

  return (
    <>
      <Head>
        <title>Medsupportkz — Партнёрам</title>
      </Head>
      <MskLayout links={headerLinks} footerSections={footerSections}>
        <div className="container">
          <nav className="crumb" aria-label="Хлебные крошки">
            <a href="/">{t('kbp.crumb.home')}</a>
            <span className="sep">/</span>
            <span>{t('ptp.crumb.this')}</span>
          </nav>
        </div>

        {/* PAGE HERO */}
        <section className="page-hero" data-screen-label="Partner hero">
          <div className="container">
            <Eyebrow variant="rose" className="rise">
              {t('ptp.eyebrow')}
            </Eyebrow>
            <h1 className="display rise" data-delay="1" style={{ fontSize: 'clamp(2.3rem,5vw,4.2rem)' }}>
              {t('ptp.h1')}
            </h1>
            <p className="lead rise" data-delay="2" style={{ marginTop: 22, maxWidth: '56ch' }}>
              {t('ptp.lead')}
            </p>
          </div>
        </section>

        {/* WHY band */}
        <section className="section--tight">
          <div className="container">
            <p className="eyebrow reveal">{t('ptp.why.h')}</p>
            <div className="impact reveal" style={{ background: 'var(--teal-deep)' }}>
              <div className="impact__grid impact__grid--3">
                <div className="istat">
                  <div className="n" style={{ color: '#fff' }}>
                    2 300 000
                    <span className="suffix">+</span>
                  </div>
                  <div className="l">{t('pt.r1.h')}</div>
                  <p style={{ color: 'rgba(255,255,255,.72)', fontSize: '.92rem', margin: '12px 0 0' }}>
                    {t('pt.r1.p')}
                  </p>
                </div>
                <div className="istat">
                  <div className="n" style={{ color: '#fff' }}>
                    6
                  </div>
                  <div className="l">{t('pt.r2.h')}</div>
                  <p style={{ color: 'rgba(255,255,255,.72)', fontSize: '.92rem', margin: '12px 0 0' }}>
                    {t('pt.r2.p')}
                  </p>
                </div>
                <div className="istat">
                  <div className="n" style={{ color: '#fff' }}>
                    100
                    <span className="suffix">%</span>
                  </div>
                  <div className="l">{t('pt.r3.h')}</div>
                  <p style={{ color: 'rgba(255,255,255,.72)', fontSize: '.92rem', margin: '12px 0 0' }}>
                    {t('pt.r3.p')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUDIENCES + FORM */}
        <section className="section" style={{ paddingTop: 'clamp(32px,4vw,56px)' }}>
          <div className="container">
            <div
              className="partner-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.85fr 1.15fr',
                gap: 'clamp(28px,4vw,64px)',
                alignItems: 'start',
              }}
            >
              {/* left: audiences */}
              <div>
                <h2 className="h-lg reveal" style={{ marginBottom: 24 }}>
                  {t('ptp.aud.h')}
                </h2>

                <div
                  className="reveal"
                  style={{
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius)',
                    padding: 26,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: 'var(--pink-wash)',
                      display: 'grid',
                      placeItems: 'center',
                      marginBottom: 16,
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C75B8E"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h0M9 13h0M9 17h0M15 9h0M15 13h0M15 17h0" />
                    </svg>
                  </div>
                  <h3 className="h-md" style={{ color: 'var(--rose-deep)', marginBottom: 8 }}>
                    {t('ptp.aud.org.h')}
                  </h3>
                  <p className="muted" style={{ margin: 0, fontSize: '.98rem' }}>
                    {t('ptp.aud.org.p')}
                  </p>
                </div>

                <div
                  className="reveal"
                  data-delay="1"
                  id="specialists"
                  style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius)', padding: 26 }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: 'var(--teal-wash)',
                      display: 'grid',
                      placeItems: 'center',
                      marginBottom: 16,
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#137E96"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21a8 8 0 0 1 16 0" />
                    </svg>
                  </div>
                  <h3 className="h-md" style={{ color: 'var(--teal-deep)', marginBottom: 8 }}>
                    {t('ptp.aud.ind.h')}
                  </h3>
                  <p className="muted" style={{ margin: 0, fontSize: '.98rem' }}>
                    {t('ptp.aud.ind.p')}
                  </p>
                </div>
              </div>

              {/* right: form + confirmation */}
              <PartnerForm />
            </div>
          </div>
        </section>
      </MskLayout>
    </>
  );
};

PartnerPage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<MainPage, MainPageVariables>({
    query: queryMainPage,
    variables: { locale: lang },
  });

  return { data, lang };
};
