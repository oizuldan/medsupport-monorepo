import { NextConfig as RootNextConfig } from '@azimutlabs/next-config';

import { Redirect } from './Redirect';

export type NextConfig = RootNextConfig & {
  readonly redirects?: ReadonlyArray<Redirect>;
};
