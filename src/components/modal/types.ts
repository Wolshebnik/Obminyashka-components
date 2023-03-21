export interface IPopup {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export interface IStyles {
  closing: boolean;
  duration: number;
}
