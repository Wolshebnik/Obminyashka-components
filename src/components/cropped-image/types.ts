export interface ICroppedImage {
  onSave: Function;
  errorSize: string;
  onDelete: Function;
  errorFormat: string;
  errorTitle: string;
  cropTitle?: string;
  avatarImage?: string;
  saveBtnText?: string;
  closeBtnText?: string;
  deleteBtnText?: string;
  rotateBtnText?: string;
  isSaveLoading?: boolean;
  errorSizeSelect: string;
  isDeleteLoading?: boolean;
}
export interface IOptions {
  maxSizeMB: number;
  maxWidthOrHeight: number;
  useWebWorker: boolean;
  maxIteration: number;
}
export interface IConvertToMB {
  value?: number;
  valueString: string;
}
export interface IOnDelete {
  handleClear: Function;
  setOpenCrop: Function;
}

export interface IOnSave {
  file: File;
  setOpenCrop: (state: boolean) => void;
  handleSetImage: (image: string) => void;
}
