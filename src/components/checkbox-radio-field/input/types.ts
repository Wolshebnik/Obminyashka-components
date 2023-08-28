import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface CustomInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    HTMLInputElement | HTMLTextAreaElement
  > {}

export interface IInputLocation extends Omit<CustomInput, 'ref'> {
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
