export interface CheckboxProps {
  margin: number,
  checked: boolean,
  gap?: number,
  fontSize: number,
  text: string,
  onClick?: () => void,
}

export interface DivArg {
  margin: number;
  checked: boolean;
}

export interface LabelArg {
  gap?: number;
  checked: boolean;
  fontSize: number;
}

export interface LabelSquareArg {
  checked: boolean;
}
