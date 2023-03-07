export interface IProductCardProps {
  text: string;
  city: string;
  margin?: string;
  avatar?: string;
  picture: string;
  buttonText: string;
  onClick: () => void;
  isFavorite?: boolean;
  inboxMessage?: number;
}
