import { ClockIcon } from '@heroicons/react/outline';
import { P } from 'components';
import { services, typography } from 'core';
import * as Cookies from 'js-cookie';
import React, { FC } from 'react';

import { Props } from './props';

export const LastUpdated: FC<Props> = (props: Props) => {
  const lang = Cookies.get('lang');
  return (
    <div className="d-flex justify-content-start align-items-center mb-3">
      <ClockIcon className="tw-h-5 tw-w-5 tw-mr-2" />
      <P className="pr-2" typography={typography.variants.Element.SemiBold12}>
        {props.lastUpdatedText}
      </P>
      <P className="pr-2" typography={typography.variants.Element.Regular12}>
        {services.parseDate(props.date.toString(), lang === 'ru-RU' ? 'ru' : 'kk')}
      </P>
    </div>
  );
};
