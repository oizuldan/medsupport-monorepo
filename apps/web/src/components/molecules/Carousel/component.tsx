import { Button, ButtonSizes, ButtonVariants, Icon } from 'components';
import { colors, icons } from 'core';
import React, { cloneElement, FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { animated, useSpring, useSprings } from 'react-spring';
import { useGesture } from 'react-use-gesture';

import { Dot } from './libs/Dot';
import { Props } from './props';

export const Carousel: FC<Props> = (props: Props) => {
  const {
    onFrame,
    onChange,
    children,
    withScale,
    draggable = false,
    initialWidth = 0,
    elementsPerPage = 1,
    onRest: propOnRest,
    activeSlide: propActiveSlide,
    horizontalMargins = 0,
    withDots = false,
    withButtons = false,
    ...rest
  } = props;

  const slides = useMemo(
    () => [
      ...children.map((slide, i) => ({
        el: { ...slide },
        clone: true,
        index: i,
      })),
      ...children.map((slide, i) => ({
        el: { ...slide },
        clone: false,
        index: i,
      })),
      ...children.map((slide, i) => ({
        el: { ...slide },
        clone: true,
        index: i,
      })),
      ...children.map((slide, i) => ({
        el: { ...slide },
        clone: true,
        index: i,
      })),
    ],
    [children],
  );

  const wrapperRef = useRef<HTMLDivElement>(null);

  const [wrapperWidth, setWrapperWidth] = useState(initialWidth);
  const [innerActiveSlide, setInnerActiveSlide] = useState(0);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const activeSlide = propActiveSlide !== undefined ? propActiveSlide : innerActiveSlide;

  const [wrapper, setWrapper] = useSpring(() => ({ x: 0, onFrame }));
  const [elements, setElements] = useSprings(children.length * 4, () => ({
    sc: 1,
  }));

  const width = useMemo<number>(
    () => (elementsPerPage > 1 ? wrapperWidth / elementsPerPage : wrapperWidth),
    [elementsPerPage, wrapperWidth],
  );

  const onDotClick = useCallback(
    (index: number) => () => {
      if (onChange) onChange(index);
      setInnerActiveSlide(index);
    },
    [onChange],
  );
  const onLeftButtonClick = useCallback(() => {
    setButtonsDisabled(true);
    const newSlide = activeSlide === -1 ? children.length - 1 : activeSlide - 1;
    setInnerActiveSlide(newSlide);
    if (onChange) onChange(newSlide);
  }, [activeSlide, children.length, onChange]);
  const onRightButtonClick = useCallback(() => {
    setButtonsDisabled(true);
    const newSlide = activeSlide === children.length ? 0 : activeSlide + 1;
    setInnerActiveSlide(newSlide);
    if (onChange) onChange(newSlide);
  }, [activeSlide, children.length, onChange]);
  const onResize = useCallback(
    () => setWrapperWidth(wrapperRef.current?.getBoundingClientRect()?.width || initialWidth),
    [initialWidth],
  );
  const onRest = useCallback(() => {
    if (activeSlide === -1) {
      setWrapper({ x: children.length - 1, immediate: true });
      if (onChange) onChange(children.length - 1);
      setInnerActiveSlide(children.length - 1);
    }
    if (activeSlide >= children.length) {
      const toGoIndex = activeSlide - children.length;
      setWrapper({ x: toGoIndex, immediate: true });
      if (onChange) onChange(toGoIndex);
      setInnerActiveSlide(toGoIndex);
    }
    if (propOnRest) propOnRest();
    setButtonsDisabled(false);
    setWrapper({ immediate: false });
  }, [activeSlide, children.length, onChange, propOnRest, setWrapper]);

  useEffect(() => {
    setWrapper({ x: activeSlide, config: { duration: 250 }, onRest });
  }, [activeSlide, onRest, setWrapper]);

  // Get carousel root element's width using ref.
  useEffect(() => {
    onResize();
    if (process?.browser) window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [onResize]);

  const bind = useGesture(
    {
      onDrag: ({ down, movement: [xDelta], distance, cancel }) => {
        if (wrapperWidth) {
          if (down && distance > wrapperWidth / 2 && cancel) cancel();
          setWrapper({
            x: activeSlide - xDelta / width,
            immediate: false,
            config: { duration: undefined },
          });
          // TODO: remove `@ts-ignore` when a new major release of `react-spring` will comeout.
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          setElements(() => ({
            sc: down ? 1 - distance / wrapperWidth / 2 : 1,
          }));
        }
      },
      onDragEnd: ({ direction: [dirX], distance }) => {
        if (wrapperWidth && distance >= wrapperWidth / 3) {
          setWrapper({
            x: dirX > 0 ? activeSlide - 1 : activeSlide + 1,
            immediate: false,
          });
          if (onChange) onChange(dirX > 0 ? activeSlide - 1 : activeSlide + 1);
          setInnerActiveSlide((prevVal) => (dirX > 0 ? prevVal - 1 : prevVal + 1));
        } else {
          setWrapper({
            x: activeSlide,
            immediate: false,
          });
        }
      },
    },
    {
      enabled: draggable,
      drag: {
        useTouch: true,
      },
    },
  );

  return (
    <div
      {...rest}
      ref={wrapperRef}
      css={{ overflow: 'hidden', position: 'relative', height: wrapperWidth ? 'auto' : 0 }}
    >
      <animated.div
        {...bind()}
        style={{
          display: 'flex',
          flexDirection: 'row',

          transform: wrapper.x.interpolate(
            (x) => `translate(${-(x + children.length) * width}px, 0px)`,
          ),
        }}
      >
        {elements.map(({ sc }, i) => (
          <animated.div
            key={i}
            style={{
              display: 'block',
              transform: withScale ? sc.interpolate((s) => `scale(${s})`) : 'none',
            }}
          >
            {cloneElement(slides[i].el, {
              style: {
                ...slides[i].el.props.style,
                width: width - horizontalMargins * 2,
                margin: `0 ${horizontalMargins}px`,
              },
            })}
          </animated.div>
        ))}
      </animated.div>

      {(withDots || withButtons) && (
        <div
          className="d-flex align-items-center justify-content-center position-absolute "
          css={{ bottom: 0, left: 0, right: 0 }}
        >
          {withButtons && (
            <Button
              className="mr-3"
              onClick={onLeftButtonClick}
              disabled={buttonsDisabled}
              variant={ButtonVariants.Flat}
              size={ButtonSizes.ExtraSmall}
              color={colors.variants.Neutral.Grey}
            >
              <Icon icon={icons.arrows.keyboardArrowLeft} />
            </Button>
          )}
          {withDots &&
            children.map((_, i) => (
              <Dot
                key={i}
                className="mx-1"
                active={
                  i === activeSlide ||
                  (i > activeSlide && i === 0) ||
                  (i < activeSlide && i === children.length - 1)
                }
                onClick={onDotClick(i)}
              />
            ))}

          {withButtons && (
            <Button
              className="ml-3"
              onClick={onRightButtonClick}
              disabled={buttonsDisabled}
              variant={ButtonVariants.Flat}
              size={ButtonSizes.ExtraSmall}
              color={colors.variants.Neutral.Grey}
            >
              <Icon icon={icons.arrows.keyboardArrowRight} />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
