import { services } from 'core';
import React, { FC, useCallback, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface Props {
  children: string;
  className?: string;
}

export const MskMarkdown: FC<Props> = ({ children: childrenProp, className }) => {
  const content = useMemo(
    () => services.transformMarkdownImages(childrenProp ?? ''),
    [childrenProp],
  );
  const transformUri = useCallback(
    (uri: string) => (uri.startsWith('http') ? uri : `${process.env.BASE_URL}${uri}`),
    [],
  );
  return (
    <div className={`prose ${className ?? ''}`.trim()}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} urlTransform={transformUri}>
        {content}
      </ReactMarkdown>
    </div>
  );
};
