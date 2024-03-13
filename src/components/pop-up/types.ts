import { ReactElement } from 'react';

export interface IPopUpProps {
  href: string;
  title: string;
  textButton: string;
}

export interface IModalProps {
  active: boolean;
  children: ReactElement;
  setActive: (bool: boolean) => void;
}
