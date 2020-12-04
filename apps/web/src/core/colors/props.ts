import { PropsBase } from './types/PropsBase';
import { AnyColor } from './variants';

export type Props<C extends AnyColor = AnyColor> = PropsBase<C>;
