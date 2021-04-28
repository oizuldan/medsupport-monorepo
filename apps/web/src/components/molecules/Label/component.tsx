import { Typography } from 'components';
import { colors, typography } from 'core';
import React, { FC } from 'react';

import { Props } from './props';

export const Label: FC<Props> = ({ children, mainText, helperText, color, ...rest }: Props) => (
  <label {...rest}>
    {mainText && (
      <Typography
        as="p"
        className="mb-1"
        color={colors.variants.Neutral.Grey}
        typography={typography.variants.Element.SemiBold12}
      >
        {mainText}
      </Typography>
    )}
    {children}
    {helperText && (
      <Typography
        as="p"
        className="mt-1"
        color={color}
        typography={typography.variants.Element.Regular12}
      >
        {helperText}
      </Typography>
    )}
  </label>
);

Label.defaultProps = {
  color: colors.variants.Neutral.Grey,
};
