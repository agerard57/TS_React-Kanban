/* eslint-disable complexity */

/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import { FC } from 'react';

type Props = {
  type: 'primary' | 'small';
  buttonType?: 'submit' | 'button';
  onClick?: () => void;
  optionalStyling?: SerializedStyles;
  disabled?: boolean;
};

export const Button: FC<Props> = ({
  children,
  type,
  buttonType = 'button',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
  optionalStyling,
  disabled
}) =>
  type === 'primary' ? (
    <button
      type={buttonType}
      css={css`
        background: ${disabled ? '8d8d8d' : '#408cff'};
        border: 2px solid ${disabled ? '8d8d8d' : '#408cff'};
        border-radius: 18px;
        height: 50px;
        padding: 2px;
        background-clip: content-box;
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
        ${optionalStyling};
      `}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        css={css`
          font-family: 'Baloo2';
          font-weight: 500;
          font-size: 1.2rem;
          color: ${disabled ? '8d8d8d' : 'white'};
        `}
      >
        {children}
      </span>
    </button>
  ) : (
    <button
      type={buttonType}
      css={css`
        background-color: white;
        color: #3d3d3d;
        font-weight: 600;
        border-radius: 10px;
        border: none;
        text-decoration: underline;
        ${optionalStyling};
        &:hover {
          color: black;
        }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
