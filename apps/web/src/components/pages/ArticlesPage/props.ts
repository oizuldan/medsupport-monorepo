import { ApolloQueryResult } from '@apollo/client';

import { Articles } from './__generated__/Articles';

export type InitProps = {
  readonly data: ApolloQueryResult<Articles>;
};
export type Props = InitProps;
