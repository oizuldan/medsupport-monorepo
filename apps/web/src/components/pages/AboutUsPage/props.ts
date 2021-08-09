import { ApolloQueryResult } from '@apollo/client';

import { AboutUsPageData } from './__generated__/AboutUsPageData';

export type InitProps = {
  readonly data: ApolloQueryResult<AboutUsPageData>;
};
export type Props = InitProps;
