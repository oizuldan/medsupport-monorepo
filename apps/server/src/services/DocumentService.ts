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
      const cmsUrl = process.env.CMS_URL || 'http://localhost:1337';
      const cmsIdentifier = process.env.CMS_IDENTIFIER;
      const cmsPassword = process.env.CMS_PASSWORD;
      const driveFolderId = process.env.GOOGLE_DISK_FOLDER_ID;

      if (!cmsIdentifier || !cmsPassword) {
        return { error: 'CMS credentials are not configured', code: 500 };
      }
      if (!driveFolderId) {
        return { error: 'Google Drive folder ID is not configured', code: 500 };
      }

      const {
        data: { jwt },
      } = await axios.post(`${cmsUrl}/auth/local`, {
        identifier: cmsIdentifier,
        password: cmsPassword,
      });
      const createdFile = await drive.files.create({
        requestBody: {
          parents: [driveFolderId],
          name,
          mimeType: 'application/vnd.google-apps.document',
        },
        media: {
          body: bufferStream,
        },
        fields: 'webViewLink, exportLinks',
      });

      const response = await axios.post(
        `${cmsUrl}/documents`,
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
