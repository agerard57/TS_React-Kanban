import { SlideSpec } from './SlideSpec';

export type UseModalManager = {
  isOpen: boolean;
  slideSpec: SlideSpec;
  openModal: (slideSpecs: SlideSpec) => void;
  closeModal: () => void;
};
