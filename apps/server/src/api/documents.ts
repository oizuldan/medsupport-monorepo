import express, { Request, Response } from 'express';
import Multer from 'multer';

import DocumentService from '../services/DocumentService';

const router = express.Router();

// type File = {
//   readonly mimeType: string;
//   readonly parents: ReadonlyArray<string>;
//   readonly webViewLink: string;
//   readonly thumbnailLink: string;
//   readonly createdTime: string;
// };

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 20 * 1024 * 1024, // no larger than 20mb, you can change as needed.
  },
});

router.get('/api/list-documents', async (_req: Request, res: Response) => {
  const result = await DocumentService.listDocuments();
  if (result.success) {
    res.status(200).send(result.files);
  } else {
    res.status(result.code).send(result.error);
  }
});

router.post('/api/create-document', multer.single('file'), async (req: Request, res: Response) => {
  const result = await DocumentService.createDocument(req.file.buffer, req.file.originalname);
  if (result.success) {
    res.status(result.code).send(result.success);
  } else {
    res.status(result.code).send(result.error);
  }
});

export { router as document };
