import { OptionsGeneric } from '@popperjs/core';
import { ReactElement, RefObject } from 'react';

import { CoverStrategies } from './types/CoverStrategies';
import { Modifiers } from './types/Modifiers';

export type Props = Partial<OptionsGeneric<Modifiers>> & {
  /**
   * Poppers content.
   */
  readonly children: ReactElement;
  /**
   * Reference to control element, if present, target won't be used.
   */
  readonly targetRef?: RefObject<HTMLElement>;
  /**
   * Clickable element controls component's children appearance.
   * @example <Popover target={<button>Click to show content</button>} />
   */
  readonly target?: ReactElement;
  /**
   * If present, will indicate whether component's children is mounted or not.
   * @default uses inner active state control.
   */
  readonly active?: boolean;
  /**
   * Show popover content on hover.
   */
  readonly hoverEnabled?: boolean;
  /**
   * Render method that will be used to hide the content (children).
   * @default CoverStrategies.Visibility
   */
  readonly coverStrategy?: CoverStrategies;
  /**
   * Virtual DOM hydration root.
   * @default seeks for elements with ids from `DefaultRootIds` enum.
   */
  readonly root?: HTMLElement;
} & {
  /**
   * Active state change handler.
   */
  readonly onChange?: (newActive: boolean) => void;
};
