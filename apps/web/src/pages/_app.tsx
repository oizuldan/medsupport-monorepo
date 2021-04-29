import 'bootstrap-4-grid';
import 'normalize.css';

import type { AppProps } from 'next/app';
import React from 'react';

import { AuthProvider } from '../context/authContext';

const NextApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default NextApp;
