import cors from 'cors';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import { userRouter } from './api/user';

const app = express();

app.use(cors());
app.use(userRouter);

app.get('/', (_req: Request, res: Response) =>
  res.status(200).send('WIP: You can use /api/users route for get/post queries.'),
);

app.listen(8000, async () => {
  await mongoose.connect(
    'mongodb+srv://admin:dev123@cluster-main.4cf5c.gcp.mongodb.net/medsupport?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );

  // eslint-disable-next-line no-console
  console.log('Server has started on port 8000...');
});
