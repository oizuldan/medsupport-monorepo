import { sequenceT } from 'fp-ts/lib/Apply';
import { pipe } from 'fp-ts/lib/pipeable';
import * as T from 'fp-ts/lib/Task';
import createServer from 'next';
import { HTTPHandler } from 'next-routes';

import { ServerOptions } from './types/ServerOptions';

export const server = ({ dir, dev, conf, registry }: ServerOptions): T.Task<HTTPHandler> =>
  pipe(
    T.of(createServer({ dir, dev, conf })),
    T.chain((server) => sequenceT(T.task)(T.of(server), server.prepare.bind(server))),
    T.chain(([server]) => T.of(registry.getRequestHandler(server))),
  );
