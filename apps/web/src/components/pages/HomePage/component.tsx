import axios from 'axios';
import { NextPage } from 'next';
import { load } from 'protobufjs';
import React, { useEffect } from 'react';

import { InitProps, Props } from './props';

export const HomePage: NextPage<InitProps, Props> = (props: Props) => {
  useEffect(() => {
    load('/Users/alinur/medsupportkz/apps/web/src/protos/user.proto', async function (_, root) {
      if (!root) return;
      const buffer = props.user;
      const User = root.lookupType('user.User');
      // eslint-disable-next-line no-console
      console.log(User.decode(Buffer.from(buffer)));
    });
  }, [props.user]);
  return <div>Home Page hello</div>;
};

HomePage.getInitialProps = async () => {
  const res = await axios('http://localhost:8000/api/users', { params: { username: 'alik' } });
  const buffer = res.data;
  return { user: buffer };
};
