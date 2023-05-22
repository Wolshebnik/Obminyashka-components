import { RefObject } from 'react';

export interface IOverlay {
  top?: number;
  delay?: number;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  setClosingAnimation?: () => void;
  closer?: (arg1: () => void) => void;
  myRef: RefObject<HTMLDivElement> | null;
  childRef: RefObject<HTMLDivElement> | null;
}

export interface IOverlayStyles {
  top?: number;
  delay: number;
  isAnimation: boolean;
}
