export interface IPhotoFiles {
  name: string;
  imageFiles: [];
  preViewImage: [];
  preposition: string;
  description: string;
  photosUploaded: string;
  firstUploadText: string;
  currentIndexImage: number;
  setImageFiles: () => void;
  setPreViewImage: () => void;
  setCurrentIndexImage: () => void;
}
