import { colors, typography } from 'core';
import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLUListElement> & Partial<colors.Props>;
export type OrderedProps = HTMLAttributes<HTMLOListElement> & Partial<typography.Props>;
