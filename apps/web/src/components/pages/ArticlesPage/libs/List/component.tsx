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
        className="px-0"
      >
        <P
          className="mb-2"
          typography={typography.variants.Content.Regular16}
          css={css`
            overflow: hidden;
            text-overflow: ellipsis;
            &:hover {
              color: ${colors.variants.Brand.Purple};
            }
          `}
        >
          {article.title}
        </P>
      </ListItemButton>
    ))}
  </ListFromComponents>
);
