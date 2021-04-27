import { DocumentData } from 'components/pages/DocumentsPage';

export type Prop = {
  readonly file?: Readonly<DocumentData>;
} & {
  readonly onClose?: () => void;
};
