import { Icon } from '../types/Icon';

export const createIcon = (width: number, height: number, path: Icon['path']): Icon => ({
  width,
  height,
  path,
});
