import { css } from '@emotion/core';
import { H1, Layout } from 'components';
import { media, typography } from 'core';
import { sequence } from 'fp-ts/Array';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/pipeable';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import Head from 'next/head';
import React, { useMemo } from 'react';

import {
  ArticlesPage as ArticlesPageGQL,
  ArticlesPageVariables,
} from './__generated__/ArticlesPage';
import { queryArticlesPage } from './graphql';
import { List } from './libs/List';
import { InitProps, Props } from './props';

export const ArticlesPage: NextComponentType<ApolloPageContext, InitProps, Props> = (
  props: Props,
) => {
  const { data, lang } = props;

  const articles = useMemo(
    () =>
      pipe(
        O.fromNullable(data?.data?.articles),
        O.chain(O.fromPredicate((v) => Array.isArray(v))),
        O.chain((arts) => sequence(O.option)(arts.map((art) => pipe(O.fromNullable(art))))),
        O.getOrElseW(() => undefined),
      ),
    [data?.data?.articles],
  );

  // const onGoToSearchArticles = useCallback(() => router.push('/search-articles'), [router]);

  return (
    <>
      <Head>
        <title>{props.data?.data?.articlesSection?.section?.title}</title>
        <meta name="keywords" content={props.data?.data?.articlesSection?.section?.title} />
        <meta
          name="description"
          content="Медицинский статьи на следующие темы: аппнедицит, бронхит, анемия, астма и многие другие.
          Тут вы найдете инструкции по лечению и описанию болезней."
        />
        <meta property="og:title" content={props.data?.data?.articlesSection?.section?.title} />
        <meta
          property="og:description"
          content="Медицинский статьи на следующие темы: аппнедицит, бронхит, анемия, астма и многие другие.
          Тут вы найдете инструкции по лечению и описанию болезней."
        />
        <meta property="og:image" content="https://medsupport.dev/static/images/logoBig.png" />
        <meta property="og:locale" content={lang === 'ru_RU' ? 'ru_RU' : 'kz_KZ'} />
        <meta property="og:locale:alternate" content={lang === 'ru_RU' ? 'kz_KZ' : 'ru_RU'} />
        <meta property="og:site_name" content="medsupport" />
        <meta property="og:type" content="article" />
        <meta property="og:article:section" content="medicine" />
        {articles?.map(({ title }) => (
          <meta key={title} property="og:article:tag" content={title} />
        ))}
      </Head>
      <Layout
        headerButtons={props.data?.data?.headerButtons}
        footerSections={props.data?.data?.footerSections}
        headerLinks={props.data?.data?.headerLinks}
      >
        <div className="container d-flex flex-column py-md-5 py-3">
          <div className="d-flex justify-content-between align-items-center mb-md-3 mb-2">
            <H1
              css={css(
                typography.styles.headingBold22,
                media.queryStyled([
                  typography.styles.headingBold22,
                  typography.styles.headingBold22,
                  typography.styles.headingBold34,
                ]),
              )}
            >
              {props.data?.data?.articlesSection?.section?.title}
            </H1>
            {/* <ButtonLink*/}
            {/*  type="a"*/}
            {/*  onClick={onGoToSearchArticles}*/}
            {/*  variant={ButtonVariants.Flat}*/}
            {/*  size={ButtonSizes.Small}*/}
            {/*  color={colors.variants.Text.Primary}*/}
            {/*  css={css(*/}
            {/*    typography.styles.elementBold12,*/}
            {/*    media.queryStyled([typography.styles.headingBold17]),*/}
            {/*  )}*/}
            {/* >*/}
            {/*  Искать новости*/}
            {/* </ButtonLink>*/}
          </div>
          <List articles={articles} />
        </div>
      </Layout>
    </>
  );
};

ArticlesPage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<ArticlesPageGQL, ArticlesPageVariables>({
    query: queryArticlesPage,
    variables: { locale: lang },
  });
  return { data, lang };
};
