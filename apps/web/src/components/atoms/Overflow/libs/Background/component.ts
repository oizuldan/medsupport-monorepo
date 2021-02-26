import styled from '@emotion/styled';

import { Props } from './props';
import { fadeIn, fadeOut } from './styles';

export const Background = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${(props) => props.color};
  cursor: ${(props) => props.closeOnClick && 'pointer'};
  animation: ${(props) => (props.active ? fadeIn : fadeOut)} 0.27s;
`;
