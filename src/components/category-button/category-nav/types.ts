import { RefObject } from 'react';

import { ICategoryInfo } from 'components/category-button/types';

export interface ICategoryNav {
  delay: number;
  isOpen: boolean;
  categoryInfo: ICategoryInfo[];
  setOpen: (bol: boolean) => void;
  childRef: RefObject<HTMLDivElement> | null;
}

export interface ISunCategory {
  variant: number;
  isLeave: boolean;
  visible: boolean;
}

export interface IList {
  delay: number;
  isOpen: boolean;
}
