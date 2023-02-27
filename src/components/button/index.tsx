import { IButton } from './types';
import * as Styles from './styles';
import { Loader } from '../loader';

const Button = ({
  gap,
  bold,
  icon,
  text,
  style,
  height,
  lHeight,
  onClick,
  disabled,
  isLoading,
  orderRight,
  width = 140,
  outsideText,
  animationType,
  type = 'button',
  nativeIcon = true,
  colorType = 'blue',
  ...props
}: IButton) => (
  <>
    {!outsideText && (
      <Styles.Button
        gap={gap}
        type={type}
        bold={bold}
        width={width}
        style={style}
        lHeight={lHeight}
        disabled={disabled}
        colorType={colorType}
        orderRight={orderRight}
        nativeIcon={nativeIcon}
        onClick={!isLoading ? onClick : undefined}
        {...props}
      >
        {icon && (
          <Styles.WrapIcon orderRight={orderRight}>{icon}</Styles.WrapIcon>
        )}

        {isLoading ? <Loader animationType={animationType} /> : text}
      </Styles.Button>
    )}

    {outsideText && (
      <Styles.WrapperAddDel gap={gap}>
        {text && <span>{text}</span>}

        <Styles.Button
          type={type}
          width={width}
          height={height}
          isRotate={!text}
          onClick={onClick}
          disabled={disabled}
          colorType={colorType}
          outsideText={outsideText}
          {...props}
        >
          <Styles.WrapIcon>{icon}</Styles.WrapIcon>
        </Styles.Button>
      </Styles.WrapperAddDel>
    )}
  </>
);
export { Button };
