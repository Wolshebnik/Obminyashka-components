import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

type TypeOfInput = 'radio' | 'checkbox';

export interface CustomInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement> {
}

export interface IInput
  extends Omit<CustomInput, 'ref'> {
  margin: number,
  gap?: number,
  fontSize: number,
  text: string,
  type: TypeOfInput;
}

export interface DivArg {
  margin: number;
  checked: boolean;
  type: TypeOfInput;
}

export interface LabelArg {
  gap?: number;
  checked: boolean;
  fontSize: number;
  type: TypeOfInput;
}

export interface InputArg {
  gap?: number;
  checked: boolean;
  type: TypeOfInput;
}
