/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';

import { Inputs } from '../../core';

type Props = {
  closeButtonText?: string;
  close?: () => void;
};

export const Button: FC<Props> = ({ closeButtonText, close }) => (
  <>
    {closeButtonText && (
      <Inputs.Button
        type="small"
        onClick={close}
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
