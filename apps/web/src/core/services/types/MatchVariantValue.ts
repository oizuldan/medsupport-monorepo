import { SerializedStyles } from '@emotion/core';
import { services } from 'core';

export type MatchVariantValue<P> = SerializedStyles | services.FI<P>;
