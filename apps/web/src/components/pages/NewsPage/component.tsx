import { css } from '@emotion/core';
import axios from 'axios';
import { Layout, Markdown, P } from 'components';
import { colors, media, services, typography } from 'core';
import { NextPage } from 'next';
import React from 'react';

import { Props } from './props';

export const NewsPage: NextPage<Props> = ({
  content,
  createdAt,
  author,
  datePublishedText,
}: Props) => {
  return (
    <Layout>
      {content && <Markdown>{content}</Markdown>}
      <div className="container text-right my-3">
        {author && (
          <P
            css={css(
              typography.styles.contentRegular16,
              media.queryStyled([
                typography.styles.contentRegular16,
                typography.styles.contentRegular16,
                typography.styles.contentRegular20,
              ]),
            )}
            color={colors.variants.Neutral.Grey}
          >
            {author}
          </P>
        )}
        {datePublishedText && (
          <P
            css={css(
              typography.styles.elementRegular12,
              media.queryStyled([
                typography.styles.elementRegular12,
                typography.styles.elementRegular12,
                typography.styles.contentRegular16,
              ]),
            )}
            color={colors.variants.Neutral.Grey}
          >
            {datePublishedText}
          </P>
        )}
        {createdAt && (
          <P
            css={css(
              typography.styles.elementRegular12,
              media.queryStyled([
                typography.styles.elementRegular12,
                typography.styles.elementRegular12,
                typography.styles.contentRegular16,
              ]),
            )}
            color={colors.variants.Neutral.Grey}
          >
            {services.parseDate(createdAt, 'ru')}
          </P>
        )}
      </div>
    </Layout>
  );
};

NewsPage.getInitialProps = async () => {
  const res = await axios.get<{
    readonly content: string;
    readonly createdAt: string;
    readonly author: string;
    readonly datePublishedText: string;
  }>(`${process.env.BASE_URL}/news-items/606aec46e6e890bd697dbc40`);
  return {
    ...res.data,
  };
};
