import { css } from '@emotion/core';
import { InteractiveCard, Layout, Typography } from 'components';
import { media, typography } from 'core';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import Head from 'next/head';
import React from 'react';
import YouTube from 'react-youtube';

import {
  ResistancePageData,
  ResistancePageDataVariables,
} from './__generated__/ResistancePageData';
import { queryResistancePageData } from './graphql';
import { InitProps, Props } from './props';

export const ResistancePage: NextComponentType<ApolloPageContext, InitProps, Props> = (
  props: Props,
) => {
  return (
    <>
      <Head>
        <title>Антибиотикорезистентность</title>
        <meta name="keywords" content={props.data?.data?.resistancePage?.title} />
        <meta name="description" content={props.data?.data?.resistancePage?.title} />
        <meta property="og:title" content={props.data?.data?.resistancePage?.title} />
        <meta property="og:description" content={props.data?.data?.resistancePage?.title} />
        <meta property="og:image" content="https://medsupport.dev/static/images/logoBig.png" />
        <meta property="og:locale" content={props.lang === 'ru_RU' ? 'ru_RU' : 'kz_KZ'} />
        <meta property="og:locale:alternate" content={props.lang === 'ru_RU' ? 'kz_KZ' : 'ru_RU'} />
        <meta property="og:site_name" content="medsupport" />
      </Head>
      <Layout
        headerButtons={props.data?.data?.headerButtons}
        footerSections={props.data?.data?.footerSections}
        headerLinks={props.data?.data?.headerLinks}
      >
        <div className="container my-3">
          <Typography
            as="h1"
            className="mb-4"
            css={css(
              typography.styles.headingBold22,
              media.queryStyled([
                typography.styles.headingBold22,
                typography.styles.headingBold28,
                typography.styles.headingBold34,
              ]),
            )}
          >
            {props.data?.data?.resistancePage?.title}
          </Typography>

          <Typography
            as="h2"
            className="mb-3"
            css={css(
              typography.styles.headingBold22,
              media.queryStyled([
                typography.styles.headingBold22,
                typography.styles.headingBold22,
                typography.styles.headingBold28,
              ]),
            )}
          >
            {props.data?.data?.resistancePage?.ResistanceArticles?.title}
          </Typography>

          <div className="tw-flex tw-flex-wrap tw-justify-center">
            {props.data?.data?.resistancePage?.ResistanceArticles?.articles?.map(
              (article) =>
                article && (
                  <InteractiveCard
                    key={article.id}
                    description={article.description}
                    title={article.title}
                    buttonText={props.data.data?.resistancePage?.ResistanceArticles?.buttonText}
                    href={`/article/${article.id}`}
                  />
                ),
            )}
          </div>

          <Typography
            as="h2"
            className="mb-3"
            css={css(
              typography.styles.headingBold22,
              media.queryStyled([
                typography.styles.headingBold22,
                typography.styles.headingBold22,
                typography.styles.headingBold28,
              ]),
            )}
          >
            {props.data?.data?.resistancePage?.Videos?.title}
          </Typography>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 tw-mb-10">
            {props.data?.data?.resistancePage?.Videos?.YoutubeVideos?.map(
              (videoId) =>
                videoId && (
                  <YouTube key={videoId.videoId} videoId={videoId.videoId} className="tw-w-full" />
                ),
            )}
          </div>
        </div>
      </Layout>
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
