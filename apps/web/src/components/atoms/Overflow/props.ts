import { colors } from 'core';
import { HTMLAttributes } from 'react';

export type Props = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> &
  Partial<colors.Props> & {
    /**
     * @description controls the active state if present. Prior over inner active state.
     */
    readonly active?: boolean;
    /**
     * @description indicates wether component will unmount itself on `escape` button click.
     */
    readonly closeOnEscape?: boolean;
    /**
     * @description indicates wether component will unmount itself on `overflow` click.
     */
    readonly closeOnClick?: boolean;
    /**
     * @description value to control z-index
     */
    readonly zIndex?: number;
    /**
     * @description fires on attempt to click on overflow or click escape button, depending on modifiers above. For example, if `closeOnEscape` is `false` - `onChange` will not be fired.
     */
    readonly onChange?: (newState: boolean) => void;
  };
