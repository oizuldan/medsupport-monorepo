import { css } from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { colors, services, typography } from 'core';

import { Props } from './props';
import * as styles from './styles';
import { Sizes } from './types/Sizes';
import { Variants } from './types/Variants';

const { variants } = colors;

export const Root = styled('button', {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'loading',
})<Props>`
  align-items: center;
  justify-content: center;
  text-align: center;
  display: inline-flex;
  border: 0;
  padding: 0 12px;
  cursor: pointer;
  text-decoration: none;
  appearance: none;
  background: none;
  white-space: nowrap;
  transition: 0.1s background-color;
  height: ${(props) => props.size}px;
  min-width: ${(props) => props.size}px;
  border-radius: ${(props) => (props.bordered ? 4 : props.size)}px;

  ${(props) =>
    props.disabled &&
    css`
      user-select: none;
      pointer-events: none;
      opacity: ${!(props as services.LoadingProps).loading && 0.5};
    `}

  ${(props) =>
    props.variant === Variants.Flat &&
    props.underlined &&
    css`
      text-decoration: underline;
      text-underline-style: dotted;
    `}

  ${services.match('size', {
    [Sizes.Medium]: typography.styles.smallBold12,
    [Sizes.Large]: typography.styles.mainBold16,
  })}

  ${typography.styles.extendByVariant}
  // Text-transform should override typography styles above.
  text-transform: ${(props) => props.textTransform};

  ${services.match('variant', {
    [Variants.Raised]: services.match('color', {
      [variants.All.Purple]: styles.raisedVariantColors(
        variants.All.White,
        variants.All.Purple,
        variants.All.PurpleDark,
      ),
      [variants.All.PurpleLight]: styles.raisedVariantColors(
        variants.All.White,
        variants.All.PurpleLight,
        variants.All.PurpleDark,
      ),
      [variants.All.GreenLight]: styles.raisedVariantColors(
        variants.All.White,
        variants.All.GreenLight,
        variants.All.GreenDark,
      ),
    }),
    [Variants.Outlined]: services.match('color', {
      [variants.All.Purple]: styles.outlinedVariantColors(variants.All.Purple),
    }),
    [Variants.Flat]: services.match('color', {}, styles.flatVariantColors),
  })}
`;

Root.defaultProps = {
  textTransform: 'uppercase',
  typography: typography.variants.Main.Bold16,
  color: variants.All.PurpleLight,
  variant: Variants.Raised,
  size: Sizes.Large,
};
