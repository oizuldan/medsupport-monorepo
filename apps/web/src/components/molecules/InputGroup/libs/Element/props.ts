import { CSSProperties } from 'react';

export type Props = {
  readonly direction: Extract<keyof CSSProperties, 'left' | 'right'>;
};
