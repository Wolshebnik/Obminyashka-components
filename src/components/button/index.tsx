import { Loader } from '../loader';
import { IButton,  } from './types';
import { StyledButton, WrapIcon } from './styles';

const Button = ({
  bold,
  icon,
  text,
  width,
  style,
  lHeight,
  isLoading,
  disabled,
  onClick,
  type = 'button',
  colorType = "blue",
  orderRight,
  ...props
}: IButton) => (
  <StyledButton
    type={type}
    bold={bold}
    width={width}
    style={style}
    lHeight={lHeight}
    disabled={disabled}
    onClick={!isLoading ? onClick : undefined}
    orderRight={orderRight}
    colorType={colorType}
    {...props}
  >
    {icon && <WrapIcon orderRight={orderRight}>{icon}</WrapIcon>} 
    {isLoading ? <Loader /> : text}
  </StyledButton>
);
export { Button };
