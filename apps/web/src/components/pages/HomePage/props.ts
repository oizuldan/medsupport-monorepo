import { ApolloQueryResult } from '@apollo/client';

import { MainPage } from './__generated__/MainPage';

export type InitProps = {
  readonly data: ApolloQueryResult<MainPage>;
};
export type Props = InitProps;
