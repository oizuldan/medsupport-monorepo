import 'bootstrap-4-grid';
import 'normalize.css';
import '../styles/globals.css';

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import withApollo, { WithApolloProps } from 'next-with-apollo';
import NextApp, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';

type Props = AppProps & WithApolloProps<NormalizedCacheObject>;

function App({ Component, pageProps, apollo }: Props): ReactElement {
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

// Defining getInitialProps on _app makes this component responsible for running
// each page's getInitialProps. next-with-apollo hooks into this flow to inject
// `ctx.apolloClient`, which the pages rely on for SSR data fetching.
App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: new HttpLink({ uri: process.env.CMS_GRAPHQL_API_URL }),
      cache: new InMemoryCache().restore(initialState ?? {}),
    }),
)(App);
