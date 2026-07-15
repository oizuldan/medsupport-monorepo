import { MskLayout, PageHero } from 'components';
import { services } from 'core';
import { langFromCookie, useLang } from 'core/i18n';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import Head from 'next/head';
import React, { useCallback, useMemo, useState } from 'react';

import { QuestionsPageData, QuestionsPageDataVariables } from './__generated__/QuestionsPageData';
import { queryQuestionsPage } from './graphql';
import { InitProps, Props } from './props';

const isNotNull = <T,>(value: T | null): value is T => value !== null;

export const QuestionsPage: NextComponentType<ApolloPageContext, InitProps, Props> = (props: Props) => {
  const cms = props.data?.data;
  const { t } = useLang();
  // SSR-safe locale derived from the cookie-based prop from getInitialProps — must not
  // depend on useLang().lang, which is deliberately 'ru' on first paint (see useLang.ts).
  const pageLang = langFromCookie(props.lang);

  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');

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

  const questionCategories = useMemo(
    () => cms?.questionCategories?.filter(isNotNull) ?? [],
    [cms?.questionCategories],
  );
  const questions = useMemo(() => cms?.questions?.filter(isNotNull) ?? [], [cms?.questions]);

  const categoryTitleById = useMemo(() => {
    const map = new Map<string, string>();
    questionCategories.forEach((category) => map.set(category.id, category.title));
    return map;
  }, [questionCategories]);

  const q = query.trim().toLowerCase();
  const matchesFilters = useCallback(
    (title: string, categoryId?: string) =>
      (activeCategory === 'all' || categoryId === activeCategory) &&
      (!q || title.toLowerCase().includes(q)),
    [activeCategory, q],
  );
  const hasVisibleQuestions = questions.some((question) =>
    matchesFilters(question.title, question.question_category?.id),
  );

  const transformUri = useCallback(
    (uri?: string | null) => (uri ? (uri.startsWith('http') ? uri : `${process.env.BASE_URL}${uri}`) : ''),
    [],
  );

  const allQuestionsPage = cms?.allQuestionsPage;
  const pageTitle = allQuestionsPage?.allQuestionText || 'Вопросы и ответы';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="keywords" content="Вопросы про вакцинацию" />
        <meta
          name="description"
          content="Здесь вы можете найти все интересующие вас вопросы про вакцинацию Covid-19"
        />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content="Здесь вы можете найти все интересующие вас вопросы про вакцинацию Covid-19"
        />
        <meta property="og:image" content="https://medsupport.kz/static/images/logoBig.png" />
        <meta property="og:locale" content={pageLang === 'kz' ? 'kz_KZ' : 'ru_RU'} />
        <meta property="og:locale:alternate" content={pageLang === 'kz' ? 'ru_RU' : 'kz_KZ'} />
        <meta property="og:site_name" content="medsupport" />
        <meta property="og:type" content="article" />
        <meta property="og:article:section" content="medicine" />
      </Head>
      <MskLayout links={headerLinks} footerSections={footerSections}>
        <PageHero
          eyebrow="Вопросы"
          eyebrowVariant="rose"
          title={pageTitle}
          crumbs={[{ label: 'Главная', href: '/' }, { label: 'Вопросы' }]}
        />

        <section className="section--tight" style={{ paddingTop: 8 }}>
          <div className="container">
            <div className="searchbar">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="search"
                aria-label="Поиск"
                placeholder="Поиск по вопросам…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="filters" role="group" aria-label="Фильтр категорий">
              <button
                type="button"
                className={`chip${activeCategory === 'all' ? ' is-active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                Все
              </button>
              {questionCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`chip${activeCategory === category.id ? ' is-active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.title}
                </button>
              ))}
            </div>

            <div className="articles" style={{ marginTop: 32 }}>
              {questions.map((question) => {
                const categoryId = question.question_category?.id;
                const visible = matchesFilters(question.title, categoryId);
                return (
                  <a
                    key={question.id}
                    className={`acard${visible ? '' : ' is-hidden'}`}
                    href={`/question/${categoryId}/${question.id}`}
                    data-cat={categoryId}
                  >
                    <div className="acard__top">
                      <span className="acard__cat">
                        {(categoryId && categoryTitleById.get(categoryId)) || ''}
                      </span>
                    </div>
                    <h3>{question.title}</h3>
                  </a>
                );
              })}
            </div>

            <p className={`no-results${hasVisibleQuestions ? '' : ' is-show'}`}>{t('kbp.none')}</p>
          </div>
        </section>

        {allQuestionsPage?.sponsor && (
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
                <p style={{ fontWeight: 600 }}>{allQuestionsPage.sponsor.title}</p>
                <a href={allQuestionsPage.sponsor.link} target="_blank" rel="noreferrer">
                  {allQuestionsPage.sponsor.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      alt={allQuestionsPage.sponsor.image.name}
                      src={transformUri(allQuestionsPage.sponsor.image.url)}
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

QuestionsPage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<QuestionsPageData, QuestionsPageDataVariables>({
    query: queryQuestionsPage,
    variables: { locale: lang },
  });

  return { data, lang };
};
