import { BannerCarouselSkeleton, CardInteractive, Divider, H2, Layout, P } from 'components';
import { colors, media, typography } from 'core';
import { sequence } from 'fp-ts/Array';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/pipeable';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

import { Articles, ArticlesVariables } from '../ArticlesPage/__generated__/Articles';
import { queryArticles } from '../ArticlesPage/graphql';
import * as mock from './mock';
import { InitProps, Props } from './props';

const BannerCarouselMobile = dynamic(() => import('./libs/BannerCarouselMobile'), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => <BannerCarouselSkeleton />,
});
const BannerCarousel = dynamic(() => import('./libs/BannerCarousel'), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => <BannerCarouselSkeleton />,
});

export const HomePage: NextComponentType<ApolloPageContext, InitProps, Props> = (props: Props) => {
  const { data } = props;
  const isMobile = media.useMobileDetector().phone();

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

  return (
    <Layout>
      {isMobile ? (
        <div>
          <BannerCarouselMobile data={mock.bannerCarouselData} />
        </div>
      ) : (
        <div className="py-3">
          <BannerCarousel data={mock.bannerCarouselData} />
        </div>
      )}

      <Divider className="my-5" />

      <div className="mb-5 container d-flex flex-column">
        <H2 className="mb-4">Статьи</H2>
        <div className="row justify-content-center">
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
                <P className="mb-3" typography={typography.variants.Content.Regular16}>
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

HomePage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<Articles, ArticlesVariables>({
    query: queryArticles,
    variables: { locale: lang, limit: 6 },
  });
  return { data };
};
