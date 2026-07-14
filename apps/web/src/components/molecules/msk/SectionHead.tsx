import React, { FC, ReactNode } from 'react';

import { Eyebrow } from './Eyebrow';

interface Props {
  eyebrow: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  eyebrowVariant?: 'rose' | 'teal';
  className?: string;
}

export const SectionHead: FC<Props> = ({ eyebrow, title, lead, eyebrowVariant, className = '' }) => (
  <div className={`section-head reveal ${className}`.trim()}>
    <Eyebrow variant={eyebrowVariant}>{eyebrow}</Eyebrow>
    <h2 className="h-xl">{title}</h2>
    {lead && (
      <p className="lead" style={{ marginTop: 18 }}>
        {lead}
      </p>
    )}
  </div>
);
