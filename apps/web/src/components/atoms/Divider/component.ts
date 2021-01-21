import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors, services } from 'core';

import { Props } from './props';
import { Directions } from './types/Directions';

export const Divider = styled.hr<Props>`
  margin: 0;
  border: 0;
  ${colors.styles.extendByVariant('backgroundColor')}
  ${services.match('direction', {
    [Directions.Horizontal]: css`
      height: 1px;
      width: 100%;
    `,
    [Directions.Vertical]: css`
      width: 1px;
      height: 100%;
    `,
  })}
`;

Divider.defaultProps = {
  direction: Directions.Horizontal,
  color: colors.variants.All.GreyLight,
};
