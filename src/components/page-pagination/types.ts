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
  showMore: () => void;
  showLessItems?: boolean;
  onChange: (page: number) => void;
}
