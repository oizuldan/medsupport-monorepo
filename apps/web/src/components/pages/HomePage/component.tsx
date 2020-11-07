import { NextPage } from 'next';
import { load } from 'protobufjs';
import React, { useEffect } from 'react';

import { InitProps, Props } from './props';

export const HomePage: NextPage<InitProps, Props> = (_props: Props) => {
  useEffect(() => {
    load('/home/oizuldan/Desktop/medsupportkz/apps/web/src/protos/user.proto', async function (
      _,
      root,
    ) {
      if (!root) return;
      // const User = root.lookupType('user.User');
      // console.log(User.decode(props.user).finish());
    });
  }, []);
  return <div>Home Page hello</div>;
};

HomePage.getInitialProps = async () => ({
  user: await fetch('http://localhost:8000/api/userss'),
});
