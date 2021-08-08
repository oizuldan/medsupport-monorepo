import { ApolloQueryResult } from '@apollo/client';

import { QuestionPageData } from './__generated__/QuestionPageData';

export type InitProps = {
  readonly data: ApolloQueryResult<QuestionPageData>;
  readonly id?: string;
};
export type Props = InitProps;
