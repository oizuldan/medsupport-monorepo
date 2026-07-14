import React, { FC } from 'react';

/** Inline SVG mark + wordmark. Markup ported from index.html:997-1003. */
export const Logo: FC<{ className?: string }> = ({ className }) => (
  <a
    className={`logo${className ? ` ${className}` : ''}`}
    href="/"
    aria-label="Medsupportkz — на главную"
  >
    <svg className="logo__mark" viewBox="0 0 40 34" fill="none" aria-hidden="true">
      <rect x="2" y="12" width="36" height="8.5" rx="1.5" fill="#48C0D2" />
      <rect x="15.5" y="8.5" width="9" height="25" fill="#F2A15C" />
      <circle cx="20" cy="5.6" r="5.2" fill="#F2A15C" />
    </svg>
    <span>
      <b>medsupport</b>
      <span className="kz">kz</span>
    </span>
  </a>
);
