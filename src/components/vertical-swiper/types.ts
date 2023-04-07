import { ReactNode } from 'react';

export interface IVerticalSwiper {
  src: string;
  alt?: string;
  small: boolean;
  selected: boolean;
  children: ReactNode;
  onClick: () => void;
}
