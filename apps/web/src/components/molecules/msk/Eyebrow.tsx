import React, { FC, ReactNode } from 'react';

type Variant = 'rose' | 'teal';

interface Props {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export const Eyebrow: FC<Props> = ({ variant, className = '', children }) => {
  const cls = `eyebrow${variant ? ` eyebrow--${variant}` : ''} ${className}`.trim();
  return <p className={cls}>{children}</p>;
};
