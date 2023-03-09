import { ReactElement } from 'react';

export interface IPopup {
  element?: keyof JSX.IntrinsicElements;
  children: ReactElement;
  id: string;
  onClose?: (e: React.MouseEvent) => void;
}
