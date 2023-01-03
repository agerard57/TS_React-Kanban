/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col, Nav, Row } from 'react-bootstrap';
import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

import { usePageTitle } from '../../core';

export const ErrorScreen = ({ error }: FallbackProps) => {
  const { t } = useTranslation('ErrorScreen');

  usePageTitle(t('title'));

  return (
    <Col
      role="alert"
      css={css`
        margin: 0;
        position: fixed;
        left: 0;
        right: 0;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);

        > * {
          padding: 4% 0;
      `}
    >
      <Row>
        <h1
          css={css`
            text-transform: uppercase;
          `}
        >
          {t('page.title')}
        </h1>
      </Row>
      <Row>
        <span
          css={css`
            white-space: pre-wrap;
            font-weight: 500;
          `}
        >
          {t('page.description')}
        </span>
        <pre
          css={css`
            width: 70%;
            margin: 0 auto;
          `}
        >
          {error.message}
        </pre>
      </Row>
      <Row
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <Nav.Link
          href="/"
          css={css`
            color: #3d3d3d;
          `}
        >
          {t('page.link')}
        </Nav.Link>
      </Row>
    </Col>
  );
};
