import { RefObject } from 'react';

export interface IModal {
  isOpen: boolean;
  duration?: number;
  withoutBg?: boolean;
  hideButtonClose?: boolean;
  onClose: (open: boolean) => void;
  ref?: RefObject<HTMLDivElement> | null;
}

export interface IStyles {
  closing: boolean;
  duration: number;
}
