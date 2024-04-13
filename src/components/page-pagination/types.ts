import { ReactNode } from 'react';

export interface IPagination {
  text: string;
  total: number;
  current: number;
  pageSize: number;
  children: ReactNode;
  showTitle?: boolean;
  nextIcon: ReactNode;
  prevIcon: ReactNode;
  showLessItems?: boolean;
  handleShowMore: () => void;
  onChange: (page: number) => void;
}
