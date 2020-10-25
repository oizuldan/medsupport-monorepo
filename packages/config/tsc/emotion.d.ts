/* eslint-disable functional/prefer-type-literal,functional/prefer-readonly-type,@typescript-eslint/no-explicit-any */
import { InterpolationWithTheme } from '@emotion/core';

declare module 'react' {
  interface DOMAttributes<T> {
    css?: InterpolationWithTheme<any>;
  }
}

declare global {
  namespace JSX {
    /**
     * Do we need to modify `LibraryManagedAttributes` too,
     * to make `className` props optional when `css` props is specified?
     */

    interface IntrinsicAttributes {
      css?: InterpolationWithTheme<any>;
    }
  }
}
