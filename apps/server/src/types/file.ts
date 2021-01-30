export type File = {
  readonly mimeType: string;
  readonly parents: ReadonlyArray<string>;
  readonly webViewLink: string;
  readonly thumbnailLink: string;
  readonly createdTime: string;
};
