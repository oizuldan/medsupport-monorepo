import { css } from '@emotion/core';
import { H1, Layout, List, ListItemButton, P } from 'components';
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
        <List>
          {articles?.map((article, i) => (
            <ListItemButton
              key={article.title + i}
              link
              type="a"
              href={`article/${article.id}`}
              className="px-0"
            >
              <P
                className="mb-2"
                typography={typography.variants.Content.Regular16}
                css={css`
                  &:hover {
                    color: ${colors.variants.Brand.Purple};
                  }
                `}
              >
                {article.title}
              </P>
            </ListItemButton>
          ))}
        </List>
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
