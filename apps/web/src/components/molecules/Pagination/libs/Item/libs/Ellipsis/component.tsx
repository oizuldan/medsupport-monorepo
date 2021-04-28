import styled from '@emotion/styled';
import { colors } from 'core';
import React, { FC } from 'react';

import { Props } from './props';

const EllipsisBase: FC<Props> = ({ ...rest }: Props) => (
  <div {...rest}>
    <div />
    <div />
    <div />
  </div>
);

export const Ellipsis = styled(EllipsisBase)<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  div {
    width: 4px;
    height: 4px;
    margin-right: 2px;
    background: ${colors.variants.Neutral.Black};
    border-radius: 50%;

    &:last-child {
      margin-right: 0;
    }
  }
`;
