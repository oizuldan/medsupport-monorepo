export type CmsLink = {
  readonly href?: string;
  readonly link?: string;
  readonly title?: string;
  readonly label?: string;
};

export type Props = {
  readonly dark?: boolean;
  readonly links?: ReadonlyArray<CmsLink> | null;
};
