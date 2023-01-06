import { i18n as CardDetailsModal } from '../cardDetailsModal';
import { i18n as Core } from '../core';
import { i18n as LandingPage } from '../landingPage';

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
  CardDetailsModal,
  LandingPage
});

export const resources = {
  fr: { ...moduleResources.fr },
  en: { ...moduleResources.en }
};
