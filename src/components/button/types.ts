import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export type ColorType = 'blue' | 'green';

interface CustomButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}
export interface IButton extends Omit<CustomButton, 'ref'> {
  icon?: ReactNode;
  text?: string;
  width: string;
  bold?: boolean;
  lHeight?: string;
  isLoading?: boolean;
  colorType?: ColorType;
  orderRight?: boolean;
}

export interface IStyledButton
  extends Pick<IButton, 'width' | 'lHeight' | 'bold' | 'orderRight'> {
  colorType: ColorType;
}
