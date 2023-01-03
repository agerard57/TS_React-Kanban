import { i18n as Core } from '../core';
import { i18n as LoadingScreen } from '../loadingScreen';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Modules = Record<string, { fr: any; en: any }>;

const normalize = (modules: Modules, formatNamespace: (name: string) => string = (name) => name) =>
  Object.entries(modules).reduce(
    ({ fr, en }, [namespace, translations]) => ({
      fr: { ...fr, [formatNamespace(namespace)]: translations.fr },
      en: { ...en, [formatNamespace(namespace)]: translations.en }
    }),
    { fr: {}, en: {} }
  );

const moduleResources = normalize({
  Core,
  LoadingScreen
});

export const resources = {
  fr: { ...moduleResources.fr },
  en: { ...moduleResources.en }
};
