import { BannerCarouselSkeleton, H2, InteractiveCard, Layout } from 'components';
import { media } from 'core';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

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
  const { lang } = props;
  const isMobile = media.useMobileDetector().phone();

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

        <div className="mt-5 mb-3 container d-flex flex-column">
          <H2>{props.data?.data?.homePageSpecialSection?.title}</H2>
          <div className="tw-flex tw-flex-wrap tw-justify-center tw-mb-10 tw-mt-5">
            {props.data?.data?.homePageSpecialSection?.interactiveCard?.map(
              (section) =>
                section && (
                  <InteractiveCard
                    key={section.id}
                    description={section.description}
                    title={section.title}
                    buttonText={section.buttonText}
                    href={section.link}
                  />
                ),
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

HomePage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<MainPage, MainPageVariables>({
    query: queryMainPage,
    variables: { locale: lang },
  });

  return { data, lang };
};
