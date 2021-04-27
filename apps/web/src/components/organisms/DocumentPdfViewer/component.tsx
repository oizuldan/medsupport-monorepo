import { Button, ButtonVariants } from 'components';
import { NextPage } from 'next';
import React, { useCallback, useState } from 'react';
import Modal from 'react-modal';
import { Document, Page, pdfjs } from 'react-pdf';

import { Prop } from './props';
// eslint-disable-next-line functional/immutable-data
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const DocumentPdfViewer: NextPage<Prop> = ({ file, onClose }: Prop) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [url] = useState(file?.downloadLink);

  const onDocumentLoadSuccess = useCallback((pdf) => {
    setNumPages(pdf?._pdfInfo?.numPages);
  }, []);

  const handleClose = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);
  const nextPage = useCallback(() => setPageNumber((prev) => prev + 1), []);
  const previousPage = useCallback(() => setPageNumber((prev) => prev - 1), []);

  return url ? (
    <Modal isOpen>
      <Button onClick={handleClose} variant={ButtonVariants.Flat}>
        <img alt="close" src="/static/images/images/closeButton.png" />
      </Button>
      <div
        style={{ border: '1px solid black', borderRadius: 4 }}
        className="d-flex justify-content-center"
      >
        <Document
          file={{
            url,
          }}
          error="error"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} width={600} />
        </Document>
      </div>
      <div>
        Page {pageNumber} of {numPages}
      </div>
      <div>
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </Modal>
  ) : null;
};
