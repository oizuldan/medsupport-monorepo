import React, { FC, ReactNode } from 'react';

interface Props {
  variant?: 'rose' | 'teal';
  title: ReactNode;
  text?: ReactNode;
  button: ReactNode;
  className?: string;
}

export const CtaBand: FC<Props> = ({ variant, title, text, button, className = '' }) => {
  const cls = `cta-band${variant === 'teal' ? ' cta-band--teal' : ''} ${className}`.trim();
  return (
    <div className={cls}>
      <h2 className="h-lg">{title}</h2>
      {text && <p className="lead">{text}</p>}
      <div className="cta-band__btns">{button}</div>
    </div>
  );
};
