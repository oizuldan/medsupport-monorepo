import { Application } from 'express';
import expressHttpProxy from 'express-http-proxy';
import * as E from 'fp-ts/lib/Either';
import * as O from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
import * as T from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';

import { WithProxy } from './types/WithProxy';

const isDev = (app: Application): E.Either<Application, Application> =>
  process.env.NODE_ENV === 'production' ? E.left(app) : E.right(app);

const parseProxyHost = (packageJson: unknown): O.Option<string> => {
  if (typeof packageJson !== 'object') return O.none;
  if (Array.isArray(packageJson)) return O.none;
  return O.some((packageJson as WithProxy).proxy);
};

export const proxy = (path: string, packageJson: unknown) => (
  app: Application,
): T.Task<Application> =>
  pipe(
    T.of(app),
    T.chain((app) => TE.fromEither(isDev(app))),
    TE.fold(
      (app) => T.of(app),
      (app) =>
        pipe(
          parseProxyHost(packageJson),
          O.fold(
            () => {
              // eslint-disable-next-line no-console
              console.log(`> Couldn't find property 'proxy' in package.json, disabling proxy`);
              return T.of(app);
            },
            (host) => T.of(app.use(path, expressHttpProxy(host))),
          ),
        ),
    ),
  );
