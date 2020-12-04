import { css, SerializedStyles } from '@emotion/core';
import { CSSProperties } from 'react';

import { AnyColor } from './types/AnyColor';
import { PropsBase } from './types/PropsBase';

export const extendByVariant = <C extends AnyColor, P extends Partial<PropsBase<C>>>(
  selectors: keyof CSSProperties | ReadonlyArray<keyof CSSProperties>,
): ((props: P) => SerializedStyles) => ({ color }) =>
  css(
    Array.isArray(selectors)
      ? selectors.reduce((acc, cur) => ({ ...acc, [cur]: color }), {})
      : { [selectors.toString()]: color },
  );
