import facepaint from 'facepaint';

import { toMedia } from './services/toMedia';
import { Breakpoints } from './types/Breakpoints';

export const query = facepaint(
  Object.values(Breakpoints)
    .filter(Number)
    .map((n) => toMedia(n)),
);
