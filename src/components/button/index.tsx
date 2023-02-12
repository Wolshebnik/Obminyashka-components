import { Icon } from '..';
import { IButton } from './types';
import { StyledButton, WrapIcon } from './styles';

const Button = ({
  bold,
  icon,
  text,
  style,
  lHeight,
  onClick,
  disabled,
  isLoading,
  orderRight,
  width = 140,
  type = 'button',
  colorType = 'blue',
  ...props
}: IButton) => (
  <StyledButton
    type={type}
    bold={bold}
    width={width}
    style={style}
    lHeight={lHeight}
    disabled={disabled}
    colorType={colorType}
    orderRight={orderRight}
    onClick={!isLoading ? onClick : undefined}
    {...props}
  >
    {icon && <WrapIcon orderRight={orderRight}>{icon}</WrapIcon>} 
    {/* TODO:  change Loader on Loader-component*/}
    {isLoading ? <Icon.Loader /> : text}
  </StyledButton>
);
export { Button };
