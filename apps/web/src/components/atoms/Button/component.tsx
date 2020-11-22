import styled from '@emotion/styled';

import { Props } from './props';

export const Button = styled.button<Props>`
  align-items: center;
  justify-content: center;
  text-align: center;
  display: inline-flex;
  border: 0;
  padding: 0 12px;
  cursor: pointer;
  text-decoration: none;
  appearance: none;
  background: none;
  white-space: nowrap;
  transition: 0.1s background-color;
  border-radius: 4px;
  &:active {
    background-color: rgba(64, 17, 77, 0.1);
  }
  &:focus {
    border: 0;
  }
  &:hover {
    background-color: rgba(64, 17, 77, 0.05);
  }
  /* fill: ${(props) => props.color}; */
  /* background-color: ${(props) => props.backgroundColor}; */
`;
