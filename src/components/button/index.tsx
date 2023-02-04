import { Loader } from '../loader';
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
  onClick = null,
  type = 'button',
  whatClass = null,
  ...props
}) => (
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
