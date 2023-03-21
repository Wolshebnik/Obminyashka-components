export interface IPopup {
  isOpen: boolean;
  hideButtonClose?: boolean;
  onClose: (open: boolean) => void;
}

export interface IStyles {
  closing: boolean;
  duration: number;
}
