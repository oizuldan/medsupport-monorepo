import { ApolloQueryResult } from '@apollo/client';

import { ResistancePageData } from './__generated__/ResistancePageData';

export type InitProps = {
  readonly data: ApolloQueryResult<ResistancePageData>;
  readonly lang: string;
};
export type Props = InitProps;
