export interface IModal {
  isOpen: boolean;
  duration: number;
  withoutBg?: boolean;
  onClose: () => void;
  isAnimation: boolean;
  hideButtonClose?: boolean;
}

export interface IStyles {
  closing: boolean;
  duration: number;
}
