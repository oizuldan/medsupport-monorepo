import 'bootstrap-4-grid/css/grid.css';

import { Footer, Header } from 'components/index';
import { NextPage } from 'next';
import React from 'react';

import { Props } from './props';

export const Layout: NextPage<Props> = (props: Props) => {
  return (
    <div className="d-flex flex-column h-100 justify-content-between" css={{ minHeight: '100vh' }}>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};
