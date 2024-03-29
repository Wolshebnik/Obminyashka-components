import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

type TypeOfInput = 'radio' | 'checkbox';

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
}

export interface InputArg {
  checked: boolean;
  type: TypeOfInput;
}

export interface LabelArg extends InputArg {
  gap?: number;
  fontSize?: number;
}

export interface ICheckbox {
  type: string;
  checked: boolean;
}
