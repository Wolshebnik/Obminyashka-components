import { Loader } from '../loader';
import { ButtonProps, ButtonType } from './types';
import { StyledButton, WrapIcon } from './styles';

const Button = ({
  mb,
  bold,
  icon,
  text,
  width,
  style,
  lHeight,
  isLoading,
  disabling,
  onClick,
  type = ButtonType.Button,
  whatClass = null,
  ...props
}: ButtonProps) => (
  <StyledButton
    mb={mb}
    type={type}
    bold={bold}
    width={width}
    style={style}
    lHeight={lHeight}
    disabled={disabling}
    className={whatClass}
    onClick={!isLoading ? onClick : undefined}
    {...props}
  >
    {isLoading ? <Loader /> : text}
    {icon && <WrapIcon>{icon}</WrapIcon>}
  </StyledButton>
);
export { Button };
