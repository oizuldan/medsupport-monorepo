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
          'nextPageToken, files(webViewLink, thumbnailLink, createdTime, size, parents, mimeType)',
      });
      const { files } = resp.data;
      const valueToReturn =
        files &&
        files.filter(
          (file) =>
            file.mimeType &&
            file.webViewLink &&
            file.createdTime &&
            file.parents?.includes('1yC9aE5xGBLScv4f7oAC57KZKycLuCGxk'),
        );
      return { success: 'Documents received.', files: valueToReturn };
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
      return { success: resp.statusText, code: resp.status };
    } catch (e) {
      const { code, message } = e.response.data.error;
      return { error: message, code };
    }
  },
};
