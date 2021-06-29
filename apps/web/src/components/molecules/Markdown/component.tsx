/* eslint-disable react/display-name */
import { css } from '@emotion/core';
import { Anchor, H1, H2, H3, H4, H5, List, ListItem, OrderedList, P } from 'components';
import { media, services, typography } from 'core';
import React, {
  HTMLAttributes,
  ImgHTMLAttributes,
  LiHTMLAttributes,
  useCallback,
  useMemo,
} from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { Props } from './props';
import { Component } from './types/Component';

export const Markdown: React.FC<Props> = ({ children: childrenProp, ...rest }: Props) => {
  const children = useMemo(() => services.transformMarkdownImages(childrenProp), [childrenProp]);
  const transformUri = useCallback(
    (uri: string) => (uri.startsWith('http') ? uri : `${process.env.BASE_URL}${uri}`),
    [],
  );
  return (
    <ReactMarkdown
      className="d-flex flex-column"
      rehypePlugins={[rehypeRaw]}
      transformLinkUri={transformUri}
      transformImageUri={transformUri}
      skipHtml={false}
      components={{
        p: ({ node: _node, ...props }: Component<HTMLAttributes<HTMLParagraphElement>>) => (
          <P typography={typography.variants.Content.Regular16} className="mb-3" {...props} />
        ),
        h1: ({ node: _node, ...props }: Component<HTMLAttributes<HTMLHeadingElement>>) => (
          <H1
            className="my-3"
            css={css(
              typography.styles.headingBold28,
              media.queryStyled([
                typography.styles.headingBold28,
                typography.styles.headingBold28,
                typography.styles.headingBold34,
              ]),
            )}
            {...props}
          />
        ),
        h2: ({ node: _node, ...props }: Component<HTMLAttributes<HTMLHeadingElement>>) => (
          <H2
            className="my-3"
            css={css(
              typography.styles.headingBold22,
              media.queryStyled([
                typography.styles.headingBold22,
                typography.styles.headingBold22,
                typography.styles.headingBold28,
              ]),
            )}
            {...props}
          />
        ),
        h3: ({ node: _node, ...props }: Component<HTMLAttributes<HTMLHeadingElement>>) => (
          <H3
            className="my-3"
            css={css(
              typography.styles.headingBold17,
              media.queryStyled([
                typography.styles.headingBold17,
                typography.styles.headingBold17,
                typography.styles.headingBold22,
              ]),
            )}
            {...props}
          />
        ),
        h4: ({ node: _node, ...props }: Component<HTMLAttributes<HTMLHeadingElement>>) => (
          <H4
            className="my-3"
            css={css(
              typography.styles.elementBold12,
              media.queryStyled([
                typography.styles.elementBold12,
                typography.styles.elementBold12,
                typography.styles.headingBold17,
              ]),
            )}
            {...props}
          />
        ),
        h5: ({ node: _node, ...props }: Component<HTMLAttributes<HTMLHeadingElement>>) => (
          <H5 className="my-3" {...props} />
        ),
        img: ({
          node: _node,
          alt,
          src,
          ...props
        }: Component<ImgHTMLAttributes<HTMLImageElement>>) => (
          <img
            alt={alt}
            src={src}
            className="mb-3"
            css={css({
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: 350,
              height: 'auto',
            })}
            {...props}
          />
        ),
        ol: ({ node: _node, ...props }: Component<HTMLAttributes<HTMLOListElement>>) => (
          <OrderedList
            {...props}
            className="pl-5 mb-4"
            typography={typography.variants.Content.Regular16}
          />
        ),
        ul: ({ node: _node, ...props }: Component<HTMLAttributes<HTMLUListElement>>) => (
          <List
            {...props}
            className="pl-5 mb-4"
            css={css`
              list-style: disc;
            `}
          />
        ),
        li: ({ node: _node, ...props }: Component<LiHTMLAttributes<HTMLLIElement>>) => (
          <ListItem
            {...props}
            className="mb-2"
            typography={typography.variants.Content.Regular16}
          />
        ),
        a: ({ node: _node, ...props }: Component<HTMLAttributes<HTMLAnchorElement>>) => (
          <Anchor
            {...props}
            css={css`
              word-break: break-all;
            `}
          />
        ),
      }}
      {...rest}
    >
      {children}
    </ReactMarkdown>
  );
};
