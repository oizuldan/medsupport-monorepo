import styled from '@emotion/styled';
import { colors, typography } from 'core';

import { OrderedProps, Props } from './props';

export const List = styled.ul<Props>`
  margin: 0;
  padding: 0;
  list-style: none;
  ${colors.styles.extendByVariant('backgroundColor')}
`;

export const OrderedList = styled.ol<OrderedProps>`
  margin: 0;
  padding: 0;
  ${typography.styles.extendByVariant}
`;

OrderedList.defaultProps = {
  typography: typography.variants.Content.Regular16,
};
