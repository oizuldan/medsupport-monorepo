import React, { FC, ReactNode } from 'react';

type Variant = 'rose' | 'teal' | 'ghost' | 'ghost-light' | 'ghost-teal';

interface Props {
  href?: string;
  variant?: Variant;
  lg?: boolean;
  block?: boolean;
  withArrow?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

export const Btn: FC<Props> = ({
  href,
  variant = 'rose',
  lg,
  block,
  withArrow,
  onClick,
  type,
  disabled,
  className = '',
  children,
}) => {
  const cls = `btn btn--${variant}${lg ? ' btn--lg' : ''}${block ? ' btn--block' : ''} ${className}`.trim();
  const inner = (
    <>
      {children}
      {withArrow && (
        <span className="arr" aria-hidden="true">
          →
        </span>
      )}
    </>
  );
  return href ? (
    <a className={cls} href={href}>
      {inner}
    </a>
  ) : (
    <button className={cls} type={type ?? 'button'} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  );
};
