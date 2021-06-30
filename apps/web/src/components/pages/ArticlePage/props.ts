import { ApolloQueryResult } from '@apollo/client';

import { Article } from './__generated__/Article';

export type InitProps = {
  readonly data: ApolloQueryResult<Article>;
};
export type Props = InitProps;
