import { ReactNode } from 'react';

export interface IPagination {
  children: ReactNode;
  showLessItems?: boolean;
  total: number;
  showTitle?: boolean;
  current: number;
  pageSize: number;
  onChange: (page: number) => void;
  nextIcon: ReactNode;
  prevIcon: ReactNode;
}
