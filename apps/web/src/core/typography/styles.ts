import { css, Interpolation, SerializedStyles } from '@emotion/core';

import * as fonts from './fonts';
import { AnyTypography } from './types/AnyTypoghraphy';
import { PropsBase } from './types/PropsBase';
import * as variants from './variants';

export const titleSemiBold34 = css`
  font-weight: 600;
  font-size: 34px;
  line-height: 41px;
  ${fonts.montserrat}
`;

export const titleBold34 = css`
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  ${fonts.montserrat}
`;

export const titleMedium34 = css`
  font-weight: 500;
  font-size: 34px;
  line-height: 41px;
  ${fonts.montserrat}
`;

export const titleRegular34 = css`
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;
  ${fonts.montserrat}
`;

export const subtitleSemiBold28 = css`
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  ${fonts.montserrat}
`;

export const subtitleBold28 = css`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  ${fonts.montserrat}
`;

export const subtitleMedium28 = css`
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  ${fonts.montserrat}
`;

export const subtitleRegular28 = css`
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  ${fonts.montserrat}
`;

export const mainSemiBold22 = css`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  ${fonts.montserrat}
`;

export const mainBold22 = css`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  ${fonts.montserrat}
`;

export const mainMedium22 = css`
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  ${fonts.montserrat}
`;

export const mainRegular22 = css`
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  ${fonts.montserrat}
`;

export const menuSemiBold17 = css`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  ${fonts.montserrat}
`;

export const menuBold17 = css`
  font-weight: 700;
  font-size: 17px;
  line-height: 22px;
  ${fonts.montserrat}
`;

export const menuMedium17 = css`
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  ${fonts.montserrat}
`;

export const menuRegular17 = css`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  ${fonts.montserrat}
`;

export const contentRegular24 = css`
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  ${fonts.openSans}
`;

export const contentRegular20 = css`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  ${fonts.openSans}
`;

export const contentRegular16 = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  ${fonts.openSans}
`;

export const elementRegular20 = css`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  ${fonts.openSans}
`;

export const elementSemiBold20 = css`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  ${fonts.openSans}
`;

export const elementBold20 = css`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  ${fonts.openSans}
`;

export const elementRegular16 = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  ${fonts.openSans}
`;

export const elementSemiBold16 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  ${fonts.openSans}
`;

export const elementBold16 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  ${fonts.openSans}
`;

export const elementRegular12 = css`
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  ${fonts.openSans}
`;

export const elementSemiBold12 = css`
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  ${fonts.openSans}
`;

export const elementBold12 = css`
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  ${fonts.openSans}
`;

const extendByVariantBase = (variantStyles: Record<AnyTypography, SerializedStyles>) => <
  P extends Partial<PropsBase>
>(
  props: P,
): Interpolation<P> => typeof props.typography !== 'undefined' && variantStyles[props.typography];

export const extendByVariant = extendByVariantBase({
  [variants.Title.Bold34]: titleBold34,
  [variants.Title.SemiBold34]: titleSemiBold34,
  [variants.Title.Medium34]: titleMedium34,
  [variants.Title.Regular34]: titleRegular34,
  [variants.Subtitle.Bold28]: subtitleBold28,
  [variants.Subtitle.SemiBold28]: subtitleSemiBold28,
  [variants.Subtitle.Medium28]: subtitleMedium28,
  [variants.Subtitle.Regular28]: subtitleRegular28,
  [variants.Main.Bold22]: mainBold22,
  [variants.Main.SemiBold22]: mainSemiBold22,
  [variants.Main.Medium22]: mainMedium22,
  [variants.Main.Regular22]: mainRegular22,
  [variants.Menu.Bold17]: menuBold17,
  [variants.Menu.SemiBold17]: menuSemiBold17,
  [variants.Menu.Medium17]: menuMedium17,
  [variants.Menu.Regular17]: menuRegular17,
  [variants.Content.Regular24]: contentRegular24,
  [variants.Content.Regular20]: contentRegular20,
  [variants.Content.Regular16]: contentRegular16,
  [variants.Element.Regular20]: elementRegular20,
  [variants.Element.SemiBold20]: elementSemiBold20,
  [variants.Element.Bold20]: elementBold20,
  [variants.Element.Regular16]: elementRegular16,
  [variants.Element.SemiBold16]: elementSemiBold16,
  [variants.Element.Bold16]: elementBold16,
  [variants.Element.Regular12]: elementRegular12,
  [variants.Element.SemiBold12]: elementSemiBold12,
  [variants.Element.Bold12]: elementBold12,
});
