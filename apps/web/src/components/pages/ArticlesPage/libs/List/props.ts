import { ListProps } from 'components';

import { ArticlesPage_articleSections_articles } from '../../__generated__/ArticlesPage';

export type Props = ListProps & {
  readonly articles?: ReadonlyArray<ArticlesPage_articleSections_articles>;
};
