import 'bootstrap-4-grid/css/grid.css';

import { Header } from 'components/organisms/Header';
import { NextPage } from 'next';
import React from 'react';

import { Props } from './props';

export const Layout: NextPage<Props> = (props: Props) => {
  return (
    <div>
      <Header />
      <div className="px-5 flex-grow-1 d-flex flex-column">{props.children}</div>
    </div>
  );
};
