/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';

type Props = {
  first_name: string;
  color: string;
  size: number;
};

export const ColorVignette: FC<Props> = ({ first_name, color, size }) => (
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
      {first_name[0]}
    </span>
  </div>
);
