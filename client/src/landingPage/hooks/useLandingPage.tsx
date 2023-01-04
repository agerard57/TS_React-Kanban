import { useTranslation } from 'react-i18next';

import { usePageTitle } from '../../core';

export const useLandingPage = () => {
  const { t } = useTranslation('LandingPage');
  usePageTitle(t('title'));
};
