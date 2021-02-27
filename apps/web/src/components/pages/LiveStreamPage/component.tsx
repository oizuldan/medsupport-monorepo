import { H2, Layout } from 'components';
import { NextPage } from 'next';
import React from 'react';
import YouTube from 'react-youtube';

import { Options } from './types/Options';

export const LiveStreamPage: NextPage = () => {
  const opts: Options = {
    height: '450',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Layout>
      <div className="container">
        <H2 className="m-0 my-3">Live Stream</H2>
        <YouTube videoId="5qap5aO4i9A" opts={opts} />
      </div>
    </Layout>
  );
};
