import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ColorType = 'blue' | 'green';
export type StyleType = 'default' | 'outline';

interface ICustomButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export interface IButtonNew extends Omit<ICustomButton, 'ref'> {
  text: string;
  plus?: boolean;
  animated?: boolean;
  colorType: ColorType;
  styleType: StyleType;
}

export interface IStyledButtonNew
  extends Pick<IButtonNew, 'colorType' | 'animated' | 'styleType'> {}
