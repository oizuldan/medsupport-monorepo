import { css, SerializedStyles } from '@emotion/core';
import styled from '@emotion/styled';
import { colors, typography } from 'core';
import { createElement, CSSProperties, FC } from 'react';

import { Props } from './props';
import { HeadingProps } from './types/HeadingProps';
import { ParagraphProps } from './types/ParagraphProps';

const colorSelectors: ReadonlyArray<keyof CSSProperties> = ['color', 'fill'];
const defaultStyles: (props: unknown) => SerializedStyles = () =>
  css({ margin: 0, padding: 0, color: colors.variants.Text.Primary });

const TypographyBase: FC<Props> = ({ as, children, ...rest }: Props) =>
  createElement(as, rest, children);

export const Typography = styled(TypographyBase)<Props>(
  defaultStyles,
  typography.styles.extendByVariant,
  colors.styles.extendByVariant(colorSelectors),
);

export const P = styled.p<ParagraphProps>(
  defaultStyles,
  typography.styles.extendByVariant,
  colors.styles.extendByVariant(colorSelectors),
);

export const H1 = styled.h1<HeadingProps>(
  defaultStyles,
  typography.styles.headingBold34,
  colors.styles.extendByVariant(colorSelectors),
);

export const H1Regular = styled.h1<HeadingProps>(
  defaultStyles,
  typography.styles.headingRegular34,
  colors.styles.extendByVariant(colorSelectors),
);

export const H2 = styled.h2<HeadingProps>(
  defaultStyles,
  typography.styles.headingBold28,
  colors.styles.extendByVariant(colorSelectors),
);
export const H3 = styled.h3<HeadingProps>(
  defaultStyles,
  typography.styles.headingBold22,
  colors.styles.extendByVariant(colorSelectors),
);
export const H4 = styled.h4<HeadingProps>(
  defaultStyles,
  typography.styles.headingBold17,
  colors.styles.extendByVariant(colorSelectors),
);
export const H5 = styled.h6<HeadingProps>(
  defaultStyles,
  typography.styles.elementBold12,
  colors.styles.extendByVariant(colorSelectors),
);
