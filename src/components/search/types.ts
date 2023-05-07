import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface CustomInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

type InputOnChangeEventType = ChangeEvent<HTMLInputElement> | string;

export interface ISearchProps extends Omit<CustomInput, 'ref'> {
  name?: string;
  onClick?: () => void;
  onChange?: (e: InputOnChangeEventType) => void;
}
