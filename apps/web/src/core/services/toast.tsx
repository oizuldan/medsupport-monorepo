import cogoToast from 'cogo-toast';
import React, { ComponentType, createElement, ReactNode } from 'react';

import { ToastProps } from './types/ToastProps';
import { ToastTypes } from './types/ToastTypes';

export const toast = (
  toast: ComponentType<ToastProps>,
  type: ToastTypes,
  text: ReactNode,
): void => {
  const { hide } = cogoToast.info(
    <>
      {createElement(toast, {
        text,
        type,
        style: {
          margin: '-12px -20px -12px -35px',
        },
      })}
    </>,
    {
      hideAfter: 5,
      onClick: () => {
        if (hide) hide();
      },
      position: 'top-right',
      renderIcon: () => {
        return undefined;
      },
      bar: {
        size: '0',
      },
    },
  );
};
