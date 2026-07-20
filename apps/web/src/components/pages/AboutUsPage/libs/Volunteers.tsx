import React, { FC, useState } from 'react';

interface Props {
  readonly names: ReadonlyArray<string>;
}

/** ~200 names; clipped behind a fade until asked for, so it can't swamp the page. */
export const Volunteers: FC<Props> = ({ names }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`names-wrap${open ? '' : ' is-clipped'}`}>
        <div className="names">
          {names.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="btn btn--ghost"
        style={{ marginTop: 24 }}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Свернуть' : `Показать всех — ${names.length}`}
      </button>
    </>
  );
};
