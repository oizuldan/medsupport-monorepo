import 'bootstrap-4-grid';
import 'normalize.css';

import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { context } from '@reatom/react';
import withApollo, { WithApolloProps } from 'next-with-apollo';
import NextApp, { AppProps } from 'next/app';
import React from 'react';

import { store } from '../store';

// eslint-disable-next-line functional/no-class
class App extends NextApp<AppProps & WithApolloProps<NormalizedCacheObject>> {
  public render(): JSX.Element {
    // eslint-disable-next-line functional/no-this-expression
    const { Component, pageProps, apollo } = this.props;
    return (
      <context.Provider value={store}>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </context.Provider>
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
