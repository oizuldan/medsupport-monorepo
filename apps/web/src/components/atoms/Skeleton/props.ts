import { colors } from 'core';
import { CSSProperties, HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLSpanElement> &
  Partial<colors.Props<colors.variants.Background>> &
  Pick<CSSProperties, 'width' | 'height' | 'opacity' | 'borderRadius'> & {
    /**
     * @default 1
     */
    readonly rows?: number;
  };
