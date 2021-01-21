import { ButtonLinkProps, ButtonProps } from 'components';

export type Props =
  | ButtonProps
  | (ButtonLinkProps & {
      readonly link?: boolean;
    });
