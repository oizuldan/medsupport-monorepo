export type InteractiveCardProps = {
  readonly title: string;
  readonly description: string | null;
  readonly buttonText: string | null | undefined;
  readonly href: string;
};

export type InteractiveCardContainerProps = {
  readonly onHover: boolean;
};
