import styled from '@emotion/styled';
import { colors } from 'core';

import { Props } from './props';

export const Dot = styled.div<Props>`
  height: ${(props) => (props.active ? '15px' : '11px')};
  width: ${(props) => (props.active ? '15px' : '11px')};
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? colors.variants.Neutral.Grey : colors.variants.Neutral.LightGrey};
  transition: height 0.3s ease;
  transition: width 0.3s ease;
`;
