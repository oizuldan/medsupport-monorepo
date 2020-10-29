import { Registry } from 'next-routes';
import { ServerConstructor } from 'next/dist/next-server/server/next-server';

export type ServerOptions = Required<Pick<ServerConstructor, 'dir' | 'dev' | 'conf'>> & {
  readonly registry: Registry;
};
