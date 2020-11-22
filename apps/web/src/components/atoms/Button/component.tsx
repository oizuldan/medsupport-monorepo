import styled from '@emotion/styled';

import { Props } from './props';

export const Button = styled.button<Props>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 10%;
  /* fill: ${(props) => props.color}; */
  /* background-color: ${(props) => props.backgroundColor}; */
`;
