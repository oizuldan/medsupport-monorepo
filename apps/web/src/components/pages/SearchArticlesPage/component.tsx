import { css } from '@emotion/core';
import axios from 'axios';
import {
  Button,
  ButtonSizes,
  H1,
  Input,
  Label,
  Layout,
  List,
  ListItemButton,
  Pagination,
  Spinner,
} from 'components';
import { colors, media, typography } from 'core';
import { NextPage } from 'next';
import React, { ChangeEventHandler, useCallback, useState } from 'react';

import { Article } from './types/Article';

export const SearchArticlesPage: NextPage = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined);
  const [articles, setArticles] = useState<ReadonlyArray<Article> | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeText = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => setText(event.target.value),
    [],
  );
  const onGetData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:3000/proxy/api/search?query=${text}&page=${currentPage}`,
      );
      setArticles(res.data.articles);
      setTotalPages(Number(res.data.total));
      setLoading(false);
      setError(undefined);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }, [currentPage, text]);
  const onSearchClick = useCallback(async () => {
    setCurrentPage(1);
    onGetData();
  }, [onGetData]);
  const onPageChange = useCallback(
    (_e, value) => {
      setCurrentPage(value + 1);
      onGetData();
    },
    [onGetData],
  );

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
          Искать новости
        </H1>
        <div className="d-flex">
          <Label
            className="mr-3 w-100"
            htmlFor="text"
            color={error ? colors.variants.Error.Red1 : undefined}
            helperText={error || (totalPages ? `${totalPages} результатов найдено` : undefined)}
          >
            <Input
              value={text}
              onChange={onChangeText}
              type="text"
              typography={typography.variants.Content.Regular16}
            />
          </Label>
          <Button
            loading={loading}
            size={ButtonSizes.Medium}
            css={css(
              typography.styles.elementSemiBold12,
              media.queryStyled([
                typography.styles.elementSemiBold12,
                typography.styles.elementSemiBold12,
                typography.styles.headingSemiBold17,
              ]),
            )}
            onClick={onSearchClick}
            bordered
          >
            Поиск
          </Button>
        </div>

        {articles && (
          <List className="mt-4">
            {articles.map((article) => (
              <ListItemButton
                type="a"
                link
                target="_blank"
                href={article.link}
                key={article.title}
                typography={typography.variants.Content.Regular16}
              >
                {article.title}
              </ListItemButton>
            ))}
          </List>
        )}
        {loading ? (
          <Spinner className="mt-1" />
        ) : (
          totalPages && <Pagination count={totalPages} page={currentPage} onChange={onPageChange} />
        )}
      </div>
    </Layout>
  );
};
