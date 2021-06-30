import { ApolloQueryResult } from '@apollo/client';

import { Documents } from './__generated__/Documents';

export type InitProps = { readonly data: ApolloQueryResult<Documents> };
export type Props = InitProps;
