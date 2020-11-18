import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import router from './api';

dotenv.config({ path: __dirname + '/.env' });

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MNG_USR}:${process.env.MNG_PSWD}@cluster-main.4cf5c.gcp.mongodb.net/${process.env.MNG_DB}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return;
  }

  // eslint-disable-next-line no-console
  console.log(`Server has started on port ${process.env.PORT}...`);
});
