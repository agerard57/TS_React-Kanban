/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';

type Props = {
  firstName: string;
  color: string;
  size: number;
};

export const ColorVignette: FC<Props> = ({ firstName, color, size }) => (
  <div
    css={css`
      width: ${size}px;
      height: ${size}px;
      background-color: ${color};
      border-radius: 50%;
    `}
  >
    <span
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: ${size / 2}px;
        font-weight: 600;
        color: #ffffff;
      `}
    >
      {firstName[0]}
    </span>
  </div>
);
