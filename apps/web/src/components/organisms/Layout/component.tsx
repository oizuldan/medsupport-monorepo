import { Footer } from 'components';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

import { Props } from './props';

const Header = dynamic(() => import('./libs/Header'));

export const Layout: NextPage<Props> = (props: Props) => (
  <div className="d-flex flex-column" css={{ minHeight: '100vh' }}>
    <Header />
    {props.children}
    <Footer />
  </div>
);
