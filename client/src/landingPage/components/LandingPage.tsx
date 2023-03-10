/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { KanbanList } from '../../core';
import { useLandingPage } from '../hooks';
import { AddList } from './AddList';
import { UserList } from './UserList';

export const LandingPage: FC = () => {
  const { t } = useTranslation('LandingPage');
  const { lists } = useLandingPage();

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
