import express, { Request, Response } from 'express';

import UserModel from '../models/user';

const router = express.Router();

router.get('/api/users', async (_req: Request, res: Response) => {
  const allUsers = await UserModel.find().exec();
  res.status(200).send(allUsers);
});

export { router as userRouter };
