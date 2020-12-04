/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SerializedStyles } from '@emotion/core';

import { FI } from './types/FI';
import { MatchVariantValue } from './types/MatchVariantValue';

const isFI = <P>(value: MatchVariantValue<P>): value is FI<P> => typeof value === 'function';

export const match = <P extends Record<keyof any, any>, MT extends keyof P = keyof P>(
  matchTo: MT,
  variants: any,
  fallthrough?: any,
): FI<P> => (props) => {
  const variant = variants[props[matchTo]] || fallthrough;
  return isFI(variant) ? variant(props) : (variant as SerializedStyles);
};
