import classNames from 'classnames';
import { Card } from 'components';
import { colors, services } from 'core';
import React, { FC } from 'react';

const toastStyles: Record<string, colors.variants.AnyColor> = {
  [services.ToastTypes.Success]: colors.variants.System.Success,
  [services.ToastTypes.Warning]: colors.variants.System.Warning,
  [services.ToastTypes.Error]: colors.variants.System.Danger,
};

export const Toast: FC<services.ToastProps> = ({
  text,
  type,
  className,
  ...rest
}: services.ToastProps) => {
  const color = toastStyles[type] || '';

  return (
    <Card
      className={classNames(className, 'd-flex', 'p-3')}
      color={color}
      borderColor={color}
      {...rest}
    >
      <div className="ml-2">{text}</div>
    </Card>
  );
};
