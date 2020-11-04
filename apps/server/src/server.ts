import cors from 'cors';
import express, { Request, Response } from 'express';

import { userRouter } from './api/users';

const app = express();

app.use(cors());
app.use(userRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('WIP: You can use /api/users route for get/post queries.');
});

app.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log('Server has started on port 8000...');
});
