import { colors } from 'core';
import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLUListElement> & Partial<colors.Props>;
