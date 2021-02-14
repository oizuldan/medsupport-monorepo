import { google } from 'googleapis';
import stream from 'stream';

import creds from '../../client_secret.json';

const auth = new google.auth.GoogleAuth({
  credentials: creds,
  scopes: ['https://www.googleapis.com/auth/drive'],
});

const drive = google.drive({
  version: 'v3',
  auth,
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  listDocuments: async () => {
    try {
      const resp = await drive.files.list({
        pageSize: 10,
        fields:
          'nextPageToken, files(webViewLink, webContentLink, iconLink, createdTime, name, exportLinks)',
        q: "'1yC9aE5xGBLScv4f7oAC57KZKycLuCGxk' in parents",
      });
      const { files } = resp.data;
      const formattedFiles = files
        ? files.map(({ exportLinks, ...rest }) => ({
            ...rest,
            exportLinks: exportLinks
              ? {
                  docx:
                    exportLinks[
                      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                    ],
                  pdf: exportLinks['application/pdf'],
                }
              : undefined,
          }))
        : [];
      return { success: 'Documents received.', files: formattedFiles };
    } catch (e) {
      const { code, message } = e.response.data.error;
      return { error: message, code };
    }
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  createDocument: async (buffer: Buffer, originalName: string) => {
    const bufferStream = new stream.PassThrough();
    bufferStream.end(buffer);
    try {
      const resp = await drive.files.create({
        requestBody: {
          parents: ['1yC9aE5xGBLScv4f7oAC57KZKycLuCGxk'],
          name: originalName,
        },
        media: {
          body: bufferStream,
        },
      });
      const filesToReturn = await drive.files.list({
        pageSize: 10,
        fields:
          'nextPageToken, files(webViewLink, webContentLink, iconLink, createdTime, name, exportLinks)',
        q: "'1yC9aE5xGBLScv4f7oAC57KZKycLuCGxk' in parents",
      });
      const { files } = filesToReturn.data;
      const formattedFiles = files
        ? files.map(({ exportLinks, ...rest }) => ({
            ...rest,
            exportLinks: exportLinks
              ? {
                  docx:
                    exportLinks[
                      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                    ],
                  pdf: exportLinks['application/pdf'],
                }
              : undefined,
          }))
        : [];
      return {
        success: `Successfully uploaded file ${originalName} to the Google Drive`,
        code: resp.status,
        files: formattedFiles,
      };
    } catch (e) {
      const { code, message } = e.response.data.error;
      return { error: message, code };
    }
  },
};
