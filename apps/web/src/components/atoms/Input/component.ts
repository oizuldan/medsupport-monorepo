import styled from '@emotion/styled';
import { colors, typography } from 'core';
import { cloneElement, createElement, forwardRef } from 'react';

import { Props } from './props';

// eslint-disable-next-line react/display-name
const InputBase = forwardRef<HTMLInputElement, Props>(
  // No, its not missing.
  // eslint-disable-next-line react/prop-types
  ({ element = createElement('input'), ...rest }: Props, ref) =>
    cloneElement(element, { ...rest, ref }),
);

export const Input = styled(InputBase)<Props>`
  height: 40px;
  width: 100%;
  transition: 0.1s padding;
  background-color: ${colors.variants.Background.Primary};
  border: 0;
  border-bottom: 1px solid ${(props) => props.color || colors.variants.Neutral.Grey};
  ${typography.styles.extendByVariant}

  &::placeholder {
    color: ${colors.variants.Neutral.Grey};
    line-height: normal;
  }

  :focus {
    outline: none;
    border-bottom-width: 2px;
    border-bottom-color: ${(props) =>
      props.focusColor || props.color || colors.variants.Brand.Purple};
  }
`;

Input.defaultProps = {
  typography: typography.variants.Heading.Regular22,
};
