import { createPopper, Instance } from '@popperjs/core';
import { sequenceT } from 'fp-ts/Apply';
import { flow, pipe } from 'fp-ts/function';
import * as I from 'fp-ts/IO';
import * as O from 'fp-ts/Option';
import React, {
  cloneElement,
  CSSProperties,
  FC,
  HTMLAttributes,
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { Props } from './props';
import { CoverStrategies } from './types/CoverStrategies';
import { DefaultRootIds } from './types/DefaultRootIds';
import { Modifiers } from './types/Modifiers';
import { TargetTypes } from './types/TargetTypes';

export const Popover: FC<Props> = (props: Props) => {
  // `rest` should contain only popper.js `OptionsGeneric`.
  const {
    children,
    onChange,
    hoverEnabled,
    coverStrategy,
    active: propActive,
    root: propRoot,
    ...rest
  } = props;
  // Popper.js instance.
  const popper = useRef<Instance>();
  // Children clone's ref.
  const contentRef = useRef<HTMLElement>(null);
  // Target element's ref if target `type` is set to `Element`.
  const targetElementRef = useRef<HTMLElement>(null);

  // Control active state if own is not provided by `props.active`.
  const [innerActive, setInnerActive] = useState(false);

  // Final active state.
  const active = propActive ?? innerActive;
  // Final Target type.
  const type = props.target ? TargetTypes.Element : TargetTypes.Ref;
  // Final target ref.
  const target = type === TargetTypes.Ref ? props.targetRef : targetElementRef;
  // Final document body.
  const body = typeof window !== 'undefined' && document.body;
  // Final Virtual DOM hydration root.
  const root = useMemo(
    () =>
      typeof window !== 'undefined'
        ? propRoot ||
          document.getElementById(DefaultRootIds.Root) ||
          document.getElementById(DefaultRootIds.Next) ||
          document.body
        : undefined,
    [propRoot],
  );
  const visibilityStyles = useMemo<CSSProperties>(
    () =>
      coverStrategy === CoverStrategies.Visibility && !active
        ? { visibility: 'hidden', pointerEvents: 'none' }
        : {},
    [active, coverStrategy],
  );

  const changeActive = useCallback(
    (newActive = !active) => {
      if (onChange) onChange(newActive);
      setInnerActive(newActive);
    },
    [active, onChange],
  );
  const onTargetHandler = useCallback(
    (
      onClick?: MouseEventHandler<HTMLElement>,
      newActive = !active,
      switchTimeout = 0,
    ): MouseEventHandler<HTMLElement> => (event) => {
      if (onClick) onClick(event);
      setTimeout(() => changeActive(newActive), switchTimeout);
    },
    [active, changeActive],
  );
  const onTargetRefHandler = useCallback(
    <V extends (event: MouseEvent) => void>(
      handler: V | null,
      newActive = !active,
      switchTimeout = 0,
    ) => (event: MouseEvent): void => {
      if (handler) handler(event);
      changeActive(newActive);
      setTimeout(() => changeActive(newActive), switchTimeout);
    },
    [active, changeActive],
  );
  const getHoverHandlers = useCallback(
    (props: HTMLAttributes<HTMLElement>) => ({
      onMouseEnter: onTargetHandler(props.onMouseEnter, true),
      onMouseLeave: onTargetHandler(props.onMouseLeave, false),
    }),
    [onTargetHandler],
  );

  // Initialize `popper` instance only once.
  useEffect(() => {
    pipe(
      popper,
      O.fromPredicate((v) => v.current === undefined),
      O.chain(() =>
        sequenceT(O.option)(O.fromNullable(target?.current), O.fromNullable(contentRef.current)),
      ),
      O.map(([target, content]) => createPopper<Partial<Modifiers>>(target, content, rest)),
      // eslint-disable-next-line functional/immutable-data
      O.map((p) => (popper.current = p)),
    );
  }, [children, rest, target]);

  // Handle click outside of the component.
  useEffect(() => {
    const eventKey = 'click';
    const onClickOutside = (event: DocumentEventMap[typeof eventKey]): void => {
      pipe(
        O.fromNullable(contentRef?.current),
        O.chain(O.fromPredicate((c) => !c.contains(event.target as Node))),
        O.map(() => changeActive(false)),
      );
    };
    root?.addEventListener(eventKey, onClickOutside);
    return () => root?.removeEventListener(eventKey, onClickOutside);
  }, [active, changeActive, root]);

  // Initialize event listeners for `targetRef`.
  useEffect(
    () =>
      pipe(
        props,
        O.fromPredicate(() => type === TargetTypes.Ref),
        O.chain((p) => O.fromNullable(p.targetRef?.current)),
        O.chain((r) =>
          sequenceT(O.option)(
            O.some(r),
            O.fromNullable(onTargetRefHandler(r.onclick)),
            O.some(
              pipe(
                hoverEnabled,
                O.fromPredicate((v) => !!v),
                O.chain(() =>
                  sequenceT(O.option)(
                    O.fromNullable(onTargetRefHandler(r.onmouseenter, true)),
                    O.fromNullable(onTargetRefHandler(r.onmouseleave, false)),
                  ),
                ),
              ),
            ),
          ),
        ),
        O.map(([r, click, hover]) =>
          pipe(
            // Register event listeners.
            r.addEventListener('click', click),
            I.of(hover),
            O.map(([mouseenter, mouseleave]) =>
              pipe(r.addEventListener('mouseenter', mouseenter), () =>
                r.addEventListener('mouseleave', mouseleave),
              ),
            ),
            I.of(
              // Remove event listeners on component unmount.
              flow(
                () => r.removeEventListener('click', click),
                I.of(hover),
                O.map(([mouseenter, mouseleave]) =>
                  pipe(r.removeEventListener('mouseenter', mouseenter), () =>
                    r.removeEventListener('mouseleave', mouseleave),
                  ),
                ),
              ),
            ),
          ),
        ),
        O.getOrElse(() => (): void => void 0),
      ),
    [active, changeActive, hoverEnabled, onTargetRefHandler, props, type],
  );

  return (
    <>
      {type === TargetTypes.Element &&
        props.target &&
        cloneElement(props.target, {
          ref: targetElementRef,
          onClick: onTargetHandler(props.target.props.onClick),
          ...(hoverEnabled && getHoverHandlers(props.target.props)),
        })}
      {body &&
        createPortal(
          cloneElement(children, {
            ref: contentRef,
            ...(hoverEnabled && getHoverHandlers(children.props)),
            style: {
              ...children.props.style,
              ...visibilityStyles,
              position: rest.strategy,
              zIndex: 120,
            },
          }),
          body,
        )}
    </>
  );
};

Popover.defaultProps = {
  coverStrategy: CoverStrategies.Visibility,
  placement: 'bottom-start',
  strategy: 'fixed',
};
