import { Layout } from 'components';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

import { Options } from './types/Options';

export const LiveStreamPage: NextPage = () => {
  const [playerWidth, setPlayerWidth] = useState('');
  const [playerHeight, setPlayerHeight] = useState('450');

  useEffect(() => {
    if (window.innerWidth < 480) {
      setPlayerHeight('380');
      setPlayerWidth(String(window.innerWidth * 0.9));
    } else {
      setPlayerWidth(String(window.innerWidth * 0.8));
    }
  }, []);

  const opts: Options = {
    height: playerHeight,
    width: playerWidth,
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Layout>
      <div className="container my-4 d-flex justify-content-center">
        {playerWidth.length && <YouTube videoId="5qap5aO4i9A" opts={opts} />}
      </div>
    </Layout>
  );
};
