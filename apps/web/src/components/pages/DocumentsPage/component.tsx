import 'bootstrap-4-grid/css/grid.css';

import css from '@emotion/css';
import { Button } from 'components/atoms/Button';
import { Layout } from 'components/molecules/Layout';
import { Table } from 'components/molecules/Table';
import { NextPage } from 'next';
import React from 'react';

import { BODY_DATA, HEADER_DATA } from './mock';

export const DocumentsPage: NextPage = () => {
  return (
    <Layout>
      <div className="overflow">
        <div>
          <h2>Документы</h2>
        </div>
        <div className="d-flex justify-content-end p-3">
          <Button>Upload</Button>
        </div>
        <div
          className="p-4"
          css={css`
            border: 2px solid #f7f7f9;
          `}
        >
          <Table headerData={HEADER_DATA} bodyData={BODY_DATA} />
        </div>
      </div>
    </Layout>
  );
};
