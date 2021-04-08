import { Link } from './Link';

export type SectionData = {
  readonly title: string;
  readonly links?: ReadonlyArray<Link>;
};
