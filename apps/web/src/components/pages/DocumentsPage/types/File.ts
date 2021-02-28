export type File = {
  readonly name: string;
  readonly webViewLink: string;
  readonly iconLink: string;
  readonly createdTime: string;
  readonly mimeType: string;
  readonly webContentLink?: string;
  readonly exportLinks?: {
    readonly pdf: string;
    readonly docx: string;
  };
};
