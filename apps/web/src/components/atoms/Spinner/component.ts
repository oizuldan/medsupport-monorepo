import styled from '@emotion/styled';
import { colors } from 'core';
import { rgba } from 'emotion-rgba';

import { Props } from './props';
import { spin } from './styles';

export const Spinner = styled.div<Props>`
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: ${spin} ${({ rotationTime }) => rotationTime}s linear infinite;
  border: ${({ size }) => Number(size) / 6}px solid ${({ color }) => rgba(String(color), 0.2)};
  border-top-color: ${({ color }) => color};
`;

Spinner.defaultProps = {
  size: 35,
  rotationTime: 0.75,
  color: colors.variants.All.Orange,
};
