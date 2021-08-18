import { Layout, Markdown } from 'components';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import Head from 'next/head';
import React from 'react';

import { AboutUsPageData, AboutUsPageDataVariables } from './__generated__/AboutUsPageData';
import { queryAboutUsPageData } from './graphql';
import { InitProps, Props } from './props';

export const AboutUsPage: NextComponentType<ApolloPageContext, InitProps, Props> = (
  props: Props,
) => (
  <>
    <Head>
      <title>Medsupport о нас</title>
      <meta name="keywords" content="О Medsupport" />
      <meta name="description" content={props.data?.data?.aboutUsPage?.content.substring(0, 200)} />
      <meta property="og:title" content="Medsupport о нас" />
      <meta
        property="og:description"
        content={props.data?.data?.aboutUsPage?.content.substring(0, 200)}
      />
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
        {props.data?.data?.aboutUsPage?.content && (
          <Markdown>{props.data?.data?.aboutUsPage?.content}</Markdown>
        )}
      </div>
    </Layout>
  </>
);

AboutUsPage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<AboutUsPageData, AboutUsPageDataVariables>({
    query: queryAboutUsPageData,
    variables: { locale: lang },
  });
  return { data, lang };
};
