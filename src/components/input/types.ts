import React, {
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

export interface InputProps extends Omit<CustomInput, 'ref'> {
  name: string;
  error?:string;
  label?: string;
  phone?:boolean;
  mbInput?:string;
  iconTopPosition?:string;
  styleType: 'authorization' | 'profile' | 'addAdvert',
}
