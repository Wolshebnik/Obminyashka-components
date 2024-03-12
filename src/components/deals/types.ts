export interface IDeals {
  to: string;
  text: string;
  heartIcon?: boolean;
  background?: boolean;
  puzzleIcon?: boolean;
  onClose?: () => void;
  inFooterOAuth?: boolean;
}
