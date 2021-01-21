import { css, Interpolation, SerializedStyles } from '@emotion/core';

import * as fonts from './fonts';
import { AnyTypography } from './types/AnyTypoghraphy';
import { PropsBase } from './types/PropsBase';
import * as variants from './variants';

export const titleBold60 = css`
  font-weight: 700;
  font-size: 60px;
  line-height: 73px;
  ${fonts.montserrat}
`;

export const titleRegular60 = css`
  font-weight: 400;
  font-size: 60px;
  line-height: 73px;
  ${fonts.montserrat}
`;

export const titleBold34 = css`
  font-weight: 700;
  font-size: 34px;
  line-height: 44px;
  ${fonts.montserrat}
`;

export const titleBold24 = css`
  font-weight: 800;
  font-size: 24px;
  line-height: 38px;
  ${fonts.montserrat}
`;

export const titleBold20 = css`
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
  ${fonts.montserrat}
`;

export const titleBold16 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 19.5px;
  ${fonts.montserrat}
`;

export const mainBold16 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  ${fonts.raleway}
`;

export const mainRegular16 = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  ${fonts.raleway}
`;

export const menu14 = css`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  ${fonts.montserrat}
`;

export const additional12 = css`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  ${fonts.montserrat}
`;

export const subtitleBold24 = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 38px;
  ${fonts.raleway}
`;

export const subtitleRegular24 = css`
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  ${fonts.montserrat}
`;

export const smallBold12 = css`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  ${fonts.raleway}
`;

export const smallRegular12 = css`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  ${fonts.raleway}
`;

const extendByVariantBase = (variantStyles: Record<AnyTypography, SerializedStyles>) => <
  P extends Partial<PropsBase>
>(
  props: P,
): Interpolation<P> => typeof props.typography !== 'undefined' && variantStyles[props.typography];

export const extendByVariant = extendByVariantBase({
  [variants.Title.Bold60]: titleBold60,
  [variants.Title.Regular60]: titleRegular60,
  [variants.Title.Bold34]: titleBold34,
  [variants.Title.Bold24]: titleBold24,
  [variants.Title.Bold20]: titleBold20,
  [variants.Title.Bold16]: titleBold16,
  [variants.Subtitle.Bold24]: subtitleBold24,
  [variants.Subtitle.Regular24]: subtitleRegular24,
  [variants.Main.Bold16]: mainBold16,
  [variants.Main.Regular16]: mainRegular16,
  [variants.Menu.Bold14]: menu14,
  [variants.Additional.Regular12]: additional12,
  [variants.Small.Bold12]: smallBold12,
  [variants.Small.Regular12]: smallRegular12,
});
