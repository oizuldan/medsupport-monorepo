import { css } from '@emotion/core';
import { skeletonStyles } from 'components';
import { colors, services } from 'core';
import { rgba } from 'emotion-rgba/dist';

export const flatVariantColors: services.FI<colors.PropsBase> = ({ color }) => css`
  color: ${color};
  fill: ${color};
  &:active {
    background-color: ${rgba(color, 0.1)};
  }
`;

export const outlinedVariantColors = (
  color: colors.variants.AllColors,
): services.FI<Partial<services.LoadingProps>> => ({ loading }) => css`
  border: 1px solid ${color};
  ${flatVariantColors({ color })}
  ${loading &&
  css`
    color: transparent;
    fill: transparent;
  `}
`;

export const raisedVariantColors = (
  staleInner: colors.variants.AllColors,
  staleBackground: colors.variants.AllColors,
  active: colors.variants.AllColors,
): services.FI<Partial<services.LoadingProps>> => ({ loading }) => css`
  color: ${staleInner};
  fill: ${staleInner};
  background-color: ${staleBackground};
  &:active {
    background-color: ${active};
  }
  ${loading &&
  css(skeletonStyles.shineBase, skeletonStyles.shineGradient(staleBackground, active), {
    animation: `${skeletonStyles.shineAnimation} 1.5s infinite`,
    color: 'transparent',
    fill: 'transparent',
  })}
`;
