import styled from '@emotion/styled';
import { colors } from 'core';
import { createElement, FC } from 'react';

import { Props } from './props';

const InteractiveBase: FC<Props> = ({ children, type, ...rest }: Props) => {
  return createElement(
    'link' in rest ? 'a' : 'button',
    {
      type: type || 'button',
      ...rest,
    },
    children,
  );
};

export const Interactive = styled(InteractiveBase)<Props>`
  cursor: pointer;
  background: none;
  border: none;
  text-transform: none;
  text-align: start;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: ${(props) => props.color || colors.variants.Neutral.LightGrey};
  }
`;
