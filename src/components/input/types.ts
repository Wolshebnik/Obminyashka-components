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
    InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    HTMLInputElement | HTMLTextAreaElement
  > {}

type InputOnChangeEventType =
  | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | string;

export interface InputProps extends Omit<CustomInput, 'ref'> {
  name: string;
  error?: string;
  label?: string;
  inputGap?: string;
  errorGap?: string;
  labelColor?: string;
  inputHeight?: string;
  onClick?: () => void;
  labelFontSize?: string;
  errorFontSize?: string;
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
  errorGap?: string;
  wrapperInputErrorWidth?: string;
}

export interface IInput extends Pick<ILabel, 'isTypeSearch'> {
  error?: string;
  inputHeight?: string;
  notPasswordType: boolean;
}

export interface ISpanError
  extends Pick<InputProps, 'error' | 'errorFontSize'> {}

export interface ITextAreaArg {
  error?: string;
  value: string | number | readonly string[] | undefined;
}
