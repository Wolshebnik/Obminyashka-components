export interface ILoader {
  styleType?: 'default' | 'secondary';
}

export interface IStyledLoader extends Required<ILoader> {}
