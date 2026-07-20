import React, { FC, useRef } from 'react';
import { useCountUp } from 'core/hooks';

interface Props {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export const StatCounter: FC<Props> = ({ value, suffix, label, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(ref, value);
  return (
    <div className={className}>
      <div className="n">
        <span ref={ref}>0</span>
        {suffix && <span className="suffix">{suffix}</span>}
      </div>
      <div className="l">{label}</div>
    </div>
  );
};
