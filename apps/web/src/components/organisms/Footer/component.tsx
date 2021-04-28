import { css } from '@emotion/core';
import classNames from 'classnames';
import {
  Anchor,
  Button,
  ButtonSizes,
  ButtonVariants,
  Icon,
  Input,
  InputGroup,
  P,
  Typography,
} from 'components';
import { colors, icons, media, typography } from 'core';
import React, { ChangeEventHandler, FC, useCallback, useState } from 'react';

import * as mock from './mock';
import { Props } from './props';
import { SectionData } from './types/SectionData';

export const Footer: FC<Props> = ({ className, ...rest }: Props) => {
  const [email, setEmail] = useState('');
  const onChangeEmail = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => setEmail(event.target.value),
    [],
  );
  const getSection = useCallback(
    (data: SectionData) => (
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
          {data.title}
        </Typography>
        {data.links?.map((link, i) => (
          <div
            key={i}
            className={`d-flex align-items-center ${
              data.links && i !== data.links.length - 1 ? 'mb-lg-3 mb-2' : ''
            }`}
          >
            {link.icons?.map((icon) => (
              <img className="mr-2" key={icon.alt} alt={icon.alt} src={icon.url} />
            ))}
            {link.name && (
              <Anchor
                key={link.name + i}
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
                {link.name}
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
      <div className="container-xl d-flex flex-lg-row flex-column w-100 align-items-center">
        <img
          alt="footer"
          src="/static/images/logoWhite.svg"
          className="mr-lg-4 mr-0"
          css={{ maxWidth: 300 }}
        />

        <div className="d-flex w-100 flex-lg-row flex-column-reverse ">
          <div className="d-flex flex-wrap p-0">
            {mock.sectionData.map((data) => getSection(data))}
          </div>
          <div className="d-flex  p-3 justify-content-lg-start justify-content-center">
            <div>
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
                Будьте в курсе
              </Typography>
              <InputGroup
                css={{ maxWidth: 250 }}
                rightElement={
                  <Button variant={ButtonVariants.Flat} size={ButtonSizes.Small}>
                    <Icon icon={icons.actions.send} color={colors.variants.Neutral.White} />
                  </Button>
                }
              >
                <Input
                  value={email}
                  onChange={onChangeEmail}
                  css={css(
                    {
                      backgroundColor: colors.variants.Neutral.WhiteWithOpacity20,
                      border: 0,
                      borderRadius: 8,
                      color: colors.variants.Neutral.White,
                    },
                    typography.styles.elementRegular12,
                    media.queryStyled([
                      typography.styles.elementRegular12,
                      typography.styles.elementRegular12,
                      typography.styles.elementRegular16,
                    ]),
                  )}
                  type="email"
                  placeholder="Ваш email"
                  placeholderColor={colors.variants.Neutral.LightGrey}
                />
              </InputGroup>
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
