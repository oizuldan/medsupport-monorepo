import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from 'core';

import { Props } from './props';

export const DropdownHeader = styled.div<Props>`
  &:first-child {
    border-top: 2px solid ${colors.variants.Neutral.LightGrey};
  }
  ${(props) =>
    css`
      background-color: ${props.onHover || props.open
        ? colors.variants.Brand.MoreExtraLightPurple
        : colors.variants.Neutral.White};
      border-bottom: 2px solid ${colors.variants.Neutral.LightGrey};
    `}
`;
