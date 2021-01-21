import { css } from '@emotion/core';
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
  color: colors.AnyColor,
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
  staleInner: colors.AnyColor,
  staleBackground: colors.AnyColor,
  active: colors.AnyColor,
): services.FI<Partial<services.LoadingProps>> => () => css`
  color: ${staleInner};
  fill: ${staleInner};
  background-color: ${staleBackground};
  &:active {
    background-color: ${active};
  }
`;
