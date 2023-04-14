export interface IModal {
  isOpen: boolean;
  duration?: number;
  withoutBg?: boolean;
  hideButtonClose?: boolean;
  onClose: (open: boolean) => void;
}

export interface IStyles {
  closing: boolean;
  duration: number;
}
