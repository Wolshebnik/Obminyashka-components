export type InputOnChangeEventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.DragEvent<HTMLLabelElement>;

export interface IFileInput {
  type: string;
  name: string;
  error?: string;
  onChange: (e: InputOnChangeEventType, files?: File[]) => void;
}

export interface IStyles {
  error?: string;
}
