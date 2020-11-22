import 'bootstrap-4-grid/css/grid.css';

import React, { FC } from 'react';

export const Header: FC = () => {
  return (
    <div
      css={{
        height: 56,
        backgroundColor: '#a32cc4',
      }}
      className="d-flex w-100 align-items-center px-3"
    >
      <h1 className="m-0 " css={{ color: 'white' }}>
        Medsupport
      </h1>
    </div>
  );
};
