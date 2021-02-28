import 'bootstrap-4-grid/css/grid.css';

import { Footer, Header } from 'components/index';
import { NextPage } from 'next';
import React from 'react';

import { Props } from './props';

export const Layout: NextPage<Props> = (props: Props) => {
  return (
    <div className="d-flex flex-column h-100 justify-content-between" css={{ minHeight: '100vh' }}>
      <Header />
      <div className="px-5 py-5 flex-grow-1 d-flex flex-column">{props.children}</div>
      <Footer />
    </div>
  );
};
