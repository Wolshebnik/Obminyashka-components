import { TextareaHTMLAttributes, DetailedHTMLProps } from 'react';

export interface CustomTextArea
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export interface IDescription extends Omit<CustomTextArea, 'ref'> {
  value: string;
  error?: string;
  translatedTitle?: string;
  translatedDescription?: string;
  setDescription: (value: string) => void;
}

export interface TextAreaArg {
  value: string;
  error?: string;
}
