export interface IPhotoFiles {
  name: string;
  maxCount?: number;
  maxSizeMB?: number;
  errorSize: string;
  errorTitle: string;
  preposition: string;
  description: string;
  errorAddFile: string;
  photosUploaded: string;
  errorExtension: string;
  errorRightSize: string;
  firstUploadText: string;
  errorNoSaveMore: string;
  setImages: (images: File[]) => void;
}
