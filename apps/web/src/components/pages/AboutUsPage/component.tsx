import { Layout, Markdown } from 'components';
import { NextComponentType } from 'next';
import { ApolloPageContext } from 'next-with-apollo';
import React from 'react';

import { AboutUsPageData, AboutUsPageDataVariables } from './__generated__/AboutUsPageData';
import { queryAboutUsPageData } from './graphql';
import { InitProps, Props } from './props';

export const AboutUsPage: NextComponentType<ApolloPageContext, InitProps, Props> = (
  props: Props,
) => (
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
);

AboutUsPage.getInitialProps = async (ctx) => {
  const lang = ctx.req?.headers?.cookie?.match(/(kk-Cyrl-KZ|ru-RU)/)?.[0] || 'ru-RU';

  const data = await ctx.apolloClient.query<AboutUsPageData, AboutUsPageDataVariables>({
    query: queryAboutUsPageData,
    variables: { locale: lang },
  });
  return { data };
};
