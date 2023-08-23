import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

type TypeOfInput = 'radio' | 'checkbox' | 'input';

export interface CustomInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export interface IInput extends Omit<CustomInput, 'ref'> {
  name: string;
  gap?: number;
  text?: string;
  fontSize?: number;
  type?: TypeOfInput;
  hiddenCheckbox?: boolean;
}

export interface InputArg {
  checked: boolean;
  type: TypeOfInput;
  hiddenCheckbox?: boolean;
}

export interface LabelArg extends InputArg {
  gap?: number;
  fontSize?: number;
  hiddenCheckbox?: boolean;
}

export interface ICheckbox {
  type: string;
  checked: boolean;
  hiddenCheckbox?: boolean;
}
