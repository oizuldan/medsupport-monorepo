import { Btn, MskLayout, MskMarkdown, PageHero } from 'components';
import { services } from 'core';
import { langFromCookie } from 'core/i18n';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';

import {
  QuestionPageData,
  QuestionPageData_questionCategory_questions,
  QuestionPageDataVariables,
} from './__generated__/QuestionPageData';
import { queryQuestionPage } from './graphql';
import { InitProps, Props } from './props';

const isNotNull = <T,>(value: T | null): value is T => value !== null;

export const QuestionPage: NextComponentType<ApolloPageContext, InitProps, Props> = (
  props: Props,
) => {
  const { data, lang } = props;
  const router = useRouter();
  // SSR-safe locale derived from the cookie-based prop from getInitialProps — must not
  // depend on useLang().lang, which is deliberately 'ru' on first paint (see useLang.ts).
  const pageLang = langFromCookie(lang);

  const cms = data?.data;
  const category = cms?.questionCategory;
  const useLocalization = category?.locale !== lang;

  const categoryTitle = useLocalization
    ? category?.localizations?.[0]?.title ?? category?.title ?? ''
    : category?.title ?? '';

  const questions = useMemo<ReadonlyArray<QuestionPageData_questionCategory_questions>>(
    () => category?.questions?.filter(isNotNull) ?? [],
    [category?.questions],
  );

  // Resolve the optional [id] route param up front (SSR-safe: router.query is already
  // populated from ctx.query on the server for this getInitialProps page, matching the
  // client's first render), so the deep-linked question is already expanded in the
  // server-rendered HTML instead of only opening after client-side hydration.
  const deepLinkId = router.query.id ? router.query.id.toString() : props.id;

  const [openIds, setOpenIds] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    if (deepLinkId) initial.add(deepLinkId);
    return initial;
  });

  const toggleQuestion = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  useEffect(() => {
    if (!deepLinkId) return;
    const element = document.getElementById(`q-${deepLinkId}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const questionPage = cms?.questionPage;
  const questionMetaDescription = categoryTitle
    ? `Ответы на вопросы по теме «${categoryTitle}» — понятно и на основе доказательной медицины.`
    : 'Ответы на вопросы о здоровье — понятно и на основе доказательной медицины.';

  return (
    <>
      <Head>
        <title>{categoryTitle ? `${categoryTitle} — Medsupportkz` : 'Medsupportkz — Вопросы и ответы'}</title>
        <meta name="keywords" content={categoryTitle} />
        <meta name="description" content={questionMetaDescription} />
        <meta property="og:title" content={categoryTitle} />
        <meta property="og:description" content={questionMetaDescription} />
        <meta property="og:image" content="https://medsupport.kz/static/images/logoBig.png" />
        <meta property="og:locale" content={pageLang === 'kz' ? 'kz_KZ' : 'ru_RU'} />
        <meta property="og:locale:alternate" content={pageLang === 'kz' ? 'ru_RU' : 'kz_KZ'} />
        <meta property="og:site_name" content="Medsupportkz" />
        <meta property="og:type" content="article" />
        <meta property="og:article:section" content="medicine" />
      </Head>
      <MskLayout links={headerLinks} footerSections={footerSections}>
        <PageHero
          eyebrow="Вопросы и ответы"
          eyebrowVariant="teal"
          title={categoryTitle}
          crumbs={[
            { label: 'Главная', href: '/' },
            { label: 'Вопросы', href: '/questions' },
            { label: categoryTitle },
          ]}
        />

        <section className="section">
          <div className="container">
            {questions.map((question) => {
              const isOpen = openIds.has(question.id);
              const questionTitle = useLocalization
                ? question.localizations?.[0]?.title ?? question.title
                : question.title;
              const questionContent = useLocalization
                ? question.localizations?.[0]?.content ?? question.content
                : question.content;

              return (
                <div
                  key={question.id}
                  id={`q-${question.id}`}
                  className={`faq-item${isOpen ? ' is-open' : ''}`}
                  style={{
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius)',
                    padding: '22px 26px',
                    marginBottom: 14,
                    background: '#fff',
                  }}
                >
                  <div
                    className="faq-item__head"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={() => toggleQuestion(question.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleQuestion(question.id);
                      }
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 20,
                      cursor: 'pointer',
                    }}
                  >
                    <h3 className="h-md" style={{ margin: 0 }}>
                      {questionTitle}
                    </h3>
                    <span
                      className="faq-item__icon"
                      aria-hidden="true"
                      style={{
                        flex: 'none',
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        border: '1px solid var(--line)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        lineHeight: 1,
                        color: 'var(--teal-deep)',
                        transition: 'transform .25s ease',
                        transform: isOpen ? 'rotate(45deg)' : 'none',
                      }}
                    >
                      +
                    </span>
                  </div>
                  {isOpen && (
                    <div className="faq-item__body" style={{ paddingTop: 18 }}>
                      <MskMarkdown>{questionContent ?? ''}</MskMarkdown>
                    </div>
                  )}
                </div>
              );
            })}

            <div
              style={{
                display: 'flex',
                gap: 14,
                flexWrap: 'wrap',
                marginTop: 32,
                alignItems: 'center',
              }}
            >
              <Btn href="/questions" variant="ghost">
                {questionPage?.goToAllQuestionsText || 'Все вопросы'}
              </Btn>
              {questionPage?.goToFaqButtonText && (
                <Btn href="/vxn" variant="ghost-teal">
                  {questionPage.goToFaqButtonText}
                </Btn>
              )}
            </div>

            {questionPage?.lastModifiesText && category?.lastModifiedDate && (
              <p style={{ marginTop: 20, color: 'var(--ink-30)', fontSize: '.85rem' }}>
                {questionPage.lastModifiesText}{' '}
                {new Date(category.lastModifiedDate).toLocaleDateString(
                  pageLang === 'kz' ? 'kk-KZ' : 'ru-RU',
                )}
              </p>
            )}

            {questionPage?.sponsor && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  textAlign: 'center',
                  marginTop: 40,
                }}
              >
                <p style={{ fontWeight: 600 }}>{questionPage.sponsor.title}</p>
                <a href={questionPage.sponsor.link} target="_blank" rel="noreferrer">
                  {questionPage.sponsor.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      alt={questionPage.sponsor.image.name}
                      src={
                        questionPage.sponsor.image.url.startsWith('http')
                          ? questionPage.sponsor.image.url
                          : `${process.env.BASE_URL}${questionPage.sponsor.image.url}`
                      }
                      style={{ maxHeight: 48, display: 'block' }}
                    />
                  )}
                </a>
              </div>
            )}
          </div>
        </section>
      </MskLayout>
    </>
  );
};

QuestionPage.getInitialProps = async (ctx) => {
  const id = ctx.query?.id ? ctx.query.id.toString() : undefined;
  const categoryId = ctx.query?.categoryId?.toString();
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<QuestionPageData, QuestionPageDataVariables>({
    query: queryQuestionPage,
    variables: { id: categoryId, locale: lang },
  });
  return { data, id, lang };
};
