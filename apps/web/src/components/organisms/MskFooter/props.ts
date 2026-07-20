export type CmsFooterLink = {
  readonly href?: string;
  readonly link?: string;
  readonly title?: string;
  readonly label?: string;
};

export type CmsFooterSection = {
  readonly title?: string;
  readonly links?: ReadonlyArray<CmsFooterLink>;
};

export type Props = {
  readonly sections?: ReadonlyArray<CmsFooterSection> | null;
};
