import { TFunction } from 'i18next';
import { useState } from 'react';

import { useCustomToast } from '../../core';
import { i18n } from '../../i18n';
import { isLanguageCode } from '../helpers';
import { LanguageCode } from '../types';

type UseLanguageManager = () => {
  language: LanguageCode;
  change: (lang: LanguageCode) => Promise<TFunction>;
};

export const useLanguage: UseLanguageManager = () => {
  const { toast } = useCustomToast();

  if (!isLanguageCode(i18n.language)) throw new Error(`Unknown language code: ${i18n.language}`);

  const [language, setLang] = useState<LanguageCode>(i18n.language);
  const change = (lang: LanguageCode) => {
    const languageManager = {
      fr: 'Français',
      en: 'English'
    };

    toast.setLimit(1);
    toast.success(languageManager[lang], { icon: '🌐', duration: 1000 });

    return i18n.changeLanguage(lang);
  };

  i18n.on('languageChanged', (newLanguage: string) => {
    if (!isLanguageCode(newLanguage)) throw new Error(`Unknown language code: ${newLanguage}`);
    setLang(newLanguage);
  });

  return { language, change };
};
