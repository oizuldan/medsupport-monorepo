import express, { Request, Response } from 'express';
import Multer from 'multer';

import DocumentService from '../services/DocumentService';

const router = express.Router();

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 20 * 1024 * 1024, // no larger than 20mb, you can change as needed.
  },
});

router.post('/api/create-document', multer.single('file'), async (req: Request, res: Response) => {
  const result = await DocumentService.createDocument(
    req.file.buffer,
    req.file.originalname,
    req.body.title,
    req.body.author,
    req.body.description,
  );
  if (result.success) {
    res.status(result.code).send({ message: result.success });
  } else {
    res.status(result.code).send(result.error);
  }
});

export { router as document };
