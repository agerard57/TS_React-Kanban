/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';

import { List } from '../../core';
import { ColorVignette } from '../../core/components/ColorVignette';

type Props = {
  lists: List[];
};

export const UserList: FC<Props> = ({ lists }) => (
  <div
    css={css`
      display: flex;
      text-align: center;
      align-items: center;
      display: flex;
      padding: 1vw;
      width: 80%;
      border-radius: 15px;
      margin: 0 auto;
      justify-content: center;
      background-color: #ffffff94;

      & > * {
        margin-right: 10px;
      }
    `}
  >
    {lists
      .flatMap((list) => list.cards)
      .map((card) => card.author)
      .filter((author, index, self) => index === self.findIndex((d) => d.id === author.id))
      .map((author) => (
        <ColorVignette
          color={author.color}
          key={author.id}
          size={40}
          first_name={`${author.name.first_name} ${author.name.lastName}`}
        />
      ))}
  </div>
);
