import { Btn, CtaBand, MskLayout, MskMarkdown, PageHero } from 'components';
import { services } from 'core';
import { langFromCookie, useLang } from 'core/i18n';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import Head from 'next/head';
import React from 'react';

import { AboutUsPageData, AboutUsPageDataVariables } from './__generated__/AboutUsPageData';
import { queryAboutUsPageData } from './graphql';
import { InitProps, Props } from './props';

const isNotNull = <T,>(value: T | null): value is T => value !== null;

export const AboutUsPage: NextComponentType<ApolloPageContext, InitProps, Props> = (
  props: Props,
) => {
  const cms = props.data?.data;
  const { t } = useLang();
  // SSR-safe locale derived from the cookie-based prop from getInitialProps — must not
  // depend on useLang().lang, which is deliberately 'ru' on first paint (see useLang.ts).
  const pageLang = langFromCookie(props.lang);

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

  const content = cms?.aboutUsPage?.content;

  return (
    <>
      <Head>
        <title>Medsupport о нас</title>
        <meta name="keywords" content="О Medsupport" />
        <meta name="description" content={content?.substring(0, 200)} />
        <meta property="og:title" content="Medsupport о нас" />
        <meta property="og:description" content={content?.substring(0, 200)} />
        <meta property="og:image" content="https://medsupport.kz/static/images/logoBig.png" />
        <meta property="og:locale" content={pageLang === 'kz' ? 'kz_KZ' : 'ru_RU'} />
        <meta property="og:locale:alternate" content={pageLang === 'kz' ? 'ru_RU' : 'kz_KZ'} />
        <meta property="og:site_name" content="medsupport" />
      </Head>
      <MskLayout links={headerLinks} footerSections={footerSections}>
        <PageHero
          eyebrow="О фонде"
          eyebrowVariant="rose"
          title="О Medsupportkz"
          crumbs={[{ label: 'Главная', href: '/' }, { label: t('nav.about') }]}
        />

        <section className="section">
          <div className="container">{content && <MskMarkdown>{content}</MskMarkdown>}</div>
        </section>

        <section className="section section--tight">
          <div className="container">
            <CtaBand
              title={t('pt.h2')}
              text={t('pt.lead')}
              button={
                <Btn href="/partner" lg withArrow>
                  {t('pt.cta')}
                </Btn>
              }
            />
          </div>
        </section>
      </MskLayout>
    </>
  );
};

AboutUsPage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<AboutUsPageData, AboutUsPageDataVariables>({
    query: queryAboutUsPageData,
    variables: { locale: lang },
  });
  return { data, lang };
};
