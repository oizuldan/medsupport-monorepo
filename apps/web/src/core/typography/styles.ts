import { css, Interpolation, SerializedStyles } from '@emotion/core';

import * as fonts from './fonts';
import { AnyTypography } from './types/AnyTypoghraphy';
import { PropsBase } from './types/PropsBase';
import * as variants from './variants';

export const headingSemiBold34 = css`
  font-weight: 600;
  font-size: 34px;
  line-height: 41px;
  ${fonts.montserrat}
`;

export const headingBold34 = css`
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  ${fonts.montserrat}
`;

export const headingMedium34 = css`
  font-weight: 500;
  font-size: 34px;
  line-height: 41px;
  ${fonts.montserrat}
`;

export const headingRegular34 = css`
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;
  ${fonts.montserrat}
`;

export const headingSemiBold28 = css`
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  ${fonts.montserrat}
`;

export const headingBold28 = css`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  ${fonts.montserrat}
`;

export const headingMedium28 = css`
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  ${fonts.montserrat}
`;

export const headingRegular28 = css`
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  ${fonts.montserrat}
`;

export const headingSemiBold22 = css`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  ${fonts.montserrat}
`;

export const headingBold22 = css`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  ${fonts.montserrat}
`;

export const headingMedium22 = css`
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  ${fonts.montserrat}
`;

export const headingRegular22 = css`
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  ${fonts.montserrat}
`;

export const headingSemiBold17 = css`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  ${fonts.montserrat}
`;

export const headingBold17 = css`
  font-weight: 700;
  font-size: 17px;
  line-height: 22px;
  ${fonts.montserrat}
`;

export const headingMedium17 = css`
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  ${fonts.montserrat}
`;

export const headingRegular17 = css`
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
  line-height: 22px;
  ${fonts.openSans}
`;

export const elementSemiBold20 = css`
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  ${fonts.openSans}
`;

export const elementBold20 = css`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  ${fonts.openSans}
`;

export const elementRegular16 = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  ${fonts.openSans}
`;

export const elementSemiBold16 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  ${fonts.openSans}
`;

export const elementBold16 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
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
  [variants.Heading.Bold34]: headingBold34,
  [variants.Heading.SemiBold34]: headingSemiBold34,
  [variants.Heading.Medium34]: headingMedium34,
  [variants.Heading.Regular34]: headingRegular34,
  [variants.Heading.Bold28]: headingBold28,
  [variants.Heading.SemiBold28]: headingSemiBold28,
  [variants.Heading.Medium28]: headingMedium28,
  [variants.Heading.Regular28]: headingRegular28,
  [variants.Heading.Bold22]: headingBold22,
  [variants.Heading.SemiBold22]: headingSemiBold22,
  [variants.Heading.Medium22]: headingMedium22,
  [variants.Heading.Regular22]: headingRegular22,
  [variants.Heading.Bold17]: headingBold17,
  [variants.Heading.SemiBold17]: headingSemiBold17,
  [variants.Heading.Medium17]: headingMedium17,
  [variants.Heading.Regular17]: headingRegular17,
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
