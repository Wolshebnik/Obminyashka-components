import { DivDragEventType } from 'types';

export interface IImagePhoto {
  url: string;
  alt: string;
  index: number;
  onDrop?: (event: DivDragEventType) => void;
  onDragEnd?: (event: DivDragEventType) => void;
  onDragOver?: (event: DivDragEventType) => void;
  onDragStart?: (event: DivDragEventType) => void;
  onDragLeave?: (event: DivDragEventType) => void;
  removeImage: (event: React.MouseEvent<HTMLSpanElement>, idx: number) => void;
}

export interface IStyles {
  isRemove?: boolean;
}
