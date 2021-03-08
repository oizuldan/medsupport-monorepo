import { colors } from 'core';
import React, { FC, useCallback, useEffect, useState } from 'react';

import { Background } from './libs/Background';
import { Wrapper } from './libs/Wrapper';
import { Props } from './props';

export const Overflow: FC<Props> = (props: Props) => {
  const {
    color = colors.variants.Background.Grey,
    active: propActive,
    closeOnEscape,
    closeOnClick,
    onChange,
    children,
    ...rest
  } = props;

  const [innerActive, setInnerActive] = useState(false);
  const active = propActive !== undefined ? propActive : innerActive;
  const [shouldRender, setRender] = useState(active);

  const onAnimationEnd = useCallback((): void => {
    if (!active) setRender(active);
  }, [active]);

  const onClick = useCallback((): void => {
    if (!active) return;
    if (closeOnClick) {
      if (onChange) onChange(!active);
      setInnerActive(!active);
    }
  }, [active, closeOnClick, onChange]);

  useEffect(() => {
    const onEscape = (event: DocumentEventMap['keydown']): void => {
      if (!active) return;
      if (event.key === 'Escape' && closeOnEscape) {
        if (onChange) onChange(!active);
        setInnerActive(!active);
      }
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [active, closeOnEscape, onChange]);

  useEffect(() => {
    if (active) setRender(active);
  }, [active]);

  return shouldRender ? (
    <Wrapper {...rest}>
      {children}
      <Background
        color={color}
        active={active}
        onClick={onClick}
        closeOnClick={closeOnClick}
        onAnimationEnd={onAnimationEnd}
      />
    </Wrapper>
  ) : null;
};
