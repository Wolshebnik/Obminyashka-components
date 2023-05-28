import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ColorType = 'blue' | 'green';

interface ICustomButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export interface IButtonNew extends Omit<ICustomButton, 'ref'> {
  text: string;
  plus?: boolean;
  hover?: boolean;
  animated?: boolean;
  disabled?: boolean;
  colorType: ColorType;
}

export interface IStyledButtonNew
  extends Pick<IButtonNew, 'colorType' | 'animated' | 'disabled' | 'hover'> {}
