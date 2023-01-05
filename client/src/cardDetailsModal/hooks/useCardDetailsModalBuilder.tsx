import { useTranslation } from 'react-i18next';

import { usePageTitle } from '../../core';

export const useCardDetailsModalBuilder = () => {
  const { t } = useTranslation('CardDetailsModal');
  usePageTitle(t('title'));
};
