import { Link, LinkProps } from 'react-router-dom';

export interface LogoLinkProps extends LinkProps {
  inFooter?: boolean;
}

export const LogoLink: React.FC<LogoLinkProps> = ({ inFooter, ...rest }) => (
  <Link {...rest} />
);
