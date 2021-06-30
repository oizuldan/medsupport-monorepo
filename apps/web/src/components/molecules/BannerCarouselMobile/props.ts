import { CarouselProps } from 'components';
import { MainPage_headerBanners } from 'components/pages/HomePage/__generated__/MainPage';
import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> &
  Partial<CarouselProps> & {
    readonly banners: ReadonlyArray<MainPage_headerBanners | null> | null;
  };
