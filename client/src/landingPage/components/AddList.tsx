/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { TextInput } from '../../core';

export const AddList: FC = () => {
  const { t } = useTranslation('LandingPage');
  return (
    <div
      css={css`
        padding: 1.2vw;
        background-color: #ffffff94;
        border-radius: 10px;
        margin: 1vw;
        min-width: 20%;
        box-shadow: 0 0 5px 0px #0000001c;
      `}
      className="card card-body"
    >
      <h2
        css={css`
          text-align: start;
          font-size: 1.3rem;
          font-weight: bold;
          text-align: center;
        `}
      >
        {t('newList.title')}
      </h2>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1vw 0;
        `}
      >
        <TextInput placeholder={t('newList.placeholder')} />
      </div>
    </div>
  );
};
