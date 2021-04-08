import { Modifier } from '@popperjs/core';

import { ModifierNames } from './ModifierNames';

export type Modifiers = Partial<Modifier<ModifierNames, unknown>>;
