import { css } from '@emotion/core';
import classNames from 'classnames';
import { Anchor, P, Typography } from 'components';
import { MainPage_footerSections_sections } from 'components/pages/HomePage/__generated__/MainPage';
import { colors, media, typography } from 'core';
import React, { FC, useCallback } from 'react';

import { Props } from './props';

export const Footer: FC<Props> = ({ className, footerSections, ...rest }: Props) => {
  const getSection = useCallback(
    (section: MainPage_footerSections_sections | null) => (
      <div className={'d-flex flex-column col-md-4 col-6 p-3'} css={{ wordBreak: 'break-word' }}>
        <Typography
          as="p"
          className="mb-lg-3 mb-2"
          css={css(
            typography.styles.elementBold16,
            media.queryStyled([
              typography.styles.elementBold16,
              typography.styles.elementBold16,
              typography.styles.elementSemiBold20,
            ]),
          )}
          color={colors.variants.Text.Secondary}
        >
          {section?.title}
        </Typography>
        {section?.links?.map((link, i) => (
          <div
            key={i}
            className={`d-flex align-items-center ${
              section?.links && i !== section.links.length - 1 ? 'mb-lg-3 mb-2' : ''
            }`}
          >
            {link?.title && link?.link && (
              <Anchor
                key={link.title + i}
                href={link.link}
                color={colors.variants.Text.Secondary}
                css={css(
                  typography.styles.elementRegular12,
                  media.queryStyled([
                    typography.styles.elementRegular12,
                    typography.styles.elementRegular12,
                    typography.styles.elementRegular16,
                  ]),
                )}
              >
                {link.title}
              </Anchor>
            )}
          </div>
        ))}
      </div>
    ),
    [],
  );

  return (
    <div
      className={classNames(className, 'd-flex flex-column p-lg-3 p-2 mt-auto')}
      css={{
        backgroundColor: colors.variants.Brand.DarkPurple,
      }}
      {...rest}
    >
      <div className="container-xl mb-3 d-flex flex-lg-row flex-column w-100 align-items-center">
        <img
          alt="footer"
          src="/static/images/logoWhite.svg"
          className="mr-lg-4 mr-0"
          css={{ maxWidth: 300 }}
        />

        <div className="d-flex  w-100 flex-lg-row flex-column-reverse ">
          <div className="d-flex flex-wrap p-0">
            {footerSections?.[0]?.sections?.map((data) => getSection(data))}
            <div className={'d-flex flex-column col-md-4 col-6 pt-3'}>
              <img
                alt="footer"
                className="mb-3"
                src="/static/images/expertsHub.png"
                css={{ maxWidth: 300 }}
              />
              <img
                alt="footer"
                src="/static/images/imas.svg"
                css={{ maxWidth: 300, filter: 'invert()' }}
              />
            </div>
          </div>
        </div>
      </div>

      <P
        className="align-self-lg-end align-self-center"
        color={colors.variants.Text.Secondary}
        typography={typography.variants.Element.SemiBold16}
      >
        All rights reserved. 2021
      </P>
    </div>
  );
};
