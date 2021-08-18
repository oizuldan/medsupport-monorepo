import { ApolloQueryResult } from '@apollo/client';

import { ArticlesPage } from './__generated__/ArticlesPage';

export type InitProps = {
  readonly data: ApolloQueryResult<ArticlesPage>;
  readonly lang: string;
};
export type Props = InitProps;
