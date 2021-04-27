import { NewsItem } from '../NewsItemPage';

export type InitProps = {
  readonly news: ReadonlyArray<NewsItem>;
};
export type Props = InitProps;
