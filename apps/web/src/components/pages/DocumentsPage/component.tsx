import { css } from '@emotion/core';
import axios from 'axios';
import {
  ButtonLink,
  ButtonSizes,
  ButtonVariants,
  H1,
  Icon,
  IconSizes,
  Layout,
  List,
  ListItem,
  P,
} from 'components';
import { colors, icons, media, services, typography } from 'core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

import { Props } from './props';
import { Data } from './types/Data';

export const DocumentsPage: NextPage<Props> = ({ documents }: Props) => {
  const router = useRouter();
  const onGoToDocUpload = useCallback(() => router.push('/document-upload'), [router]);
  return (
    <Layout>
      <div className="container my-lg-5 my-md-3 my-1">
        <div className="d-flex justify-content-between align-items-center mb-md-3 mb-2">
          <H1
            css={css(
              typography.styles.headingBold22,
              media.queryStyled([
                typography.styles.headingBold22,
                typography.styles.headingBold22,
                typography.styles.headingBold34,
              ]),
            )}
          >
            Документы
          </H1>
          <ButtonLink
            type="a"
            onClick={onGoToDocUpload}
            variant={ButtonVariants.Flat}
            size={ButtonSizes.Small}
            color={colors.variants.Text.Primary}
            css={css(
              typography.styles.elementBold12,
              media.queryStyled([typography.styles.headingBold17]),
            )}
          >
            Загрузить документ
          </ButtonLink>
        </div>
        <P
          className="mb-5"
          css={css(
            typography.styles.contentRegular16,
            media.queryStyled([
              typography.styles.contentRegular16,
              typography.styles.contentRegular16,
              typography.styles.contentRegular20,
            ]),
          )}
        >
          Здесь администраторы сайта будут добавлять документацию для врачей и ученых
        </P>
        <List>
          {documents?.map((doc) => (
            <ListItem
              key={doc.title}
              className="d-flex flex-md-row flex-column justify-content-between mb-5"
            >
              <div className="col-md-9 col-12 p-0 mb-md-0 mb-2">
                <P
                  className="mb-1"
                  css={css(
                    typography.styles.contentRegular20,
                    media.queryStyled([
                      typography.styles.contentRegular20,
                      typography.styles.contentRegular20,
                      typography.styles.contentRegular24,
                    ]),
                  )}
                >
                  {doc.title}
                </P>
                <div className="d-flex justify-content-between">
                  <P
                    className="mb-1"
                    typography={typography.variants.Content.Regular16}
                    color={colors.variants.Neutral.Grey}
                  >
                    {doc.author}
                  </P>
                  <P
                    className="mb-1"
                    typography={typography.variants.Content.Regular16}
                    color={colors.variants.Neutral.Grey}
                  >
                    {services.parseDate(doc.createdAt, 'ru')}
                  </P>
                </div>
                <P
                  typography={typography.variants.Content.Regular16}
                  css={{
                    overflow: 'hidden',
                    '-webkit-line-clamp': '4',
                    '-webkit-box-orient': 'vertical',
                    display: '-webkit-box',
                  }}
                >
                  {doc.description}
                </P>
              </div>
              <div className="d-flex flex-md-column flex-row justify-content-md-center">
                <ButtonLink
                  type="a"
                  variant={ButtonVariants.Flat}
                  size={ButtonSizes.Small}
                  href={doc.downloadLink}
                  className="mb-md-4 mb-0 mr-md-0 mr-4 d-flex align-items-center justify-content-start"
                  color={colors.variants.Text.Primary}
                  css={css(
                    typography.styles.elementBold12,
                    media.queryStyled([typography.styles.headingBold17]),
                  )}
                >
                  <Icon icon={icons.actions.fileUpload} className="mr-2" size={IconSizes.Small} />
                  Скачать PDF
                </ButtonLink>
                <ButtonLink
                  type="a"
                  target="_blank"
                  variant={ButtonVariants.Flat}
                  size={ButtonSizes.Small}
                  href={doc.viewLink}
                  className="d-flex align-items-center justify-content-start"
                  color={colors.variants.Text.Primary}
                  css={css(
                    typography.styles.elementBold12,
                    media.queryStyled([typography.styles.headingBold17]),
                  )}
                >
                  <Icon icon={icons.actions.aspectRatio} className="mr-2" size={IconSizes.Small} />
                  Просмотр
                </ButtonLink>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    </Layout>
  );
};

DocumentsPage.getInitialProps = async () => {
  const documents = await axios.get('http://localhost:3000/proxy3/documents');
  return {
    documents: documents.data as ReadonlyArray<Data>,
  };
};
