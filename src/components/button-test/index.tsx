import { ButtonProps } from './types';
import { StyledButton } from './styles';

export const ButtonTest = ({
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
