import { ButtonProps } from './types';
import { StyledButton } from './styles';

export const Button = ({
  label,
  size = 'medium',
  backgroundColor,
  styleType = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      type="button"
      styleType={styleType}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
