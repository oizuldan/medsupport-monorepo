import { HTMLAttributes } from 'react';

import { ArticlesPage_articleSections_articles } from '../../__generated__/ArticlesPage';

export type Props = HTMLAttributes<HTMLButtonElement> & {
  readonly articles: ReadonlyArray<ArticlesPage_articleSections_articles | null> | null;
  readonly title: string;
  readonly isInitiallyOpen: boolean;
};
