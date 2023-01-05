import { useState } from 'react';

import { EmptyModal } from '../components';
import { SlideSpec, UseModalManager } from '../types';

export const useModalManager = (): UseModalManager => {
  const emptySlideSpec: SlideSpec = { content: <EmptyModal /> };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalName, setModalName] = useState<string>('');
  const [slideSpec, setSlideSpec] = useState<SlideSpec>(emptySlideSpec);

  const openModal = (data: SlideSpec, name: string) => {
    setModalName(name);
    setSlideSpec(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSlideSpec(emptySlideSpec);
  };

  return {
    modalName,
    isOpen,
    slideSpec,
    openModal,
    closeModal
  };
};
