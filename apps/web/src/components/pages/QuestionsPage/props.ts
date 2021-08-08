import { ApolloQueryResult } from '@apollo/client';

import { QuestionsPageData } from './__generated__/QuestionsPageData';

export type InitProps = {
  readonly data: ApolloQueryResult<QuestionsPageData>;
};
export type Props = InitProps;
