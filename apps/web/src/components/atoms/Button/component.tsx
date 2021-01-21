import { services } from 'core';
import React, { ComponentType, FC, forwardRef, RefAttributes } from 'react';

import { Label } from './libs/Label';
import { Root, RootProps } from './libs/Root';
import { Props } from './props';
import { LinkProps } from './types/LinkProps';

const RootLink = Root.withComponent('a') as ComponentType<
  LinkProps & RefAttributes<HTMLAnchorElement>
>;

RootLink.defaultProps = {
  type: 'button',
  ...(Root.defaultProps as RootProps),
};

const createRootProps = <P extends LinkProps | Props>(props: P): P => {
  const disabled = (props as services.LoadingProps).loading || props.disabled;
  const tabIndex = disabled ? -1 : props.tabIndex;
  return { ...props, disabled, tabIndex };
};

// eslint-disable-next-line react/display-name
export const ButtonLink: FC<LinkProps & RefAttributes<HTMLAnchorElement>> = forwardRef(
  ({ children, ...rest }: LinkProps, ref) => (
    <RootLink {...createRootProps(rest)} ref={ref}>
      <Label>{children}</Label>
    </RootLink>
  ),
);

// eslint-disable-next-line react/display-name
export const Button: FC<Props & RefAttributes<HTMLButtonElement>> = forwardRef(
  ({ children, ...rest }: Props, ref) => (
    <Root {...createRootProps(rest)} ref={ref}>
      <Label>{children}</Label>
    </Root>
  ),
);
