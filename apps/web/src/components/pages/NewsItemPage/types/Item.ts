import { PreviewImage } from './PreviewImage';

export type Item = {
  readonly content: string;
  readonly createdAt: string;
  readonly author: string;
  readonly datePublishedText: string;
  readonly title: string;
  readonly previewImage: PreviewImage;
  readonly id: string;
};
