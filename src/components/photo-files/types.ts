export interface IPhotoFiles {
  name: string;
  maxSizeMB: number;
  preposition: string;
  description: string;
  photosUploaded: string;
  firstUploadText: string;
}

export interface ChangeStateForImagesWhenDrop<T> {
  index: number;
  processedArray: T[];
  currentIndex: number | null;
  setProcessedArray: (arr: T[]) => void;
}
