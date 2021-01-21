import { SerializedStyles } from '@emotion/core';

/**
 * @alias import('@emotion/core').FunctionInterpolation<MP>
 * @desc Used when a function guaranties to return `SerializedStyles`.
 */
export type FI<P> = (props: P) => SerializedStyles;
