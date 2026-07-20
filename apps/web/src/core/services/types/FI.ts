import { SerializedStyles } from '@emotion/react';

/**
 * @alias import('@emotion/react').FunctionInterpolation<MP>
 * @desc Used when a function guaranties to return `SerializedStyles`.
 */
export type FI<P> = (props: P) => SerializedStyles;
