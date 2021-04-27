import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { Server } from 'socket.io';

import router from './api';

dotenv.config({ path: __dirname + '/config/.env' });
const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';
const corsOptions = { origin: '*' };

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(router);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  socket.on('disconnect', () => {
    socket.leave(String(roomId));
  });
});

server.listen(process.env.PORT, async () => {
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
