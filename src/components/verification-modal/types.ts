import { ReactElement } from 'react';

export interface IVerificationModal {
  title: string;
  label: string;
  btnText: string;
  isOpen: boolean;
  isLoading: boolean;
  isAnimation: boolean;
  onClick: () => void;
  setOpen: (bool: boolean) => void;
}

export interface IModalProps {
  active: boolean;
  children: ReactElement;
  setActive: (bool: boolean) => void;
}
