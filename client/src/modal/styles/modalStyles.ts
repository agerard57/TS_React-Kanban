/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// eslint-disable-next-line no-return-assign
document.addEventListener('DOMContentLoaded', () => (document.body.className = ''));
export const modalStyles = (isOpen: boolean) => {
  // That's because on each render, the modal slides down
  let display = false;
  setTimeout(() => {
    display = true;
  }, 400);

  const isDisplayed = display ? '' : 'display: none;';

  const animation = isOpen
    ? css`
        animation: fade-in 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `
    : css`
        ${isDisplayed}
        animation: fade-in 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        @keyframes fade-out {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `;

  return css`
    background: transparent;
    backdrop-filter: blur(6px);
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: 'block';
    box-shadow: 10px 0 10px 0 rgba(0, 0, 0, 0.5);
    ${animation}
  `;
};
