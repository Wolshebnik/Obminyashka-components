import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ColorType = 'blue' | 'green' | 'grey';

interface ICustomButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export interface IButtonNew extends Omit<ICustomButton, 'ref'> {
  text: string;
  plus?: boolean;
  width: number;
}

export interface IStyledButtonNew extends Pick<IButtonNew, 'width'> {
  width: number;
}
