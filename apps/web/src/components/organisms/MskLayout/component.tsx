import { Btn } from 'components/molecules/msk';
import { MskFooter } from 'components/organisms/MskFooter';
import { MskHeader } from 'components/organisms/MskHeader';
import { useFloatingCta, useReveal } from 'core/hooks';
import { useLang } from 'core/i18n';
import React, { FC } from 'react';

import { Props } from './props';

export const MskLayout: FC<Props> = ({
  dark,
  links,
  footerSections,
  floatingCta = true,
  children,
}) => {
  useReveal();
  const showCta = useFloatingCta();
  const { t } = useLang();

  return (
    <div className="msk">
      <MskHeader dark={dark} links={links} />
      <main>{children}</main>
      <MskFooter sections={footerSections} />
      {floatingCta && (
        <Btn
          href="/partner"
          withArrow
          className={`float-cta${showCta ? ' is-show' : ''}`}
        >
          {t('float.cta')}
        </Btn>
      )}
    </div>
  );
};
