/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';

import { List } from '../../interfaces';
import { KanbanCard } from './KanbanCard';

type ListProps = {
  list: List;
};

export const KanbanList: FC<ListProps> = ({ list }) => (
  <div
    css={css`
      padding: 1.2vw;
      background-color: #ffffff94;
      border-radius: 10px;
      margin: 1vw;
      min-width: 20%;
      box-shadow: 0 0 5px 0px #0000001c;
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
    className="card card-body"
  >
    <h2
      css={css`
        text-align: start;
        font-size: 1.3rem;
        font-weight: bold;
      `}
    >
      {list.title}
    </h2>
    {list.cards.map((card) => (
      <KanbanCard card={card} key={card.id} />
    ))}
  </div>
);
