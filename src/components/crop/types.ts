export interface ICrop {
  image?: string;
  onSave: Function;
  onClose: Function;
  onDelete: Function;
  disabled?: boolean;
  cropTitle?: string;
  saveBtnText?: string;
  closeBtnText?: string;
  deleteBtnText?: string;
  rotateBtnText?: string;
  isSaveLoading?: boolean;
  isDeleteLoading?: boolean;
}
