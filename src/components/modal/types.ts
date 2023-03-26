export interface IModal {
  isOpen: boolean;
  duration?: number;
  hideButtonClose?: boolean;
  onClose: (open: boolean) => void;
}

export interface IStyles {
  closing: boolean;
  duration: number;
}
