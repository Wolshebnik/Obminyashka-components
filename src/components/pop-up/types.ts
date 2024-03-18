import { ReactElement } from 'react';

export interface IPopUpProps {
  href: string;
  title: string;
  textButton: string;
  modalActive: boolean;
  setModalActive: (bool: boolean) => void;
}

export interface IModalProps {
  active: boolean;
  children: ReactElement;
  setActive: (bool: boolean) => void;
}
