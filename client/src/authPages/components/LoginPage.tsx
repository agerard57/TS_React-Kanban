/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { Inputs, usePageTitle } from '../../core';
import { Button } from '../../core/components';

export const LoginPage = () => {
  const { t } = useTranslation('AuthPages');

  usePageTitle(t('login.title'));

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
        {t('login.title')}
      </h1>
      <Inputs.Text placeholder={t('placeholder.email')} />
      <Inputs.Text placeholder={t('placeholder.password')} inputType="password" />
      <Button type="primary" buttonType="submit">
        {t('login.submit')}
      </Button>
    </Container>
  );
};
