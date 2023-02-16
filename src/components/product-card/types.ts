export interface ProductCardProps {
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

export interface InboxMessageProps {
  inboxMessage: number;
}
