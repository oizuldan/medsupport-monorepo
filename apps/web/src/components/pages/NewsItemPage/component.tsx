import { css } from '@emotion/core';
import axios from 'axios';
import { ButtonLink, ButtonSizes, ButtonVariants, Icon, Layout, Markdown, P } from 'components';
import { colors, icons, media, services, typography } from 'core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

import { Props } from './props';
import { Item } from './types/Item';

export const NewsItemPage: NextPage<Props> = ({ data }: Props) => {
  const router = useRouter();
  const onGoToAllNews = useCallback(() => {
    router.push('/news');
  }, [router]);
  return (
    <Layout>
      <div className="container my-3">
        <ButtonLink
          variant={ButtonVariants.Flat}
          size={ButtonSizes.Small}
          className="pl-0"
          onClick={onGoToAllNews}
        >
          <Icon
            icon={icons.arrows.arrowBack}
            color={colors.variants.Neutral.Black}
            className="mr-1"
          />
          <P
            color={colors.variants.Neutral.Grey}
            typography={typography.variants.Element.Regular12}
          >
            Вернуться к списку новостей
          </P>
        </ButtonLink>
        {data.content && <Markdown>{data.content}</Markdown>}
        <div className="text-right">
          {data.author && (
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
              {data.author}
            </P>
          )}
          {data.datePublishedText && (
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
              {data.datePublishedText}
            </P>
          )}
          {data.createdAt && (
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
              {services.parseDate(data.createdAt, 'ru')}
            </P>
          )}
        </div>
      </div>
    </Layout>
  );
};

NewsItemPage.getInitialProps = async (ctx) => {
  const id = ctx.query?.id?.toString();
  const res = await axios.get<Item>(`${process.env.BASE_URL}/news-items/${id}`);
  return { data: res.data };
};
