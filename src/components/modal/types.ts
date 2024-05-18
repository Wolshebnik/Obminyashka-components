export interface IModal {
  isOpen: boolean;
  duration: number;
  maxWidth?: string;
  withoutBg?: boolean;
  onClose: () => void;
  isAnimation: boolean;
  hideButtonClose?: boolean;
}

export interface IModalWindow {
  duration: number;
  maxWidth?: string;
  isCloseAnimation?: boolean;
}
