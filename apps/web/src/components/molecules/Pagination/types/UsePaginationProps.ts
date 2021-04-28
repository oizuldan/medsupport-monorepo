import { SyntheticEvent } from 'react';

export type UsePaginationProps = {
  readonly boundaryCount?: number;
  readonly siblingCount?: number;
  readonly count?: number;
  readonly disabled?: boolean;
  readonly page?: number;
  readonly defaultPage?: number;
  readonly hidePrevButton?: boolean;
  readonly hideNextButton?: boolean;
  readonly spaceBetweenItems?: number;
} & {
  readonly onChange?: (event: SyntheticEvent, value: number) => void;
};
