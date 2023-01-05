import { SlideSpec } from './SlideSpec';

export type UseModalManager = {
  modalName: string;
  isOpen: boolean;
  slideSpec: SlideSpec;
  openModal: (slideSpecs: SlideSpec, modalName: string) => void;
  closeModal: () => void;
};
