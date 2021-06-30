import { MainPage_footerSections } from 'components/pages/HomePage/__generated__/MainPage';
import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  readonly footerSections?: ReadonlyArray<MainPage_footerSections | null> | null;
};
