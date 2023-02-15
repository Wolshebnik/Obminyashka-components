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
  labelColor?: string;
  labelFontSize?: string;
  inputMaxWidth?: string;
  labelFontWeight?: number;
  inputFlexDirection?: string;
  inputJustifyContent?: string;
  wrapperInputErrorWidth?: string;
  onChange?: (e: InputOnChangeEventType) => void;
}

export interface ILabel {
  inputGap?: string;
  isTypeSearch: boolean;
  inputMaxWidth?: string;
  inputFlexDirection?: string;
  inputJustifyContent?: string;
}

export interface ILabelSpan extends Pick<ILabel, 'inputFlexDirection'> {
  labelColor?: string;
  labelFontSize?: string;
  labelFontWeight?: number;
}

export interface IWrapperInputError extends Pick<ILabel, 'isTypeSearch'> {
  wrapperInputErrorWidth?: string;
}

export interface IInput extends Pick<ILabel, 'isTypeSearch'> {
  error?: string;
  autoComplete?: string;
  notPasswordType: boolean;
}
