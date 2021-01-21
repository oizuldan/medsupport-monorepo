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

const auth = new google.auth.GoogleAuth({
  credentials: creds,
  scopes: ['https://www.googleapis.com/auth/drive'],
});
const drive = google.drive({
  version: 'v3',
  auth,
});
router.get('/documents/list-all', async (_req: Request, res: Response) => {
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
    res.status(200).send(formattedFiles);
  } catch (e) {
    const { code, message } = e?.response?.data?.error || { code: 400, message: 'Error' };
    res.status(code).send(message);
  }
});

router.post('/documents/create', multer.single('file'), async (req: Request, res: Response) => {
  const bufferStream = new stream.PassThrough();
  bufferStream.end(req.file.buffer);
  try {
    const resp = await drive.files.create({
      requestBody: {
        parents: ['1yC9aE5xGBLScv4f7oAC57KZKycLuCGxk'],
        name: req.file.originalname,
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
    res.status(resp.status).send({
      message: `Successfully uploaded file ${req.file.originalname} to the Google Drive`,
      files: formattedFiles,
    });
  } catch (e) {
    const { code, message } = e?.response?.data?.error || { code: 400, message: 'Error' };
    res.status(code).send(message);
  }
});

export { router as documentsRouter };
