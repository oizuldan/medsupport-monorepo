import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors, services, typography } from 'core';

import { Props } from './props';

export const Item = styled.li<Props>`
  ${(props) =>
    props.interactive &&
    services.match('color', {
      [colors.variants.Background.Primary]: css`
        color: ${colors.variants.Text.Primary};
        &:hover {
          background-color: ${colors.variants.Neutral.LightGrey};
        }
      `,
    })}
  ${typography.styles.extendByVariant}
`;

Item.defaultProps = {
  typography: typography.variants.Main.Regular22,
  color: colors.variants.Neutral.White,
};
