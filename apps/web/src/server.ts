import { server } from '@medsupportkz/next';
import express from 'express';
import { sequenceT } from 'fp-ts/lib/Apply';
import { pipe } from 'fp-ts/lib/pipeable';
import * as T from 'fp-ts/lib/Task';
import path from 'path';

import conf from '../next.config';
import { registry } from './routes';

const dev = process.env.NODE_ENV !== 'production';
const dir = path.resolve(__dirname, '../');
const port = process.env.PORT || 3000;

pipe(
  T.of(express()),
  T.chain((app) => sequenceT(T.task)(server({ dev, dir, conf, registry }), T.of(app))),
  T.chain(([handler, app]) => T.of(app.use(handler))),
  T.chain((app) =>
    // eslint-disable-next-line no-console
    T.of(app.listen(port, () => console.log(`> Ready on http://localhost:${port}`))),
  ),
)();
