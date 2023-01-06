/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SetStateAction, useState } from 'react';
import { Container } from 'react-bootstrap';
import { CirclePicker } from 'react-color';
import { useTranslation } from 'react-i18next';

import { Inputs, usePageTitle } from '../../core';
import { Button } from '../../core/components';

export const RegisterPage = () => {
  const { t } = useTranslation('AuthPages');
  const [color, setColor] = useState('#fff');

  usePageTitle(t('register.title'));

  return (
    <Container
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30%;
        min-width: 300px;
        padding: 2rem;
        border-radius: 10px;
        background-color: #ffffff99;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(0.5rem);
      `}
    >
      <h1
        css={css`
          font-size: 1.5rem;
          padding-bottom: 1rem;
        `}
      >
        {t('register.title')}
      </h1>
      <Inputs.Text placeholder={t('placeholder.email')} />
      <Inputs.Text placeholder={t('placeholder.lastName')} />
      <Inputs.Text placeholder={t('placeholder.firstName')} />
      <Inputs.Text placeholder={t('placeholder.password')} inputType="password" />
      <p
        css={css`
          font-size: 1rem;
        `}
      >
        {t('register.colorTitle')}
      </p>
      <div
        css={css`
          margin: auto;
          width: max-content;
          margin-bottom: 1rem;
          padding: 0.5rem;
          border-radius: 10px;
          background-color: ${color}99;
        `}
      >
        <CirclePicker
          css={css`
            margin: auto;
          `}
          color={color}
          onChangeComplete={(colorValue: { hex: SetStateAction<string> }) =>
            setColor(colorValue.hex)
          }
        />
      </div>
      <Button type="primary" buttonType="submit">
        {t('register.submit')}
      </Button>
    </Container>
  );
};
