import express, { Request, Response } from 'express';

import UserModel from '../models/user';

const router = express.Router();

router.get('/api/users', async (req: Request, res: Response) => {
  const queryUsername: string = req.query.username as string;
  const result = UserModel.find({ username: queryUsername });
  const message = await result.exec();

  res.status(200).send(message);
});

router.post('/api/users', async (req: Request, res: Response) => {
  await UserModel.create(req.body);
  res.status(200).send('Success: user has been created.');
});

export { router as userRouter };
