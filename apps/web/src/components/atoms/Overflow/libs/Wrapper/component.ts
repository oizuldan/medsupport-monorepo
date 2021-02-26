import styled from '@emotion/styled';

import { Props } from './props';

export const Wrapper = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${(props) => props.zIndex};
`;
