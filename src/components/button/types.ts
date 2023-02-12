import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export type ColorType = 'blue' | 'green';

interface CustomButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}
export interface IButton extends Omit<CustomButton, 'ref'> {
  text?: string;
  width?: number;
  bold?: boolean;
  icon?: ReactNode;
  lHeight?: string;
  isLoading?: boolean;
  orderRight?: boolean;
  colorType?: ColorType;
}

export interface IStyledButton
  extends Pick<IButton, 'width' | 'lHeight' | 'bold' | 'orderRight'> {
  colorType: ColorType;
}
