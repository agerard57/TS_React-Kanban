/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';

import { Inputs } from '../../core';
import { useModal } from '../hooks';

type Props = {
  closeButtonText?: string;
  close?: () => void;
};

export const Button: FC<Props> = ({ closeButtonText, close }) => {
  const { closeModal } = useModal();

  return (
    <>
      {closeButtonText && (
        <Inputs.Button
          type="small"
          onClick={close || closeModal}
          optionalStyling={css`
            padding-top: 0.5rem;
            background: transparent;
          `}
        >
          {closeButtonText}
        </Inputs.Button>
      )}
    </>
  );
};
