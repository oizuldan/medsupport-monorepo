import { Layout } from 'components';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

import { Options } from './types/Options';

const Chat = dynamic(() => import('../../organisms/Chat'), { ssr: false });

export const LiveStreamPage: NextPage = () => {
  const [playerWidth, setPlayerWidth] = useState('');
  const [playerHeight, setPlayerHeight] = useState('450');

  useEffect(() => {
    if (window.innerWidth < 480) {
      setPlayerHeight('380');
      setPlayerWidth(String(window.innerWidth * 0.5));
    } else {
      setPlayerHeight('600');
      setPlayerWidth(String(window.innerWidth * 0.6));
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
      <div style={{ margin: '7rem' }} className="my-4 d-flex justify-content-center">
        <YouTube videoId="5qap5aO4i9A" opts={opts} />
        <Chat />
      </div>
    </Layout>
  );
};
