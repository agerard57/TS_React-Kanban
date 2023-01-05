/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { SlideSpec } from '../../modal';
import { useCardDetailsModalBuilder } from '../hooks';

export const CardDetailsModalBuilder = (): SlideSpec => {
  const { t } = useTranslation('CardDetailsModal');

  useCardDetailsModalBuilder();

  const screen: SlideSpec = {
    content: <FirstMessage />,
    closeButtonText: t('page.0.nextButtonText').toString()
  };

  return screen;
};
