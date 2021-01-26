import classNames from 'classnames';
import { Card } from 'components';
import { colors, services } from 'core';
import React, { FC } from 'react';

const toastStyles: Record<string, colors.variants.AnyColor> = {
  [services.ToastTypes.Success]: colors.variants.Success.Green1,
  [services.ToastTypes.Warning]: colors.variants.Warning.Orange1,
  [services.ToastTypes.Error]: colors.variants.Error.Red1,
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
