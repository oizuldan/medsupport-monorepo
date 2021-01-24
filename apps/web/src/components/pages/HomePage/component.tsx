import axios from 'axios';
import { H1, Layout, P } from 'components';
import { typography } from 'core';
import { NextPage } from 'next';
import React, { useEffect } from 'react';

import { InitProps, Props } from './props';

export const HomePage: NextPage<InitProps, Props> = (props: Props) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(props.user);
  }, [props]);
  return (
    <Layout>
      <div className="d-flex h-100 align-items-center">
        <div className="h-100 w-50 mr-5 p-5 d-flex flex-column justify-content-center">
          <H1 className="mt-5">Content is comming soon...</H1>
          <P typography={typography.variants.Heading.Regular28}>
            For now you can proceed to Log in/Sign up pages and Documents page
          </P>
        </div>
        <div className="w-50 ">
          <img className="h-100 w-100" alt="logo" src="/static/logoBig.png" />
        </div>
      </div>
    </Layout>
  );
};

HomePage.getInitialProps = async () => {
  const res = await axios('http://localhost:8000/api/users', { params: { username: 'alik' } });
  const buffer = res.data;
  return { user: buffer };
};
