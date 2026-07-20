import { Btn, MskLayout, MskMarkdown, PageHero } from 'components';
import { services } from 'core';
import { langFromCookie, useLang } from 'core/i18n';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { Article, ArticleVariables } from './__generated__/Article';
import { queryArticle } from './graphql';
import { InitProps, Props } from './props';

const isNotNull = <T,>(value: T | null): value is T => value !== null;

export const ArticlePage: NextComponentType<ApolloPageContext, InitProps, Props> = (
  props: Props,
) => {
  const { data, lang } = props;
  const router = useRouter();
  const { t } = useLang();
  // SSR-safe locale derived from the cookie-based prop from getInitialProps — must not
  // depend on useLang().lang, which is deliberately 'ru' on first paint (see useLang.ts).
  const pageLang = langFromCookie(lang);

  const content =
    data?.data?.article?.locale === lang
      ? data?.data?.article?.content
      : (data?.data?.article?.localizations?.[0]?.content as string);

  useEffect(() => {
    if ((!content || content.length === 0) && window) {
      const newURL = window.location.href.replace(/article\/.+/, 'articles');
      window.location.assign(newURL);
    }
  }, [content, lang, router]);

  const cms = data?.data;
  const article = cms?.article;
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

  const backButton = cms?.artilcesPageBackButton?.backButton;
  const previewImageUrl = article?.previewImage?.url
    ? article.previewImage.url.startsWith('http')
      ? article.previewImage.url
      : `${process.env.BASE_URL}${article.previewImage.url}`
    : undefined;

  const articleMetaDescription = article?.content
    ? article.content.replace(/[#*_>`[\]()]/g, '').replace(/\s+/g, ' ').trim().substring(0, 200)
    : 'Проверенный материал базы знаний Medsupportkz — на основе доказательной медицины.';

  return (
    <>
      <Head>
        <title>{article?.title ? `${article.title} — Medsupportkz` : 'Medsupportkz'}</title>
        <meta name="keywords" content={article?.title} />
        <meta name="description" content={articleMetaDescription} />
        <meta property="og:title" content={article?.title} />
        <meta property="og:description" content={articleMetaDescription} />
        <meta property="og:image" content="https://medsupport.kz/static/images/logoBig.png" />
        <meta property="og:locale" content={pageLang === 'kz' ? 'kz_KZ' : 'ru_RU'} />
        <meta property="og:locale:alternate" content={pageLang === 'kz' ? 'ru_RU' : 'kz_KZ'} />
        <meta property="og:site_name" content="Medsupportkz" />
        <meta property="og:type" content="article" />
        <meta property="og:article:section" content="medicine" />
      </Head>
      <MskLayout links={headerLinks} footerSections={footerSections}>
        <PageHero
          eyebrow={t('nav.kb')}
          eyebrowVariant="teal"
          title={article?.title ?? ''}
          crumbs={[
            { label: 'Главная', href: '/' },
            { label: t('nav.kb'), href: '/articles' },
            { label: article?.title ?? '' },
          ]}
        />
        {previewImageUrl && (
          <section className="section--tight">
            <div className="container">
              <figure style={{ margin: 0, borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <img
                  src={previewImageUrl}
                  alt={article?.title ?? ''}
                  style={{ width: '100%', display: 'block' }}
                />
              </figure>
            </div>
          </section>
        )}
        <section className="section">
          <div className="container">
            {content && <MskMarkdown>{content}</MskMarkdown>}
            <div style={{ marginTop: 32 }}>
              <Btn href={backButton?.link || '/articles'} variant="ghost">
                {backButton?.title || t('nav.kb')}
              </Btn>
            </div>
          </div>
        </section>
      </MskLayout>
    </>
  );
};

ArticlePage.getInitialProps = async (ctx) => {
  const id = ctx.query?.id?.toString();
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<Article, ArticleVariables>({
    query: queryArticle,
    variables: { id, locale: lang },
  });
  return { data, lang };
};
