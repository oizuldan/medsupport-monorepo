import express, { Request, Response } from 'express';

import { authRouter } from './auth';
import { documentsRouter } from './documents';
import { userRouter } from './user';

const router = express.Router();

router.use(userRouter);
router.use(documentsRouter);
router.use(authRouter);

router.get('/', (_req: Request, res: Response) =>
  res.status(200).send('WIP: You can use /api/users route for get/post queries.'),
);

export default router;
