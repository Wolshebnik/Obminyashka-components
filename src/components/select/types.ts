export interface ISelectOption {
  text: string;
  value?: string;
  [key: string]: any;
}

export interface IOnChangeValue {
  value: string;
  chosenOptions: ISelectOption[] | [];
}

export interface ISelectProps {
  value?: string;
  title?: string;
  isActive?: boolean;
  multiple?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  filtration?: boolean;
  notCheckbox?: boolean;
  deleteOnClose?: boolean;
  options?: ISelectOption[];
  setIsActive?: (num?: number) => void;
  onChange: (values: IOnChangeValue) => void;
}
