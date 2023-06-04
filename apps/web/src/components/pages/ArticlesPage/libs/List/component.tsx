import { css } from '@emotion/core';
import { List as ListFromComponents, ListItemButton, P } from 'components';
import { colors, typography } from 'core';
import React from 'react';

import { Props } from './props';

export const List: React.FC<Props> = ({ articles, ...rest }: Props) => (
  <ListFromComponents {...rest}>
    {articles?.map((article, i) => (
      <ListItemButton
        key={article.title + i}
        link
        type="a"
        href={`article/${article.id}`}
        className="tw-px-2 tw-my-1"
        css={css`
          border-radius: 0.5rem;
          background-color: ${colors.variants.Brand.MoreExtraLightPurple};
          &:hover {
            background-color: ${colors.variants.Brand.ExtraLightPurple};
          }
        `}
      >
        <P
          className="mb-2"
          typography={typography.variants.Content.Regular16}
          css={css`
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
            text-align: left;
            &:hover {
              color: ${colors.variants.Brand.Purple};
              text-decoration: underline ${colors.variants.Brand.Purple};
            }
            cursor: pointer;
          `}
        >
          {i + 1}. {article.title}
        </P>
      </ListItemButton>
    ))}
  </ListFromComponents>
);
