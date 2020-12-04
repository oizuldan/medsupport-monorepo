import axios from 'axios';
import {
  Button,
  ButtonLink,
  ButtonSizes,
  ButtonVariants,
  Divider,
  H2,
  Input,
  Layout,
  List,
  ListItem,
  P,
  Spinner,
  Toast,
  Typography,
} from 'components';
import { colors, services, typography } from 'core';
import { NextPage } from 'next';
import React, { ChangeEventHandler, Fragment, useCallback, useRef, useState } from 'react';

import { Props } from './props';
import { File } from './types/File';

export const DocumentsPage: NextPage<Props> = ({ files: filesProp }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [files, setFiles] = useState(filesProp && [filesProp[0], ...filesProp]);

  const [selectedFileName, setSelectedFileName] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const callToastAndRefresh = useCallback((success: boolean, message: string) => {
    const type = success ? services.ToastTypes.Success : services.ToastTypes.Error;
    services.toast(
      Toast,
      type,
      <P color={colors.variants.All.White} typography={typography.variants.Main.Regular16}>
        {message}
      </P>,
    );
  }, []);

  const onSelectDocument = useCallback(() => {
    if (ref?.current) {
      ref.current.click();
    }
  }, [ref]);
  const onUploadDocument = useCallback(async () => {
    setLoading(true);
    if (ref?.current?.files) {
      try {
        const { files } = ref.current;
        const data = new FormData();
        data.append('file', files[0]);
        const res = await axios.post('http://localhost:3000/proxy/documents/create', data, {});
        setSelectedFileName(undefined);
        if (formRef?.current) formRef.current.reset();
        setFiles(res.data.files && [res.data.files[0], ...res.data.files]);
        callToastAndRefresh(true, res.data.message);
      } catch (e) {
        callToastAndRefresh(false, e.response.data);
      }
    }
    setLoading(false);
  }, [callToastAndRefresh]);
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      setSelectedFileName(e.currentTarget.files[0].name);
    }
  }, []);
  const parseDate = useCallback((s: string) => {
    const date = new Date(s);
    return `${date.getDate()} ${date.toLocaleDateString('en-US', {
      month: 'long',
    })}, ${date.getFullYear()}`;
  }, []);

  return (
    <Layout>
      <div className="container">
        <H2 className="m-0 my-3">Documents</H2>
        <List>
          {files?.map((file, i) => (
            <Fragment key={file.name + i}>
              <ListItem
                key={file.name + i}
                className="d-flex align-items-center justify-content-between py-3 h-auto text-left text-wrap"
              >
                <div className="d-flex col-4 align-items-center">
                  {i !== 0 ? (
                    <>
                      <img
                        className="mr-2"
                        src={file.iconLink}
                        alt={file.name}
                        width={20}
                        height={20}
                      />
                      <P typography={typography.variants.Main.Regular16}>{file.name}</P>
                    </>
                  ) : (
                    <P typography={typography.variants.Menu.Bold14}>Name</P>
                  )}
                </div>
                <P
                  className="d-flex col-4 justify-content-center"
                  typography={typography.variants.Main.Regular16}
                >
                  {i !== 0 ? (
                    parseDate(file.createdTime)
                  ) : (
                    <Typography as="span" typography={typography.variants.Menu.Bold14}>
                      Date created
                    </Typography>
                  )}
                </P>
                <div className="d-flex align-items-center col-4 justify-content-end">
                  {i !== 0 ? (
                    <>
                      <ButtonLink
                        href={file.webViewLink}
                        target="_blank"
                        variant={ButtonVariants.Flat}
                        size={ButtonSizes.Small}
                        typography={typography.variants.Small.Bold12}
                      >
                        View
                      </ButtonLink>
                      <ButtonLink
                        href={file.webContentLink || file.exportLinks?.docx}
                        target="_blank"
                        variant={ButtonVariants.Flat}
                        size={ButtonSizes.Small}
                        typography={typography.variants.Small.Bold12}
                        color={colors.variants.All.GreenLight}
                      >
                        Download
                      </ButtonLink>{' '}
                    </>
                  ) : (
                    <P typography={typography.variants.Menu.Bold14}>Links</P>
                  )}
                </div>
              </ListItem>
              {i !== 0 && <Divider />}
            </Fragment>
          ))}
        </List>

        <div className="mt-4">
          <form ref={formRef}>
            <Input className="d-none" ref={ref} name="file" type="file" onChange={onChange} />
          </form>
          <div className="d-flex mb-3 align-items-center">
            {loading ? (
              <Spinner />
            ) : (
              <>
                <Button
                  className="mr-3"
                  color={colors.variants.All.GreenLight}
                  onClick={onSelectDocument}
                  typography={typography.variants.Small.Bold12}
                  size={ButtonSizes.Small}
                >
                  Select the document
                </Button>

                <Button
                  color={colors.variants.All.GreenLight}
                  onClick={onUploadDocument}
                  typography={typography.variants.Small.Bold12}
                  size={ButtonSizes.Small}
                >
                  Upload the document
                </Button>
              </>
            )}
          </div>
          {selectedFileName && (
            <P typography={typography.variants.Main.Regular16} color={colors.variants.All.Grey}>
              Selected file:{' '}
              <Typography as="span" color={colors.variants.All.Black}>
                {selectedFileName}
              </Typography>
            </P>
          )}
        </div>
      </div>
    </Layout>
  );
};

DocumentsPage.getInitialProps = async () => {
  const files = await axios.get('http://localhost:3000/proxy/documents/list-all');
  return {
    files: files.data as ReadonlyArray<File>,
  };
};
