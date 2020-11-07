import express, { Request, Response } from 'express';
import { load } from 'protobufjs';

import UserModel from '../schemas/user';

const router = express.Router();

router.get('/api/userss', (_req: Request, res: Response) => {
  load('/home/oizuldan/Desktop/medsupportkz/apps/server/src/protos/user.proto', async function (
    err,
    root,
  ) {
    if (err || !root) {
      res.status(500).send(err || 'did not find root');
      return;
    }

    const result = UserModel.find({
      username: 'ais',
    });
    const [{ username, password }] = await result.exec();
    // example code
    const User = root.lookupType('user.User');

    const errMsg = User.verify({ username, password });

    if (errMsg) {
      res.status(500).send(errMsg);
      return;
    }

    const message = User.create({ username, password });

    const buffer = User.encode(message).finish();

    // const decoded = User.decode(buffer);

    res.status(200).send(buffer);
  });
});

router.post('/api/users', (_req: Request, res: Response) => res.send('user has been created'));

export { router as userRouter };
