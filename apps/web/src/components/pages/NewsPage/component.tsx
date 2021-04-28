import { css } from '@emotion/core';
import axios from 'axios';
import { CardInteractive, Divider, H1, Layout, P } from 'components';
import { colors, media, typography } from 'core';
import { NextPage } from 'next';
import React from 'react';

import { NewsItem } from '../NewsItemPage';
import { Props } from './props';

export const NewsPage: NextPage<Props> = ({ news }: Props) => (
  <Layout>
    <div className="container d-flex flex-column py-md-5 py-3">
      <H1
        css={css(
          typography.styles.headingBold22,
          media.queryStyled([
            typography.styles.headingBold22,
            typography.styles.headingBold22,
            typography.styles.headingBold34,
          ]),
        )}
      >
        Новости
      </H1>
      <div className="row">
        {news.map(({ previewImage, title, id }, i) => (
          <CardInteractive
            key={title + i}
            link
            type="a"
            className="col-lg-4 col-md-6 col-12 p-3"
            color={colors.variants.Background.Primary}
            href={`news-item/${id}`}
          >
            <div
              className="d-flex flex-column"
              css={{
                marginTop: i === 0 ? '0 !important' : 'initial',
                marginBottom: i === news.length - 1 ? '0 !important' : 'initial',
                marginRight: i === news.length - 1 ? '0 !important' : 'initial',
                marginLeft: i === 0 ? '0 !important' : 'initial',
                maxWidth: 400,
              }}
            >
              <img
                className="mb-3"
                alt={previewImage.name}
                height={250}
                css={{
                  objectFit: 'cover',
                }}
                src={`${process.env.BASE_URL}${previewImage.url}`}
              />
              <P className="mb-3" typography={typography.variants.Content.Regular16}>
                {title}
              </P>
              <P
                className="mb-1 text-right"
                typography={typography.variants.Heading.SemiBold17}
                color={colors.variants.Brand.Purple}
              >
                Читать далее...
              </P>
            </div>
            {i !== news.length - 1 && <Divider className="d-md-none d-block mt-4" />}
          </CardInteractive>
        ))}
      </div>
    </div>
  </Layout>
);

NewsPage.getInitialProps = async () => {
  const res = await axios.get<ReadonlyArray<NewsItem>>(`${process.env.BASE_URL}/news-items`);
  return { news: res.data };
};
