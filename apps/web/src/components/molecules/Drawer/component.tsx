import { Overflow } from 'components';
import { colors } from 'core';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { interpolate, useSpring } from 'react-spring';
import { useGesture } from 'react-use-gesture';

import { Background } from './libs/Background';
import { Props } from './props';
import { Directions } from './types/Directions';

export const Drawer: FC<Props> = (props: Props) => {
  const {
    style,
    zIndex,
    children,
    closeOnEscape,
    closeOnClick,
    closeOnSwipe,
    overflowBackgroundColor,
    color = colors.variants.Background.Primary,
    width = '50%',
    height = '100%',
    swipeDistance = 50,
    active: propActive,
    onChange: propOnChange,
    direction = Directions.FromRight,
    ...rest
  } = props;

  const [xWidth, setXWidth] = useState(0);
  const [yHeight, setYHeight] = useState(0);
  const [innerActive, setInnerActive] = useState(false);
  const active = propActive !== undefined ? propActive : innerActive;

  const getSize = useCallback((value: string | number) => {
    if (value && isNaN(Number(value)) && value.toString().endsWith('%')) {
      const stringValue = value.toString();
      const percents = Number(stringValue.substr(0, stringValue.length - 1));
      return Math.floor((window.innerWidth / 100) * percents);
    }
    return Number(value) || 0;
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setXWidth(getSize(width));
      setYHeight(getSize(height));
    }
  }, [getSize, height, width]);

  const onChange = useCallback(
    (newState: boolean): void => {
      if (propOnChange) propOnChange(newState);
      setInnerActive(newState);
    },
    [propOnChange],
  );

  const [{ x, y }, set] = useSpring(() => ({
    x: 0,
    y: 0,
    from: {
      x: xWidth,
      y: yHeight,
    },
  }));

  const bind = useGesture({
    onDrag: ({ down, movement: [xDistance, yDistance] }) => {
      if (!closeOnSwipe || !active) return;
      set({
        y: direction === Directions.FromBottom && down && yDistance > 0 ? yDistance : 0,
        x: direction === Directions.FromRight && down && xDistance > 0 ? xDistance : 0,
      });
    },
    onDragEnd: ({ movement: [xDistance, yDistance] }) => {
      if (!closeOnSwipe || !active) return;
      if (
        (direction === Directions.FromRight && xDistance >= swipeDistance) ||
        (direction === Directions.FromBottom && yDistance >= swipeDistance)
      ) {
        if (propOnChange) propOnChange(false);
        setInnerActive(false);
      }
    },
  });

  useEffect(() => {
    set({
      x: !active && direction === Directions.FromRight ? xWidth : 0,
      y: !active && direction === Directions.FromBottom ? yHeight : 0,
      config: { duration: active ? undefined : 250 },
    });
  }, [active, set, yHeight, xWidth, direction]);

  return (
    <Overflow
      active={active}
      zIndex={zIndex}
      onChange={onChange}
      closeOnEscape={closeOnEscape}
      closeOnClick={closeOnClick}
      color={overflowBackgroundColor}
    >
      <Background
        {...bind()}
        color={color}
        width={width}
        height={height}
        active={active}
        direction={direction}
        style={{
          transform: interpolate([x, y], (x, y) => `translate(${x}px, ${y}px)`),
          ...style,
        }}
        {...rest}
      >
        {children}
      </Background>
    </Overflow>
  );
};
