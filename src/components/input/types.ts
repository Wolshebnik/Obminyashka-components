import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';

export interface ShowPasswordType {
  component: React.ReactNode;
  currentType: 'password' | 'text';
}

interface CustomInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

type InputOnChangeEventType = ChangeEvent<HTMLInputElement> | string;

export interface InputProps extends Omit<CustomInput, 'ref'> {
  name: string;
  error?: string;
  label?: string;
  inputGap?: string;
  setValue: Function /*        -----     */;
  labelColor?: string;
  labelFontSize?: string;
  inputMaxWidth?: string;
  labelFontWeight?: number;
  inputFlexDirection?: string;
  inputJustifyContent?: string;
  wrapperInputErrorWidth?: string;
  onChange?: (e: InputOnChangeEventType) => void;
}
