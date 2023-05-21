import { RefObject } from 'react';

export interface IOverlay {
  top?: number;
  delay?: number;
  isOpen: boolean;
  setClose: () => void;
  isAnimation?: boolean;
  children?: React.ReactNode;
  childRef: RefObject<HTMLDivElement> | null;
}

export interface IOverlayStyles {
  top?: number;
  delay: number;
  isAnimation?: boolean;
}
