/* eslint-disable no-console */
import cors from 'cors';
import express, { Request, Response } from 'express';

// import mongoose from 'mongoose';
import { userRouter } from './api/users';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const app = new (express as any)();

app.use(cors());
app.use(userRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('WIP: You can use /api/user route for get/post queries.');
});

// mongoose.connect(
//   `mongodb+srv://admin:dev123@cluster-main.4cf5c.gcp.mongodb.net/medsupport?retryWrites=true&w=majority`,
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   () => {
//     console.log('Server has connected to database.');
//   },
// );

app.listen(8000, () => {
  console.log(`Server has started on port 8000...`);
});
