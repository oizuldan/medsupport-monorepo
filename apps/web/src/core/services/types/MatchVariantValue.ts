import { SerializedStyles } from '@emotion/react';
import { services } from 'core';

export type MatchVariantValue<P> = SerializedStyles | services.FI<P>;
