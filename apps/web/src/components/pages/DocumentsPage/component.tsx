import 'bootstrap-4-grid/css/grid.css';

import css from '@emotion/css';
import { Button } from 'components/atoms/Button';
import { Layout } from 'components/molecules/Layout';
import { Table } from 'components/molecules/Table';
import { NextPage } from 'next';
import React, { useCallback, useRef } from 'react';

import { BODY_DATA, HEADER_DATA } from './mock';

export const DocumentsPage: NextPage = () => {
  const ref = useRef<HTMLInputElement>(null);
  const onSelectDocument = useCallback(() => {
    if (ref && ref.current) {
      ref.current.click();
    }
  }, []);
  const onUploadDocument = useCallback(() => {
    if (ref && ref.current && ref.current.files) {
      const { files } = ref.current;
      // eslint-disable-next-line no-console
      console.log(files);
    }
  }, []);
  return (
    <Layout>
      <div>
        <h2 className="m-0 my-3">Документы</h2>
        <div
          className="p-4"
          css={css`
            border: 2px solid #f7f7f9;
          `}
        >
          <Table headerData={HEADER_DATA} bodyData={BODY_DATA} />
        </div>
        <div className="d-flex flex-column p-3">
          <input ref={ref} type="file" css={{ color: '#a32cc4', display: 'none' }} />
          <Button className="py-2 mt-2" css={{ width: 150 }} onClick={onSelectDocument}>
            <span css={{ color: '#a32cc4' }}>Выбрать документ</span>
          </Button>
          <Button className="py-2 mt-2" css={{ width: 150 }} onClick={onUploadDocument}>
            <span css={{ color: '#a32cc4' }}>Загрузить документ</span>
          </Button>
        </div>
      </div>
    </Layout>
  );
};
