import { proxy, proxy2, proxy3, server } from '@medsupportkz/next';
import config from 'dotenv-load';
import express from 'express';
import { sequenceT } from 'fp-ts/lib/Apply';
import { pipe } from 'fp-ts/lib/pipeable';
import * as T from 'fp-ts/lib/Task';
import path from 'path';

import conf from '../next.config';
import packageJson from '../package.json';
import { registry } from './routes';

const dev = process.env.NODE_ENV !== 'production';
const dir = path.resolve(__dirname, '../');
const port = process.env.PORT || 3000;

config();
pipe(
  T.of(express()),
  T.chain(proxy('/proxy', packageJson)),
  T.chain(proxy2('/proxy2', packageJson)),
  T.chain(proxy3('/proxy3', packageJson)),
  T.chain((app) => sequenceT(T.task)(server({ dev, dir, conf, registry }), T.of(app))),
  T.chain(([handler, app]) => T.of(app.use(handler))),
  T.chain((app) =>
    // eslint-disable-next-line no-console
    T.of(app.listen(port, () => console.log(`> Ready on http://localhost:${port}`))),
  ),
)();
