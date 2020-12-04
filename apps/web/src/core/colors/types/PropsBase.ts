import { AnyColor } from './AnyColor';

export type PropsBase<C extends AnyColor = AnyColor> = { readonly color: C };
