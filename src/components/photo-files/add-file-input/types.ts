type InputOnChangeEventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.DragEvent<HTMLLabelElement>;

export interface IFileInput {
  onChange: (e: InputOnChangeEventType, files?: File[]) => void;
}

export interface IStyles {
  error?: string;
}
