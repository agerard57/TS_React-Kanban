/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { KanbanList, List } from '../../core';
import { PasswordlessUser } from '../../core/types';
import { useLandingPage } from '../hooks';
import { AddList } from './AddList';
import { UserList } from './UserList';

export const LandingPage: FC = () => {
  const { t } = useTranslation('LandingPage');

  useLandingPage();

  const author1: PasswordlessUser = {
    id: 1,
    name: {
      firstName: 'Alexandre',
      lastName: 'GERARD'
    },
    email: 'mns@agerard.dev',
    color: '#000000'
  };

  const author2: PasswordlessUser = {
    id: 2,
    name: {
      firstName: 'Nicolas',
      lastName: 'POIRE'
    },
    email: 'mns@npoire.dev',
    color: '#9B5252'
  };

  const lists: List[] = [
    {
      id: 1,
      title: 'BoardTitle 1',
      author: author1,
      cards: [
        {
          id: 1,
          title: 'CardTitle 1',
          description: 'CardDescription 1',
          author: author2,
          listId: 1
        },
        {
          id: 2,
          title: 'CardTitle 2',
          description: 'CardDescription 2',
          author: author1,
          listId: 1
        }
      ]
    },
    {
      id: 2,
      title: 'BoardTitle 2',
      author: author1,
      cards: [
        {
          id: 3,
          title: 'CardTitle 3',
          description: 'CardDescription 3',
          author: author2,
          listId: 2
        },
        {
          id: 4,
          title: 'CardTitle 4',
          description: 'CardDescription 4',
          author: author1,
          listId: 1
        }
      ]
    },
    {
      id: 3,
      title: 'BoardTitle 3',
      author: author1,
      cards: [
        {
          id: 5,
          title: 'CardTitle 5',
          description: 'CardDescription 5',
          author: author2,
          listId: 3
        },
        {
          id: 6,
          title: 'CardTitle 6',
          description: 'CardDescription 6',
          author: author2,
          listId: 3
        }
      ]
    }
  ];

  return (
    <>
      <h1
        css={css`
          padding: 10px;
          margin: 0;
        `}
      >
        {t('title')}
      </h1>
      <UserList lists={lists} />
      <div
        css={css`
          display: flex;
        `}
        className="container-fluid py-2"
      >
        <div className="d-flex flex-row flex-nowrap">
          {lists.map((list) => (
            <KanbanList list={list} key={list.id} />
          ))}
          <AddList />
        </div>
      </div>
    </>
  );
};
