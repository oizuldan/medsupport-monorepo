import styled from '@emotion/styled';
import classNames from 'classnames';
import { Button, ButtonLink, ButtonVariants } from 'components';
import { colors, typography } from 'core';
import React, { forwardRef } from 'react';

import { Props } from './props';

// eslint-disable-next-line react/display-name
const ItemButtonBase = forwardRef(({ className, children, ...rest }: Props, ref) => {
  const Component = 'link' in rest ? ButtonLink : Button;
  return (
    <Component
      variant={ButtonVariants.Flat}
      color={colors.variants.Text.Primary}
      typography={typography.variants.Heading.Regular22}
      className={classNames('w-100', 'justify-content-between', className)}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(rest as any)}
      ref={ref}
    >
      {children}
    </Component>
  );
});

export const ItemButton = styled(ItemButtonBase)<Props>`
  border-radius: 0;
`;
