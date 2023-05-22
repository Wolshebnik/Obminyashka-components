import { RefObject } from 'react';

export interface IOverlay {
  top?: number;
  isOpen: boolean;
  duration?: number;
  isHeader?: boolean;
  setClose: () => void;
  isAnimation: boolean;
  children?: React.ReactNode;
  childRef: RefObject<HTMLDivElement> | null;
}

export interface IOverlayStyles {
  top?: number;
  duration: number;
  isHeader?: boolean;
  isAnimation?: boolean;
}
