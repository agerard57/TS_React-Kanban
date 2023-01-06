/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Container, Row } from 'react-bootstrap';

import { useModal } from '../hooks';
import { modalStyles } from '../styles';
import { Button } from './Button';

export const Modal: FC = () => {
  const { isOpen, slideSpec } = useModal();

  return (
    <div id="modal" css={modalStyles(isOpen)} className={isOpen ? 'opened' : 'closed'}>
      <Container
        css={css`
          height: 50%;
          width: 50%;
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          font-family: 'Baloo2';
          text-align: center;
          background: #fffffff1;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 10px;
        `}
      >
        <div
          css={css`
            flex: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow-y: auto;
            border-radius: 10px;
            border: 1px solid #e0e0e0;
            padding: 1rem;
            text-align: center;
          `}
        >
          {slideSpec.content}
          <Button closeButtonText={slideSpec.closeButtonText} close={slideSpec.closeButtonAction} />
        </div>
      </Container>
    </div>
  );
};
