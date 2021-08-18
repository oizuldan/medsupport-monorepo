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
import Head from 'next/head';
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
  const { data, lang } = props;
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
    <>
      <Head>
        <title>Medsupport главная</title>
        <meta name="keywords" content="Medsupport" />
        <meta
          name="description"
          content={props.data?.data?.headerBanners?.[0]?.banners?.[0]?.subtitle.substring(0, 200)}
        />
        <meta property="og:title" content="Medsupport главная" />
        <meta
          property="og:description"
          content={props.data?.data?.headerBanners?.[0]?.banners?.[0]?.subtitle.substring(0, 200)}
        />
        <meta property="og:image" content="https://medsupport.dev/static/images/logoBig.png" />
        <meta property="og:locale" content={lang === 'ru_RU' ? 'ru_RU' : 'kz_KZ'} />
        <meta property="og:locale:alternate" content={lang === 'ru_RU' ? 'kz_KZ' : 'ru_RU'} />
        <meta property="og:site_name" content="medsupport" />
        <meta property="og:type" content="article" />
        <meta property="og:article:section" content="medicine" />
      </Head>
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
              href={props.data?.data?.articlesSection?.section?.link?.link || '/'}
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
    </>
  );
};

HomePage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<MainPage, MainPageVariables>({
    query: queryMainPage,
    variables: { locale: lang, limit: 6 },
  });

  return { data, lang };
};
