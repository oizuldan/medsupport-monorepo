import 'bootstrap-4-grid/css/grid.css';

import { css } from '@emotion/core';
import React, { FC, useCallback } from 'react';

import { Props } from './props';

export const Table: FC<Props> = ({ bodyData, headerData }: Props) => {
  const openDocument = useCallback((link: string) => () => window.open(link), []);

  return (
    <table
      className="w-100"
      css={{
        color: '#212529',
        borderCollapse: 'collapse',
      }}
    >
      <thead>
        <tr
          css={{
            textAlign: 'left',
          }}
        >
          {headerData &&
            headerData.map((item, index) => (
              <th
                scope="col"
                css={{
                  verticalAlign: 'bottom',
                  borderBottom: '2px solid #dee2e6',
                  padding: '0.75rem',
                  borderTop: '1px solid #dee2e6',
                }}
                key={index}
              >
                {item}
              </th>
            ))}
        </tr>
      </thead>
      <tbody
        css={{
          borderTop: '2px solid #dee2e6',
        }}
      >
        {bodyData.map((item, index) => (
          <tr
            css={css`
              text-align: left;
              cursor: pointer;
              &:hover {
                background-color: rgba(64, 17, 77, 0.05);
              }
            `}
            onClick={openDocument(item.link)}
            key={index}
          >
            <td
              css={{
                padding: '0.75rem',
                verticalAlign: 'top',
                borderTop: '1px solid #dee2e6',
              }}
            >
              {item && item.name}
            </td>
            <td
              css={{
                padding: '0.75rem',
                verticalAlign: 'top',
                borderTop: '1px solid #dee2e6',
              }}
            >
              {item && item.date.toString()}
            </td>
            <td
              css={{
                padding: '0.75rem',
                verticalAlign: 'top',
                borderTop: '1px solid #dee2e6',
              }}
            >
              {item && item.size}
            </td>
            <td
              css={{
                padding: '0.75rem',
                verticalAlign: 'top',
                borderTop: '1px solid #dee2e6',
              }}
            >
              {item && item.posted}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
