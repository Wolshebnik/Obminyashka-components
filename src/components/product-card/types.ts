export interface IProductCardProps {
  text: string;
  city: string;
  margin?: number;
  avatar?: string;
  picture: string;
  buttonText: string;
  onClick: () => void;
  isFavorite?: boolean;
  inboxMessage?: number;
}
