/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Row, Col } from 'react-bootstrap';

import { Card } from '../../core';
import { ColorVignette } from '../../core/components/ColorVignette';

type Props = {
  card: Card;
};

export const CardDetailsModal: FC<Props> = ({ card }) => (
  <div
    css={css`
      display: flex;
      align-items: center;
      justify-content: start;
      height: 100%;
      width: 100%;
    `}
  >
    <Col
      xs={10}
      css={css`
        padding: 0 5rem;
      `}
    >
      <Row
        css={css`
          border-bottom: 1px solid #0000001c;
        `}
      >
        <h2>{card.title}</h2>
      </Row>
      <Row
        css={css`
          padding: 1.3rem 0;
        `}
      >
        <span>{card.description}</span>
      </Row>
    </Col>
    <Col
      xs={2}
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        border-left: 1px solid #0000001c;
        padding: 0 1rem;
      `}
    >
      <ColorVignette color={card.author.color} size={40} firstName={card.author.name.firstName} />
      <span>{Object.values(card.author.name).reverse().join(' ')}</span>
    </Col>
  </div>
);
