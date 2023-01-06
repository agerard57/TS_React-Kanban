import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getAllLists, List, usePageTitle } from '../../core';

export const useLandingPage = () => {
  const { t } = useTranslation('LandingPage');
  const [lists, setLists] = useState<List[] | []>([]);

  usePageTitle(t('title'));
  useEffect(() => {
    getAllLists().then((res) => {
      setLists(res);
    });
  }, []);

  return { lists };
};
