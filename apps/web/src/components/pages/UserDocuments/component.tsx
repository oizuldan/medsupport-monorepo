import axios from 'axios';
import { DocumentPdfViewer, Layout } from 'components';
import { NextPage } from 'next';
import React, { useState } from 'react';

import { Props } from '../DocumentsPage/props';
import { File } from '../DocumentsPage/types/File';

export const UserDocuments: NextPage<Props> = ({ files: filesProp }: Props) => {
  const [files] = useState(filesProp && [filesProp[0], ...filesProp]);
  return (
    <Layout>
      <div className="d-flex flex-row flex-wrap">
        {files &&
          files.map((file) => <DocumentPdfViewer key={file.webContentLink + '1'} file={file} />)}
      </div>
    </Layout>
  );
};
UserDocuments.getInitialProps = async () => {
  const files = await axios.get('http://localhost:3000/proxy/api/list-documents');
  return {
    files: files.data as ReadonlyArray<File>,
  };
};
