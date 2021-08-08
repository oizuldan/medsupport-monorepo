import { ApolloQueryResult } from '@apollo/client';

import { FaqPageData } from './__generated__/FaqPageData';

export type InitProps = {
  readonly data: ApolloQueryResult<FaqPageData>;
};
export type Props = InitProps;
