import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { colors } from 'core';
import { createElement, FC } from 'react';

import { Props } from './props';

const ButtonBase: FC<Props> = ({ children, ...rest }: Props) =>
  createElement('button', { ...rest }, children);

export const Button = styled(ButtonBase, {
  shouldForwardProp: isPropValid,
})<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border: none;
  background: ${colors.variants.Neutral.White};
  cursor: pointer;

  ${(props) =>
    props.selected &&
    `
      border-radius: 4px;
      background-color: ${colors.variants.Brand.ExtraLightPurple};
    `}
`;
