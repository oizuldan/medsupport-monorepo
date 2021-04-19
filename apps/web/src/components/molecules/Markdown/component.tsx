/* eslint-disable react/display-name */
import { H1, H2, H3, H4, H5, P } from 'components';
import { media, services, typography } from 'core';
import React, { HTMLAttributes, ImgHTMLAttributes, useCallback, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { Props } from './props';
import { Component } from './types/Component';

export const Markdown: React.FC<Props> = ({ children: childrenProp, ...rest }: Props) => {
  const children = useMemo(() => services.transformMarkdownImages(childrenProp), [childrenProp]);
  const transformUri = useCallback(
    (uri: string) => (uri.startsWith('http') ? uri : `http://192.168.1.65:1337${uri}`),
    [],
  );
  return (
    <ReactMarkdown
      className="container d-flex flex-column"
      rehypePlugins={[rehypeRaw]}
      transformLinkUri={transformUri}
      transformImageUri={transformUri}
      skipHtml={false}
      components={{
        p: ({ node: _node, ...props }: Component<HTMLAttributes<HTMLParagraphElement>>) => (
          <P typography={typography.variants.Content.Regular16} className="mb-3" {...props} />
        ),
        h1: ({ node: _node, ...props }: Component<HTMLAttributes<HTMLHeadingElement>>) => (
          <H1 className="my-3" {...props} />
        ),
        h2: ({ node: _node, ...props }: Component<HTMLAttributes<HTMLHeadingElement>>) => (
          <H2 className="my-3" {...props} />
        ),
        h3: ({ node: _node, ...props }: Component<HTMLAttributes<HTMLHeadingElement>>) => (
          <H3 className="my-3" {...props} />
        ),
        h4: ({ node: _node, ...props }: Component<HTMLAttributes<HTMLHeadingElement>>) => (
          <H4 className="my-3" {...props} />
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
            css={media.query({
              objectFit: 'scale-down',
              maxWidth: '-webkit-fill-available',
              width: ['100%', '100%', 'auto'],
              marginLeft: 'auto',
              marginRight: 'auto',
            })}
            {...props}
          />
        ),
      }}
      {...rest}
    >
      {children}
    </ReactMarkdown>
  );
};
