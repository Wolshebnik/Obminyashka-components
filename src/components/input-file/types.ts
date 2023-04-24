import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { InputChangeEventType, LabelDragEventType } from 'types';

interface CustomInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export interface IFileInput
  extends Omit<CustomInput, 'onChange' | 'value' | 'ref'> {
  name: string;
  error?: string;
  onChange: (
    e: InputChangeEventType | LabelDragEventType,
    files?: File[]
  ) => void;
}

export interface IStyles {
  error?: string;
}
