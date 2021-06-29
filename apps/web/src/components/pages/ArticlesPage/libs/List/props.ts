import { ListProps } from 'components';

import { Articles_articles } from '../../__generated__/Articles';

export type Props = ListProps & {
  readonly articles?: ReadonlyArray<Articles_articles>;
};
