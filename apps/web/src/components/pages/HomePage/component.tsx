import {
  BannerCarouselSkeleton,
  ButtonLink,
  ButtonSizes,
  ButtonVariants,
  H2,
  Icon,
  Layout,
  P,
} from 'components';
import { colors, icons, media, typography } from 'core';
import { sequence } from 'fp-ts/Array';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/pipeable';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

import { ArticlesList } from '../ArticlesPage';
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
        <BannerCarouselMobile data={mock.bannerCarouselData} />
      ) : (
        <BannerCarousel data={mock.bannerCarouselData} />
      )}

      <div className="my-5 container d-flex flex-column">
        <div className="d-flex justify-content-between">
          <H2 className="mb-4">Статьи</H2>
          <ButtonLink href="/articles" variant={ButtonVariants.Flat} size={ButtonSizes.Small}>
            <P
              color={colors.variants.Neutral.Grey}
              typography={typography.variants.Element.Regular12}
            >
              Посмотреть все статьи
            </P>
            <Icon
              icon={icons.arrows.keyboardArrowRight}
              color={colors.variants.Neutral.Black}
              className="mr-1"
            />
          </ButtonLink>
        </div>
        <ArticlesList articles={articles} />
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
