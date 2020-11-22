import 'bootstrap-4-grid/css/grid.css';

import css from '@emotion/css';
import { NextPage } from 'next';
import React from 'react';

import { Props } from './props';

export const Table: NextPage<Props> = (props: Props) => {
  const { bodyData, headerData } = props;
  const openDocument = (link: string) => (): void => {
    window.open(link);
  };

  return (
    <table
      css={css`
        width: 100%;
        color: #212529;
        border-collapse: collapse;
      `}
    >
      <thead>
        <tr
          css={css`
            text-align: left;
          `}
        >
          {headerData &&
            headerData.map((item, index) => (
              <th
                scope="col"
                css={css`
                  vertical-align: bottom;
                  border-bottom: 2px solid #dee2e6;
                  padding: 0.75rem;
                  vertical-align: top;
                  border-top: 1px solid #dee2e6;
                `}
                key={index}
              >
                {item}
              </th>
            ))}
        </tr>
      </thead>
      <tbody
        css={css`
          border-top: 2px solid #dee2e6;
        `}
      >
        {bodyData.map((item, index) => (
          <tr
            css={css`
              text-align: left;
              cursor: pointer;
            `}
            onClick={openDocument(item.link)}
            key={index}
          >
            <td
              css={css`
                padding: 0.75rem;
                vertical-align: top;
                border-top: 1px solid #dee2e6;
              `}
            >
              {item && item.name}
            </td>
            <td
              css={css`
                padding: 0.75rem;
                vertical-align: top;
                border-top: 1px solid #dee2e6;
              `}
            >
              {item && item.date.toString()}
            </td>
            <td
              css={css`
                padding: 0.75rem;
                vertical-align: top;
                border-top: 1px solid #dee2e6;
              `}
            >
              {item && item.size}
            </td>
            <td
              css={css`
                padding: 0.75rem;
                vertical-align: top;
                border-top: 1px solid #dee2e6;
              `}
            >
              {item && item.posted}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
