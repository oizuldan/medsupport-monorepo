import { ReactElement } from 'react';

import { StepProps } from './libs/Step';

export type Props = {
  readonly active: string | number;
  readonly children: ReadonlyArray<ReactElement<StepProps>>;
};
