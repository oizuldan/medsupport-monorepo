import express, { Request, Response } from 'express';

import { userRouter } from './user';

const router = express.Router();
router.use(userRouter);

router.get('/', (_req: Request, res: Response) =>
  res.status(200).send('WIP: You can use /api/users route for get/post queries.'),
);

export default router;
