export interface ILogo {
  to: string;
  inFooter?: boolean;
  inFooterOAuth?: boolean;
}

export interface IFooterStyles extends Omit<ILogo, 'to'> {}
