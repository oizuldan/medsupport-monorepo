import styled from '@emotion/styled';

import { Props } from './props';

export const Element = styled.div<Props>`
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  width: auto;
  top: 0;
  ${(props) => props.direction}: 0;
`;
