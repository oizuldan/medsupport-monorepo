import styled from '@emotion/styled';
import { colors } from 'core';

import { Props } from './props';

export const List = styled.ul<Props>`
  margin: 0;
  padding: 0;
  list-style: none;
  ${colors.styles.extendByVariant('backgroundColor')}
`;
