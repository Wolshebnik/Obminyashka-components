import { ReactElement } from 'react';

export interface IPopUpProps {
  title: string;
  label: string;
  btnText: string;
  isLoading: boolean;
  onClick: () => void;
  modalActive: boolean;
  setModalActive: (bool: boolean) => void;
}

export interface IModalProps {
  active: boolean;
  children: ReactElement;
  setActive: (bool: boolean) => void;
}
