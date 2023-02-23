import { ReactNode } from 'react';

export interface IPagination {
  total: number;
  current: number;
  pageSize: number;
  children: ReactNode;
  showTitle?: boolean;
  nextIcon: ReactNode;
  prevIcon: ReactNode;
  showLessItems?: boolean;
  onChange: (page: number) => void;
}
