/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Row, Col } from 'react-bootstrap';

import { useModal } from '../../../modal';
import { useCustomToast } from '../../hooks';
import { Card } from '../../types';
import { ColorVignette } from '../ColorVignette';

type CardProps = {
  card: Card;
};

export const KanbanCard: FC<CardProps> = ({ card }) => {
  const { toast } = useCustomToast();
  const { openModal } = useModal();
  const handleClick = () => toast.custom(<h1>Deez</h1>);
  co;
  return (
    <Row
      css={css`
        padding: 1vw 0;
        background-color: #ffffff94;
        border-radius: 10px;
        margin: 0.5vw 0;
        width: 100%;
        box-shadow: 0 0 5px 0px #0000001c;
        display: flex;
        justify-content: center;
        min-width: 20vw;
        max-width: 23vw;
      `}
      onClick={openModal()}
    >
      <Row>
        <h3
          css={css`
            font-size: 1.3rem;
            font-weight: medium;
            text-align: start;
          `}
        >
          {card.title}
        </h3>
      </Row>
      <Row
        css={css`
          display: flex;
          align-items: flex-end;
        `}
      >
        <Col
          css={css`
            display: flex;
          `}
        >
          <span
            css={css`
              text-align: start;
              color: #00000094;
            `}
          >{`#${card.id}`}</span>
        </Col>
        <Col
          css={css`
            display: contents;
          `}
        >
          <ColorVignette
            color={card.author.color}
            size={30}
            firstName={card.author.name.firstName}
          />
        </Col>
      </Row>
    </Row>
  );
};
