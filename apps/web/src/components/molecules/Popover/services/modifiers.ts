import { beforeWrite, Modifier } from '@popperjs/core';

import { ModifierNames } from '../types/ModifierNames';

export const sameWidth: Modifier<ModifierNames.SameWidth, unknown> = {
  name: ModifierNames.SameWidth,
  enabled: true,
  phase: beforeWrite,
  requires: ['computeStyles'],
  fn: ({ state }) => {
    // eslint-disable-next-line functional/immutable-data
    state.styles.popper.width = `${state.rects.reference.width}px`;
  },
  effect: ({ state }) => {
    // eslint-disable-next-line functional/immutable-data
    state.elements.popper.style.width = `${
      (state.elements.reference as HTMLElement).offsetWidth
    }px`;
  },
};
