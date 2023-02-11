import InputMask from 'react-input-mask';

import * as Styles from './styles';
import { InputProps } from './types';
import { showPassword } from './show-password';

const Input = ({
  id,
  name,
  type,
  label,
  value,
  error,
  inputGap,
  labelColor,
  placeholder,
  labelFontSize,
  inputMaxWidth,
  labelFontWeight,
  inputFlexDirection,
  inputJustifyContent,
  wrapperInputErrorWidth,
  ...props
}: InputProps) => {
  const notPasswordType = type !== 'password';
  const { component, currentType } = showPassword(notPasswordType);
  const typing = notPasswordType ? type : currentType;

  return (
    <Styles.Label
      inputGap={inputGap}
      inputMaxWidth={inputMaxWidth}
      inputFlexDirection={inputFlexDirection}
      inputJustifyContent={inputJustifyContent}
    >
      {label && (
        <Styles.LabelSpan
          labelColor={labelColor}
          labelFontSize={labelFontSize}
          labelFontWeight={labelFontWeight}
          inputFlexDirection={inputFlexDirection}
        >
          {label}
        </Styles.LabelSpan>
      )}

      <Styles.WrapperInputError wrapperInputErrorWidth={wrapperInputErrorWidth}>
        {type === 'tel' && (
          <InputMask
            value={value}
            id={name + id}
            mask="+38(999) 999-99-99"
            placeholder={placeholder}
            {...props}
          >
            <Styles.Input
              error={error}
              notPasswordType={notPasswordType}
              disableUnderline
            />
          </InputMask>
        )}

        {type !== 'tel' && (
          <Styles.Input
            name={name}
            value={value}
            type={typing}
            error={error}
            id={id ?? name}
            placeholder={placeholder}
            notPasswordType={notPasswordType}
            {...props}
          />
        )}
        {!notPasswordType && component}

        {error && <Styles.SpanError error={error}>{error}</Styles.SpanError>}
      </Styles.WrapperInputError>
    </Styles.Label>
  );
};

export { Input };
