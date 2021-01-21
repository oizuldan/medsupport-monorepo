import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from 'core';

import { Props } from './props';

export const Card = styled.div<Props>`
  ${(props) =>
    !props.disableBorder &&
    css`
      border: 1px solid ${colors.variants.All.Grey};
      border-radius: 4px;
      border-color: ${props.borderColor};
    `}

  ${colors.styles.extendByVariant('backgroundColor')}
`;
