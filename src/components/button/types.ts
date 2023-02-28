import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export type ColorType = 'blue' | 'green' | 'grey';

interface CustomButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export interface IButton extends Omit<CustomButton, 'ref'> {
  gap?: number;
  text?: string;
  width?: number;
  bold?: boolean;
  height?: number;
  icon?: ReactNode;
  lHeight?: string;
  isLoading?: boolean;
  orderRight?: boolean;
  nativeIcon?: boolean;
  colorType?: ColorType;
  outsideText?: boolean;
  animationType?: 'secondary';
}

export interface IStyledButton
  extends Pick<
    IButton,
    | 'gap'
    | 'bold'
    | 'width'
    | 'height'
    | 'lHeight'
    | 'orderRight'
    | 'nativeIcon'
    | 'outsideText'
  > {
  isRotate?: boolean;
  colorType: ColorType;
}
