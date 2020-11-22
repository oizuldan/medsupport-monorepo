export type Props = {
  readonly bodyData: readonly BodyData[];
  readonly headerData: readonly string[];
};

export type BodyData = {
  readonly name: string;
  readonly date: Date;
  readonly size: string;
  readonly posted: string;
  readonly link: string;
};
