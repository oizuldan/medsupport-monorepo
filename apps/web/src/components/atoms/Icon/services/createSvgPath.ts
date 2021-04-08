import { icons } from 'core';
import { createElement, isValidElement, ReactElement } from 'react';

export const createSvgPath = (
  path: icons.Icon['path'],
): ReactElement | ReadonlyArray<ReactElement> =>
  isValidElement(path)
    ? path
    : Array.isArray(path)
    ? path.map((n, i) => createElement('path', { d: n, key: i }))
    : createElement('path', { d: path });
