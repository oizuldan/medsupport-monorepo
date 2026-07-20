import { Btn, MskLayout, PageHero, SectionHead } from 'components';
import { services } from 'core';
import { langFromCookie } from 'core/i18n';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import Head from 'next/head';
import React from 'react';

import {
  ResistancePageData,
  ResistancePageDataVariables,
} from './__generated__/ResistancePageData';
import { queryResistancePageData } from './graphql';
import { InitProps, Props } from './props';

const isNotNull = <T,>(value: T | null): value is T => value !== null;

export const ResistancePage: NextComponentType<ApolloPageContext, InitProps, Props> = (
  props: Props,
) => {
  const cms = props.data?.data;
  // SSR-safe locale derived from the cookie-based prop from getInitialProps — see
  // ArticlesPage/component.tsx for why this must not depend on useLang().lang.
  const pageLang = langFromCookie(props.lang);

  const resistancePage = cms?.resistancePage;
  const articlesGroup = resistancePage?.ResistanceArticles;
  const videosGroup = resistancePage?.Videos;

  const chrome = services.mskChrome(cms);
  const headerLinks = chrome.links
    ?.filter(isNotNull)
    .map((link) => ({ title: link.title ?? undefined, link: link.link ?? undefined }));
  const footerSections = chrome.footerSections?.filter(isNotNull).map((section) => ({
    title: section.title,
    links: section.links?.filter(isNotNull).map((link) => ({
      title: link.title ?? undefined,
      link: link.link ?? undefined,
    })),
  }));

  const amrMetaDescription =
    'Устойчивость к антибиотикам: почему она возникает, чем опасна и как её сдержать. ' +
    'Материалы Medsupportkz на основе доказательной медицины.';

  return (
    <>
      <Head>
        <title>{`Medsupportkz — ${resistancePage?.title || 'Устойчивость к антибиотикам'}`}</title>
        <meta
          name="keywords"
          content="антибиотикорезистентность, устойчивость к антибиотикам, WAAW, доказательная медицина"
        />
        <meta name="description" content={amrMetaDescription} />
        <meta property="og:title" content={resistancePage?.title} />
        <meta property="og:description" content={amrMetaDescription} />
        <meta property="og:image" content="https://medsupport.kz/static/images/logoBig.png" />
        <meta property="og:locale" content={pageLang === 'kz' ? 'kz_KZ' : 'ru_RU'} />
        <meta property="og:locale:alternate" content={pageLang === 'kz' ? 'ru_RU' : 'kz_KZ'} />
        <meta property="og:site_name" content="Medsupportkz" />
      </Head>
      <MskLayout links={headerLinks} footerSections={footerSections}>
        <PageHero
          eyebrow="Общественное здоровье"
          eyebrowVariant="teal"
          title={resistancePage?.title || 'Устойчивость к антибиотикам'}
          crumbs={[{ label: 'Главная', href: '/' }, { label: 'Антибиотикорезистентность' }]}
        />

        {articlesGroup && (articlesGroup.articles?.length ?? 0) > 0 && (
          <section className="section--tight">
            <div className="container">
              <SectionHead eyebrow="Материалы" title={articlesGroup.title} />

              <div className="articles">
                {articlesGroup.articles?.map(
                  (article) =>
                    article && (
                      <a key={article.id} className="acard" href={`/article/${article.id}`}>
                        <div className="acard__top">
                          <span className="acard__cat">Материал</span>
                        </div>
                        <h3>{article.title}</h3>
                        {article.description && <p>{article.description}</p>}
                      </a>
                    ),
                )}
              </div>

              {articlesGroup.buttonText && (
                <div style={{ marginTop: 32, textAlign: 'center' }}>
                  <Btn href="/articles" variant="ghost-teal">
                    {articlesGroup.buttonText}
                  </Btn>
                </div>
              )}
            </div>
          </section>
        )}

        {videosGroup && (videosGroup.YoutubeVideos?.length ?? 0) > 0 && (
          <section className="section--tight">
            <div className="container">
              <h2 className="h-lg" style={{ marginBottom: 32 }}>
                {videosGroup.title}
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: 'clamp(16px, 2vw, 24px)',
                }}
              >
                {videosGroup.YoutubeVideos?.map(
                  (video) =>
                    video?.videoId && (
                      <div
                        key={video.videoId}
                        style={{
                          position: 'relative',
                          aspectRatio: '16/9',
                          borderRadius: 'var(--radius)',
                          overflow: 'hidden',
                          boxShadow: 'var(--shadow-sm)',
                        }}
                      >
                        <iframe
                          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                          src={`https://www.youtube.com/embed/${video.videoId}`}
                          title="YouTube video"
                          loading="lazy"
                          allow="accelerated-download; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ),
                )}
              </div>
            </div>
          </section>
        )}
      </MskLayout>
    </>
  );
};

ResistancePage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<ResistancePageData, ResistancePageDataVariables>({
    query: queryResistancePageData,
    variables: { locale: lang },
  });
  return { data, lang };
};
