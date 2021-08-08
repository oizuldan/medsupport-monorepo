import 'bootstrap-4-grid';
import 'normalize.css';
import 'tailwindcss/tailwind.css';

import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import withApollo, { WithApolloProps } from 'next-with-apollo';
import NextApp, { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

// eslint-disable-next-line functional/no-class
class App extends NextApp<AppProps & WithApolloProps<NormalizedCacheObject>> {
  public render(): JSX.Element {
    // eslint-disable-next-line functional/no-this-expression
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Head>
          <title>Medsupportkz</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
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
