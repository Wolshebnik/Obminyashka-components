export interface IImagePhoto {
  url: string | undefined;
  index: number;
  onDrop?: () => void;
  onDragEnd?: () => void;
  onDragOver?: () => void;
  removeImage: (event: React.MouseEvent, idx: number) => void;
  onDragStart?: () => void;
  onDragLeave?: () => void;
}

export interface IStyles {
  isRemove?: boolean;
}
