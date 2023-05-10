import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ColorType = 'blue' | 'green';

interface ICustomButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export interface IButtonNew extends Omit<ICustomButton, 'ref'> {
  text: string;
  width: number;
  plus?: boolean;
  hover?: boolean;
  height?: number;
  animated?: boolean;
  disabled?: boolean;
  colorType: ColorType;
}

export interface IStyledButtonNew
  extends Pick<
    IButtonNew,
    'width' | 'colorType' | 'animated' | 'disabled' | 'hover' | 'height'
  > {}
