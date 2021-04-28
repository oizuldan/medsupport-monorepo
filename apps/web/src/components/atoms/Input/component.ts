import styled from '@emotion/styled';
import { colors, typography } from 'core';
import { cloneElement, createElement, forwardRef } from 'react';

import { Props } from './props';

// eslint-disable-next-line react/display-name
const InputBase = forwardRef<HTMLInputElement, Props>(
  // eslint-disable-next-line react/prop-types
  ({ element = createElement('input'), ...rest }: Props, ref) =>
    cloneElement(element, { ...rest, ref }),
);

export const Input = styled(InputBase)<Props>`
  height: 40px;
  width: 100%;
  transition: 0.1s padding;
  background-color: ${colors.variants.Background.Primary};
  border: 1px solid ${(props) => props.color || colors.variants.Neutral.LightGrey};
  border-radius: 5px;
  padding: 1rem;
  ${typography.styles.extendByVariant}

  &::placeholder {
    color: ${(props) => props.placeholderColor || colors.variants.Neutral.Grey};
    line-height: normal;
  }

  :focus {
    outline: none;
    border-width: 1.5px;
    border-color: ${(props) => props.focusColor || props.color || colors.variants.Brand.Purple};
  }
`;

Input.defaultProps = {
  typography: typography.variants.Element.Regular16,
};
