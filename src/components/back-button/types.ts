import { ReactNode } from 'react';

export interface IBackButton {
  text?: string;
  icon?: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}
