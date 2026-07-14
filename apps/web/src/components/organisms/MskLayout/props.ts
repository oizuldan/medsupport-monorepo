import { CmsFooterSection } from 'components/organisms/MskFooter/props';
import { CmsLink } from 'components/organisms/MskHeader/props';
import { ReactNode } from 'react';

export type Props = {
  readonly dark?: boolean;
  readonly links?: ReadonlyArray<CmsLink> | null;
  readonly footerSections?: ReadonlyArray<CmsFooterSection> | null;
  readonly floatingCta?: boolean;
  readonly children: ReactNode;
};
