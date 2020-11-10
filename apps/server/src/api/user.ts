import express, { Request, Response } from 'express';
import path from 'path';
import { load } from 'protobufjs';

import UserModel from '../models/user';

const protoFilePath = path.join(process.cwd(), '/src/protos/user.proto');
const router = express.Router();

router.get('/api/users', (req: Request, res: Response) => {
  load(protoFilePath, async function (err, root) {
    if (err || !root) {
      res.status(500).send(err || 'Error: could not find proto file.');
      return;
    }

    const result = UserModel.find({ username: req.body.username });
    const [{ username, password }] = await result.exec();

    const userProto = root.lookupType('user.User');
    const errMsg = userProto.verify({ username, password });
    if (errMsg) res.status(500).send(errMsg);
    const message = userProto.encode(userProto.create({ username, password })).finish();

    res.status(200).send(message); // Receives JSON and sends Protobuf
  });
});

router.post('/api/users', (req: Request, res: Response) => {
  load(protoFilePath, async function (err, root) {
    if (err || !root) {
      res.status(500).send(err || 'Error: could not find proto file.');
      return;
    }

    UserModel.create(req.body);
    res.status(200).send('Success: user has been created.'); // Receives JSON and saves JSON to DB
  });
});

export { router as userRouter };
