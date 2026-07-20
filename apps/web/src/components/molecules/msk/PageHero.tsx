import React, { FC } from 'react';

import { Eyebrow } from './Eyebrow';

export interface Crumb {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  eyebrowVariant?: 'rose' | 'teal';
}

export const PageHero: FC<PageHeroProps> = ({ eyebrow, title, lead, crumbs, eyebrowVariant }) => (
  <>
    {crumbs && crumbs.length > 0 && (
      <nav className="crumb">
        {crumbs.map((crumb, index) => (
          <React.Fragment key={`${crumb.label}-${index}`}>
            {index > 0 && <span className="sep">/</span>}
            {crumb.href ? <a href={crumb.href}>{crumb.label}</a> : <span>{crumb.label}</span>}
          </React.Fragment>
        ))}
      </nav>
    )}
    <section className="page-hero">
      <div className="container">
        {eyebrow && (
          <Eyebrow variant={eyebrowVariant} className="rise">
            {eyebrow}
          </Eyebrow>
        )}
        <h1 className="h-xl rise" data-delay="1">
          {title}
        </h1>
        {lead && (
          <p className="lead rise" data-delay="2">
            {lead}
          </p>
        )}
      </div>
    </section>
  </>
);
