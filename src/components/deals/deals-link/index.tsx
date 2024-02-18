import { Link, LinkProps } from 'react-router-dom';

export interface DealsLinkProps extends LinkProps {
  inFooterOAuth?: boolean;
}

export const DealsLink: React.FC<DealsLinkProps> = ({
  inFooterOAuth,
  ...rest
}) => <Link {...rest} />;
