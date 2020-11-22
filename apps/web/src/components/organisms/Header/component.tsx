import 'bootstrap-4-grid/css/grid.css';

import css from '@emotion/css';
import { NextPage } from 'next';
import React from 'react';

export const Header: NextPage = () => {
  return (
    <div
      css={css`
        height: 56px;
        background-color: #343a40;
      `}
      className="w-100"
    ></div>
  );
};
