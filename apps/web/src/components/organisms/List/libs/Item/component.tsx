import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors, services, typography } from 'core';

import { Props } from './props';

export const Item = styled.li<Props>`
  ${(props) =>
    props.interactive &&
    services.match('color', {
      [colors.variants.All.White]: css`
        color: ${colors.variants.All.Black};
        &:hover {
          background-color: ${colors.variants.All.GreyLight};
        }
      `,
    })}
  ${typography.styles.extendByVariant}
`;

Item.defaultProps = {
  typography: typography.variants.Main.Regular16,
  color: colors.variants.All.White,
};
