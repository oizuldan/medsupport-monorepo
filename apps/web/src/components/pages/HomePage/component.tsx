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
import { MainPage, MainPageVariables } from './__generated__/MainPage';
import { queryMainPage } from './graphql';
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
    <Layout
      headerButtons={props.data?.data?.headerButtons}
      footerSections={props.data?.data?.footerSections}
      headerLinks={props.data?.data?.headerLinks}
    >
      {isMobile ? (
        <BannerCarouselMobile banners={props.data?.data?.headerBanners} />
      ) : (
        <BannerCarousel banners={props.data?.data?.headerBanners} />
      )}

      <div className="my-5 container d-flex flex-column">
        <div className="d-flex justify-content-between">
          <H2 className="mb-4">{props.data?.data?.articlesSection?.section?.title}</H2>
          <ButtonLink
            href={props.data?.data?.articlesSection?.section?.link?.link}
            variant={ButtonVariants.Flat}
            size={ButtonSizes.Small}
          >
            <P
              color={colors.variants.Neutral.Grey}
              typography={typography.variants.Element.Regular12}
            >
              {props.data?.data?.articlesSection?.section?.link?.title}
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

  const data = await ctx.apolloClient.query<MainPage, MainPageVariables>({
    query: queryMainPage,
    variables: { locale: lang, limit: 6 },
  });

  return { data };
};
