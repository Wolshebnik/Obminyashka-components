import { StyledButton } from './styles';
import { ButtonTestProps } from './types';

const TestButton = ({ label }: ButtonTestProps) => {
  return <StyledButton>{label}</StyledButton>;
};

export { TestButton };
