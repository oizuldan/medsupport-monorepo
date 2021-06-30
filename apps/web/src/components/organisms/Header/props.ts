import {
  MainPage_headerButtons,
  MainPage_headerLinks,
} from 'components/pages/HomePage/__generated__/MainPage';

export type Props = {
  readonly headerButtons?: ReadonlyArray<MainPage_headerButtons | null> | null;
  readonly headerLinks?: ReadonlyArray<MainPage_headerLinks | null> | null;
};
