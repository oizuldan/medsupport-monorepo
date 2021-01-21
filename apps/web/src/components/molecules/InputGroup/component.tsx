import classNames from 'classnames';
import React, { cloneElement, forwardRef, useEffect, useMemo, useRef, useState } from 'react';

import { Element } from './libs/Element';
import { Props } from './props';

// eslint-disable-next-line react/display-name
export const InputGroup = forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const { className, leftElement, rightElement, children, ...rest } = props;

  const [paddingLeft, setPaddingLeft] = useState<number>();
  const [paddingRight, setPaddingRight] = useState<number>();

  const leftElementRef = useRef<HTMLDivElement>(null);
  const rightElementRef = useRef<HTMLDivElement>(null);

  const style = useMemo(() => ({ paddingLeft, paddingRight }), [paddingLeft, paddingRight]);

  useEffect(() => {
    if (leftElementRef.current) setPaddingLeft(leftElementRef.current.offsetWidth);
    if (rightElementRef.current) setPaddingRight(rightElementRef.current.offsetWidth);
  }, []);

  return (
    <div className={classNames(className, 'position-relative')} {...rest} ref={ref}>
      {leftElement && (
        <Element direction="left" ref={leftElementRef}>
          {leftElement}
        </Element>
      )}
      {cloneElement(children, { style })}
      {rightElement && (
        <Element direction="right" ref={rightElementRef}>
          {rightElement}
        </Element>
      )}
    </div>
  );
});
