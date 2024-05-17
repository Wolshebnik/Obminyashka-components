import { ReactNode } from 'react';

export interface IPagination {
  text: string;
  total: number;
  current: number;
  pageSize: number;
  isLoading: boolean;
  children: ReactNode;
  showTitle?: boolean;
  nextIcon: ReactNode;
  prevIcon: ReactNode;
  showMore: () => void;
  showLessItems?: boolean;
  isShowButtons?: boolean;
  onChange: (page: number) => void;
}
