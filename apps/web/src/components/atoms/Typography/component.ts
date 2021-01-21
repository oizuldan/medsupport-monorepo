import { css, SerializedStyles } from '@emotion/core';
import styled from '@emotion/styled';
import { colors, typography } from 'core';
import { createElement, CSSProperties, FC } from 'react';

import { Props } from './props';
import { HeadingProps } from './types/HeadingProps';
import { ParagraphProps } from './types/ParagraphProps';

const colorSelectors: ReadonlyArray<keyof CSSProperties> = ['color', 'fill'];
const defaultStyles: (props: unknown) => SerializedStyles = () => css({ margin: 0, padding: 0 });

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
  typography.styles.titleBold60,
  colors.styles.extendByVariant(colorSelectors),
);

export const H1Regular = styled.h1<HeadingProps>(
  defaultStyles,
  typography.styles.titleRegular60,
  colors.styles.extendByVariant(colorSelectors),
);

export const H2 = styled.h2<HeadingProps>(
  defaultStyles,
  typography.styles.titleBold34,
  colors.styles.extendByVariant(colorSelectors),
);
export const H3 = styled.h3<HeadingProps>(
  defaultStyles,
  typography.styles.titleBold24,
  colors.styles.extendByVariant(colorSelectors),
);
export const H4 = styled.h4<HeadingProps>(
  defaultStyles,
  typography.styles.titleBold20,
  colors.styles.extendByVariant(colorSelectors),
);
export const H5 = styled.h6<HeadingProps>(
  defaultStyles,
  typography.styles.titleBold16,
  colors.styles.extendByVariant(colorSelectors),
);
