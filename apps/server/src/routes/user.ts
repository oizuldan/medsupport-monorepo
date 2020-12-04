import express, { Request, Response } from 'express';

import UserModel from '../models/user';

const router = express.Router();

router.get('/api/users', async (_req: Request, res: Response) => {
  try {
    const allUsers = await UserModel.find().exec();
    res.status(200).send(allUsers);
  } catch (e) {
    const { code, message } = e?.response?.data?.error || { code: 400, message: 'Error' };
    res.status(code).send(message);
  }
});

export { router as userRouter };
