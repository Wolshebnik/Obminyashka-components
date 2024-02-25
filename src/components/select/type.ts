export interface ISelectOption {
  text: string;
  value: string;
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
  saveOnClose?: boolean;
  setIsActive?: () => void;
  options?: ISelectOption[];
  onChange: (onChangeValue: IOnChangeValue) => void;
}
