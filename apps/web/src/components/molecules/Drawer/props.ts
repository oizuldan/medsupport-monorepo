import { OverflowProps } from 'components';
import { CSSProperties } from 'react';

import { Directions } from './types/Directions';

export type Props = OverflowProps & {
  /**
   * @description value to control width
   */
  readonly width?: CSSProperties['width'];
  /**
   * @description value to control height
   */
  readonly height?: CSSProperties['height'];
  /**
   * @description value to control Overflow backgroundColor
   */
  readonly overflowBackgroundColor?: CSSProperties['backgroundColor'];
  /**
   * @description indicates wether component will unmount itself on `swipeLeftToRigth` gesture.
   */
  readonly closeOnSwipe?: boolean;
  /**
   * @description value of swipe distance require to close component.
   * @default 10
   */
  readonly swipeDistance?: number;
  /**
   * @description value to specify appearance behavior
   * @default FromRight
   */
  readonly direction?: Directions;
};
