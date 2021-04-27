import styled from '@emotion/styled';
import classNames from 'classnames';
import { H1, H2, Icon, P } from 'components';
import { colors, icons, typography } from 'core';
import React, { FC, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

import { Input } from '../Input';
import { Props } from './props';

const DropzoneBase: FC<Props> = ({ file, setFile, className, ...rest }: Props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept:
      '.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf',
  });

  useEffect(() => {
    if (file !== acceptedFiles[0]) {
      setFile(acceptedFiles[0]);
    }
  }, [acceptedFiles, file, setFile]);

  return (
    <div
      {...getRootProps({
        ...rest,
        className: classNames(
          className,
          'dropzone',
          'p-5 d-flex flex-column align-items-center text-center',
        ),
      })}
    >
      <Input {...getInputProps()} />
      <Icon icon={icons.actions.cloudUpload} />
      <H1 className="mb-3">Перетащите файл сюда</H1>
      <H2 className="mb-3">или</H2>
      <P typography={typography.variants.Element.SemiBold20}>нажмите чтобы выбрать файл</P>
    </div>
  );
};

export const Dropzone = styled(DropzoneBase)<Props>`
  border-width: 2px;
  border-radius: 5px;
  border-style: dashed;
  border-color: ${colors.variants.Neutral.Grey};
  max-width: 610px;
  ${typography.styles.extendByVariant}

  :focus {
    outline: none;
    border-width: 3px;
    border-color: ${(props) => props.focusColor || props.color || colors.variants.Brand.Purple};
  }
`;
