import { File } from '../../pages/DocumentsPage/types/File';

export type Prop = {
  readonly file?: Readonly<File>;
} & {
  readonly onClose?: () => void;
};
