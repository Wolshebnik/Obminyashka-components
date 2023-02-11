import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface ShowPasswordType {
  component: React.ReactNode;
  currentType: 'password' | 'text';
}

interface CustomInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export interface InputProps extends Omit<CustomInput, 'ref'> {
  wrapperInputErrorWidth?: string;
  name: string;
  error?: string;
  label?: string;
  inputGap?: string;
  labelColor?: string;
  labelFontSize?: string;
  inputMaxWidth?: string;
  labelFontWeight?: number;
  inputFlexDirection?: string;
  inputJustifyContent?: string;
}
