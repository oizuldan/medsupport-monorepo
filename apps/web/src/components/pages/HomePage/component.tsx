import axios from 'axios';
import { NextPage } from 'next';
import React, { useEffect } from 'react';

import { InitProps, Props } from './props';

export const HomePage: NextPage<InitProps, Props> = (props: Props) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(props.user);
  }, [props]);
  return <div>Home Page</div>;
};

HomePage.getInitialProps = async () => {
  const res = await axios('http://localhost:8000/api/users', { params: { username: 'alik' } });
  const buffer = res.data;
  return { user: buffer };
};
