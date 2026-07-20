import { ApolloQueryResult } from '@apollo/client';

import { MainPage } from '../HomePage/__generated__/MainPage';

export type InitProps = {
  readonly data: ApolloQueryResult<MainPage>;
  readonly lang: string;
};
export type Props = InitProps;
