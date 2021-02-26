import { HTMLAttributes, ReactElement } from 'react';

import { SpringState } from './types/SpringState';

export type Props = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  readonly children: ReadonlyArray<ReactElement>;
  /**
   * @description value to allow children scale animation
   */
  readonly withScale?: boolean;
  /**
   * @description value to control activeSlide
   */
  readonly activeSlide?: number;
  /**
   * @description initial carousel width.
   */
  readonly initialWidth?: number;
  /**
   * @default false
   */
  readonly withDots?: boolean;
  readonly draggable?: boolean;
  /**
   * @description elements to show per page.
   */
  readonly elementsPerPage?: number;
  /**
   * @default 0
   */
  readonly horizontalMargins?: number;
} & {
  /**
   * @description fires when animations are in rest.
   */
  readonly onRest?: () => void;
  /**
   * @description fires when active slider has changed.
   */
  readonly onChange?: (nextSlide: number) => void;
  /**
   * @description fires when animation is active.
   */
  readonly onFrame?: (springState: SpringState) => void;
};
