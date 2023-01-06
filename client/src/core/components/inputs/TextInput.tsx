/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';

type Props = {
  placeholder: string;
  inputType?: string;
};

export const TextInput: FC<Props> = ({ placeholder, inputType }) => (
  <input
    css={css`
      width: 100%;
      padding: 0.5vw 0 0.5vw 1vw;
      border-radius: 10px;
      border: 1px solid #0000001c;
      font-size: 1rem;
      font-weight: bold;
      margin: 0.5rem 0;
      &:focus {
        outline: none;
      }
    `}
    type={inputType ?? 'text'}
    placeholder={placeholder}
  />
);
