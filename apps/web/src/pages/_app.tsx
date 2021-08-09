import 'bootstrap-4-grid';
import 'normalize.css';
import 'tailwindcss/tailwind.css';

import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { services } from 'core';
import withApollo, { WithApolloProps } from 'next-with-apollo';
import NextApp, { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import React from 'react';
import ym, { YMInitializer } from 'react-yandex-metrika';

Router.events.on('routeChangeComplete', (url: string) => {
  // To hit only in production and only on client side (in browser)
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    ym('hit', url);
    services.pageview(url);
  }
});

// eslint-disable-next-line functional/no-class
class App extends NextApp<AppProps & WithApolloProps<NormalizedCacheObject>> {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  componentDidMount(): void {
    // To hit only in production and only on client side (in browser)
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      const url = window.location.pathname + window.location.search;
      ym('hit', url);
      services.pageview(url);
    }
  }

  public render(): JSX.Element {
    // eslint-disable-next-line functional/no-this-expression
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        {process.env.NODE_ENV === 'production' && (
          <YMInitializer
            accounts={[parseInt(process.env.YM_COUNTER_ID as string)]}
            options={{ webvisor: true, defer: true }}
            version="2"
          />
        )}
        <Head>
          <title>Medsupportkz</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {process.env.NODE_ENV === 'production' && (
          <Head>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          </Head>
        )}
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
  };
};

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: process.env.CMS_GRAPHQL_API_URL,
    cache: new InMemoryCache().restore(initialState || {}),
  });
})(App);
