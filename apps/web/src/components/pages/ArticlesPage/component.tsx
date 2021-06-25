import { css } from '@emotion/core';
import { CardInteractive, Divider, H1, Layout, P } from 'components';
import { colors, media, typography } from 'core';
import { sequence } from 'fp-ts/Array';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/pipeable';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import React, { useMemo } from 'react';

import { Articles, ArticlesVariables } from './__generated__/Articles';
import { queryArticles } from './graphql';
import { InitProps, Props } from './props';

export const ArticlesPage: NextComponentType<ApolloPageContext, InitProps, Props> = (
  props: Props,
) => {
  const { data } = props;

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
    <Layout>
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
            Статьи
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
        <div className="row">
          {articles?.map((article, i) => (
            <CardInteractive
              key={article.title + i}
              link
              type="a"
              className="col-lg-4 col-md-6 col-12 p-3"
              color={colors.variants.Background.Primary}
              href={`article/${article.id}`}
            >
              <div
                className="d-flex flex-column"
                css={{
                  marginTop: i === 0 ? '0 !important' : 'initial',
                  marginBottom: i === articles.length - 1 ? '0 !important' : 'initial',
                  marginRight: i === articles.length - 1 ? '0 !important' : 'initial',
                  marginLeft: i === 0 ? '0 !important' : 'initial',
                  maxWidth: 400,
                }}
              >
                <img
                  className="mb-3"
                  alt={article.previewImage?.name}
                  height={250}
                  css={{
                    objectFit: 'cover',
                  }}
                  src={`${process.env.BASE_URL}${article.previewImage?.url}`}
                />
                <P className="mb-2" typography={typography.variants.Content.Regular16}>
                  {article.title}
                </P>
                <P
                  className="mb-1 text-right"
                  typography={typography.variants.Heading.SemiBold17}
                  color={colors.variants.Brand.Purple}
                >
                  Читать далее...
                </P>
              </div>
              {i !== articles.length - 1 && <Divider className="d-md-none d-block mt-4" />}
            </CardInteractive>
          ))}
        </div>
      </div>
    </Layout>
  );
};

ArticlesPage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<Articles, ArticlesVariables>({
    query: queryArticles,
    variables: { locale: lang },
  });
  return { data };
};
