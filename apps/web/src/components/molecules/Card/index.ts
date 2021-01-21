import { ContentProps } from './libs/Content';
import { InteractiveProps } from './libs/Interactive';
import { TitleProps } from './libs/Title';
import { Props } from './props';

export * from './component';
export { Title as CardTitle } from './libs/Title';
export { Content as CardContent } from './libs/Content';
export { Interactive as CardInteractive } from './libs/Interactive';
export type CardTitleProps = TitleProps;
export type CardContentProps = ContentProps;
export type CardInteractiveProps = InteractiveProps;
export type CardProps = Props;
