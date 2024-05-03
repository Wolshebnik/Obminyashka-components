import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export type ColorType = 'blue' | 'green' | 'white';
export type StyleType = 'default' | 'outline';

interface ICustomButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export interface IButtonNew extends Omit<ICustomButton, 'ref'> {
  text?: string;
  width?: string;
  height?: string;
  plus?: boolean;
  icon?: ReactNode;
  square?: boolean;
  animated?: boolean;
  colorType: ColorType;
  styleType: StyleType;
}

export interface IStyledButtonNew {
  width?: string;
  height?: string;
  square?: boolean;
  animated?: boolean;
  colorType: ColorType;
  styleType: StyleType;
}
