import axios from 'axios';
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
  createDocument: async (
    buffer: Buffer,
    name: string,
    title: string,
    author: string,
    description: string,
  ) => {
    const bufferStream = new stream.PassThrough();
    bufferStream.end(buffer);
    try {
      const {
        data: { jwt },
      } = await axios.post('http://localhost:1337/auth/local', {
        identifier: 'oizuldan',
        password: 'Aisultan1098820',
      });
      const createdFile = await drive.files.create({
        requestBody: {
          parents: ['1yC9aE5xGBLScv4f7oAC57KZKycLuCGxk'],
          name,
          mimeType: 'application/vnd.google-apps.document',
        },
        media: {
          body: bufferStream,
        },
        fields: 'webViewLink, exportLinks',
      });

      const response = await axios.post(
        'http://localhost:1337/documents',
        {
          title: title,
          author: author,
          description: description,
          viewLink: createdFile.data.webViewLink,
          downloadLink: createdFile.data.exportLinks?.['application/pdf'],
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        },
      );

      return {
        success: `Successfully uploaded file ${name} to the Google Drive`,
        code: response.status,
      };
    } catch (e) {
      const { code, message } = e.response.data.error;
      return { error: message, code };
    }
  },
};
