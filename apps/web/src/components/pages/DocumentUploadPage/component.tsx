import { css } from '@emotion/core';
import axios from 'axios';
import { Button, Dropzone, H1, Input, Layout, P, Toast } from 'components';
import { colors, media, services, typography } from 'core';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { ChangeEventHandler, useCallback, useEffect, useState } from 'react';

// import { HomePage } from '../HomePage';
// import { NewsItem } from '../NewsItemPage';

export const DocumentUploadPage: NextPage = () => {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const disabled = !file || title.length === 0 || author.length === 0 || description.length === 0;

  const onChangeTitle = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => setTitle(event.target.value),
    [],
  );
  const onChangeAuthor = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => setAuthor(event.target.value),
    [],
  );
  const onChangeDescription = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => setDescription(event.target.value),
    [],
  );
  const callToast = useCallback((success: boolean, message: string) => {
    const type = success ? services.ToastTypes.Success : services.ToastTypes.Error;
    services.toast(
      Toast,
      type,
      <P color={colors.variants.Neutral.White} typography={typography.variants.Content.Regular16}>
        {message}
      </P>,
    );
  }, []);
  const onUploadDocument = useCallback(async () => {
    setLoading(true);
    if (file) {
      try {
        const data = new FormData();
        data.append('file', file);
        data.append('description', description);
        data.append('title', title);
        data.append('author', author);
        const res = await axios.post('https://medsupport.kz/api/create-document', data, {});
        callToast(true, res.data.message);
      } catch (e) {
        callToast(false, e);
      }
    }
    setLoading(false);
  }, [author, callToast, description, file, title]);

  useEffect(() => {
    if (!Cookies.get('token')) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="container my-lg-5 my-md-3 my-2">
        <H1
          css={css(
            typography.styles.headingBold22,
            media.queryStyled([
              typography.styles.headingBold22,
              typography.styles.headingBold22,
              typography.styles.headingBold34,
            ]),
          )}
          className="mb-4"
        >
          Загрузить документ
        </H1>
        <div className="d-flex flex-md-row flex-column mb-2">
          <div className="col-md-8 col-12 p-0 pr-md-1 pr-0 mb-md-0 mb-2">
            <Input
              value={title}
              onChange={onChangeTitle}
              type="text"
              placeholder="Заголовок"
              typography={typography.variants.Content.Regular16}
            />
          </div>
          <div className="col-md-4 col-12 p-0 pl-md-1 pl-0">
            <Input
              value={author}
              onChange={onChangeAuthor}
              type="text"
              placeholder="Автор выжимки"
              typography={typography.variants.Content.Regular16}
            />
          </div>
        </div>
        <Input
          className="mb-2"
          value={description}
          onChange={onChangeDescription}
          element={<textarea />}
          placeholder="Описание"
          typography={typography.variants.Content.Regular16}
          css={{ height: 180 }}
        />
        <div className="d-flex flex-column align-items-center mb-3">
          <Dropzone className="mb-3" file={file} setFile={setFile} />

          {file && (
            <P className="mb-3 text-center" typography={typography.variants.Content.Regular20}>
              Выбранный файл: {file.name}
            </P>
          )}
          <Button
            loading={loading}
            disabled={disabled}
            color={colors.variants.Brand.DarkPurple}
            typography={typography.variants.Heading.SemiBold17}
            onClick={onUploadDocument}
            className="px-4"
          >
            Загрузить
          </Button>
        </div>
      </div>
    </Layout>
  );
};
