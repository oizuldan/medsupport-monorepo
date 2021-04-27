import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors, services } from 'core';
import React, { FC } from 'react';

import { Props } from './props';
import * as styles from './styles';

const { variants } = colors;

const SkeletonBase: FC<Props> = ({ borderRadius: _b, opacity: _o, rows: _r, ...rest }: Props) => (
  <span {...rest}>&zwnj;</span>
);

export const Skeleton = styled(SkeletonBase)<Props>`
  color: transparent;
  user-select: none;
  display: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  line-height: inherit;
  animation: ${styles.shineAnimation} 1.5s infinite;
  ${({ width, height, borderRadius, opacity }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${borderRadius};
    opacity: ${opacity};
  `}
  ${styles.shineBase}
  ${colors.styles.extendByVariant('backgroundColor')}
  ${services.match('color', {
    [variants.Background.Primary]: styles.shineGradient(
      variants.Background.Primary,
      variants.Brand.ExtraLightPurple,
    ),
    [variants.Background.Secondary]: styles.shineGradient(
      variants.Background.Secondary,
      variants.Neutral.Grey,
    ),
  })}
`;

Skeleton.defaultProps = {
  color: colors.variants.Background.Primary,
};
