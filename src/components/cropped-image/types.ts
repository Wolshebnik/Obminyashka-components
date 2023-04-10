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
  errorSizeSelect: string;
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