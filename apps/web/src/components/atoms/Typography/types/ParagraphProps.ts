import { colors, typography } from 'core';
import { HTMLAttributes } from 'react';

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> &
  Partial<colors.Props> &
  Partial<typography.Props>;
