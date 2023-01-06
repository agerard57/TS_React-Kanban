/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { Card } from '../../core';
import { SlideSpec } from '../../modal';
import { useCardDetailsModalBuilder } from '../hooks';
import { CardDetailsModal } from './CardDetailsModal';

type CardDetailsModalBuilderManager = (card: Card) => {
  screen: SlideSpec;
};

export const CardDetailsModalBuilder: CardDetailsModalBuilderManager = (card) => {
  const { t } = useTranslation('CardDetailsModal');

  useCardDetailsModalBuilder();

  const screen: SlideSpec = {
    content: <CardDetailsModal card={card} />,
    closeButtonText: t('closeButton').toString()
  };

  return { screen };
};
