import { Btn, MskLayout, PageHero, SectionHead } from 'components';
import { services } from 'core';
import { langFromCookie } from 'core/i18n';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import Head from 'next/head';
import React, { useCallback, useMemo } from 'react';

import { FaqPageData, FaqPageDataVariables } from './__generated__/FaqPageData';
import { queryFaqPage } from './graphql';
import { InitProps, Props } from './props';

const isNotNull = <T,>(value: T | null): value is T => value !== null;

export const VaccinePage: NextComponentType<ApolloPageContext, InitProps, Props> = (props: Props) => {
  const cms = props.data?.data;
  // SSR-safe locale derived from the cookie-based prop from getInitialProps — must not
  // depend on useLang().lang, which is deliberately 'ru' on first paint (see useLang.ts).
  const pageLang = langFromCookie(props.lang);

  const faq = cms?.faq;

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

  const questions = useMemo(
    () => faq?.actualTopics?.questions?.filter(isNotNull) ?? [],
    [faq?.actualTopics?.questions],
  );
  const questionCategories = useMemo(
    () => cms?.questionCategories?.filter(isNotNull) ?? [],
    [cms?.questionCategories],
  );
  const categoryTitleById = useMemo(() => {
    const map = new Map<string, string>();
    questionCategories.forEach((category) => map.set(category.id, category.title));
    return map;
  }, [questionCategories]);

  const transformUri = useCallback(
    (uri?: string | null) => (uri ? (uri.startsWith('http') ? uri : `${process.env.BASE_URL}${uri}`) : ''),
    [],
  );

  const pageTitle = faq?.bannerTitle || 'Вакцинация';
  const vaxMetaDescription =
    (faq?.bannerSubtitle || '').substring(0, 200) ||
    'Всё о вакцинации на основе доказательной медицины: календарь прививок, ответы на частые ' +
      'вопросы и разбор мифов.';

  return (
    <>
      <Head>
        <title>{`Medsupportkz — ${pageTitle}`}</title>
        <meta name="keywords" content="вакцинация, прививки, иммунизация, доказательная медицина" />
        <meta name="description" content={vaxMetaDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={vaxMetaDescription} />
        <meta property="og:image" content="https://medsupport.kz/static/images/logoBig.png" />
        <meta property="og:locale" content={pageLang === 'kz' ? 'kz_KZ' : 'ru_RU'} />
        <meta property="og:locale:alternate" content={pageLang === 'kz' ? 'ru_RU' : 'kz_KZ'} />
        <meta property="og:site_name" content="Medsupportkz" />
        <meta property="og:type" content="article" />
        <meta property="og:article:section" content="medicine" />
        <meta property="og:article:tag" content="вакцина" />
        <meta property="og:article:tag" content="вакцинация" />
        <meta property="og:article:tag" content="прививки" />
      </Head>
      <MskLayout links={headerLinks} footerSections={footerSections}>
        <PageHero
          eyebrow="Вакцинация"
          eyebrowVariant="teal"
          title={pageTitle}
          lead={faq?.bannerSubtitle || undefined}
          crumbs={[{ label: 'Главная', href: '/' }, { label: 'Вакцинация' }]}
        />

        {faq?.bannerImage?.url && (
          <section className="section--tight" style={{ paddingTop: 0 }}>
            <div className="container">
              <figure style={{ margin: 0, borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={transformUri(faq.bannerImage.url)}
                  alt={faq.bannerTitle || ''}
                  style={{ width: '100%', display: 'block' }}
                />
              </figure>
            </div>
          </section>
        )}

        <section className="section">
          <div className="container">
            <SectionHead eyebrow="Актуальное" title={faq?.relevantTopicsText || 'Актуальные темы'} />

            <div className="articles">
              {questions.map((question) => {
                const categoryId = question.question_category?.id;
                return (
                  <a
                    key={question.id}
                    className="acard"
                    href={`/question/${categoryId}/${question.id}`}
                    data-cat={categoryId}
                  >
                    <div className="acard__top">
                      <span className="acard__cat">
                        {(categoryId && categoryTitleById.get(categoryId)) || ''}
                      </span>
                    </div>
                    <h3>{question.title}</h3>
                    <span
                      style={{
                        marginTop: 'auto',
                        fontWeight: 600,
                        fontSize: '.9rem',
                        color: 'var(--teal-deep)',
                      }}
                    >
                      {faq?.readMoreText || 'Читать'} →
                    </span>
                  </a>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
              <Btn href="/questions" variant="ghost-teal">
                {faq?.showAllQuestions || 'Все вопросы'}
              </Btn>
            </div>
          </div>
        </section>

        {faq?.sponsor && (
          <section className="section--tight" style={{ paddingTop: 0 }}>
            <div className="container">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  textAlign: 'center',
                }}
              >
                <p style={{ fontWeight: 600 }}>{faq.sponsor.title}</p>
                <a href={faq.sponsor.link} target="_blank" rel="noreferrer">
                  {faq.sponsor.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      alt={faq.sponsor.image.name}
                      src={transformUri(faq.sponsor.image.url)}
                      style={{ maxHeight: 48, display: 'block' }}
                    />
                  )}
                </a>
              </div>
            </div>
          </section>
        )}
      </MskLayout>
    </>
  );
};

VaccinePage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<FaqPageData, FaqPageDataVariables>({
    query: queryFaqPage,
    variables: { locale: lang },
  });

  return { data, lang };
};
