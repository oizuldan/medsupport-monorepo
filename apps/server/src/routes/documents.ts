import express, { Request, Response } from 'express';
import { google } from 'googleapis';
import Multer from 'multer';
import stream from 'stream';

import creds from '../../client_secret.json';

const router = express.Router();
const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 20 * 1024 * 1024, // no larger than 20mb, you can change as needed.
  },
});
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

router.post('/api/create-document', multer.single('file'), async (_req: Request, res: Response) => {
  const bufferStream = new stream.PassThrough();
  bufferStream.end(_req.file.buffer);
  try {
    const resp = await drive.files.create({
      requestBody: {
        parents: ['1yC9aE5xGBLScv4f7oAC57KZKycLuCGxk'],
        name: _req.file.originalname,
      },
      media: {
        body: bufferStream,
      },
    });
    res.status(resp.status).send(resp.statusText);
  } catch (e) {
    const { code, message } = e.response.data.error;
    res.status(code).send(message);
  }
});

export { router as documentsRouter };
