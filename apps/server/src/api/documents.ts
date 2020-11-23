import express, { Request, Response } from 'express';
import * as fs from 'fs';
import { google } from 'googleapis';

import creds from '../../client_secret.json';

const router = express.Router();

// type File = {
//   readonly mimeType: string;
//   readonly parents: ReadonlyArray<string>;
//   readonly webViewLink: string;
//   readonly thumbnailLink: string;
//   readonly createdTime: string;
// };

const auth = new google.auth.GoogleAuth({
  credentials: creds,
  scopes: ['https://www.googleapis.com/auth/drive'],
});
const drive = google.drive({
  version: 'v3',
  auth,
});
router.get('/api/list-documents', async (_req: Request, res: Response) => {
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
    res.status(200).send(valueToReturn);
  } catch (e) {
    const { code, message } = e.response.data.error;
    res.status(code).send(message);
  }
});

router.post('/api/create-document', async (_req: Request, res: Response) => {
  try {
    const resp = await drive.files.create({
      requestBody: {
        parents: ['1yC9aE5xGBLScv4f7oAC57KZKycLuCGxk'],
      },
      media: {
        body: fs.createReadStream('/home/oizuldan/Downloads/KassenovNurlan.pdf'),
      },
    });
    res.status(resp.status).send(resp.statusText);
  } catch (e) {
    const { code, message } = e.response.data.error;
    res.status(code).send(message);
  }
});

export { router as documentsRouter };
