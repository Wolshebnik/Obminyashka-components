import { ButtonProps } from './types';
import { StyledButton } from './styles';

const Button = ({ label }: ButtonProps) => {
  return <StyledButton>{label}</StyledButton>;
};

export { Button };
