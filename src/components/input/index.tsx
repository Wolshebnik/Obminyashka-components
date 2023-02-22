import InputMask from 'react-input-mask';

import * as Icon from '../icon';
import * as Styles from './styles';
import { InputProps } from './types';
import { showPassword } from './show-password';

const Input = ({
  id,
  type,
  label,
  value,
  error,
  onClick,
  inputGap,
  labelColor,
  placeholder,
  labelFontSize,
  inputMaxWidth,
  labelFontWeight,
  inputFlexDirection,
  name = 'inputName',
  inputJustifyContent,
  wrapperInputErrorWidth,
  ...props
}: InputProps) => {
  const isTypeSearch = type === 'search';
  const notPasswordType = type !== 'password';
  const isInputNotEmpty = value?.toString().length !== 0;

  const { component, currentType } = showPassword(notPasswordType);
  const typing = notPasswordType ? type : currentType;

  const clearInput = () => props.onChange && props.onChange('');

  return (
    <Styles.Label
      inputGap={inputGap}
      isTypeSearch={isTypeSearch}
      inputMaxWidth={inputMaxWidth}
      inputFlexDirection={inputFlexDirection}
      inputJustifyContent={inputJustifyContent}
    >
      {label && !isTypeSearch && (
        <Styles.LabelSpan
          labelColor={labelColor}
          labelFontSize={labelFontSize}
          labelFontWeight={labelFontWeight}
          inputFlexDirection={inputFlexDirection}
        >
          {label}
        </Styles.LabelSpan>
      )}

      {isTypeSearch && (
        <Styles.WrapperSearchLink onClick={onClick}>
          <Icon.Search />
        </Styles.WrapperSearchLink>
      )}

      <Styles.WrapperInputError
        isTypeSearch={isTypeSearch}
        wrapperInputErrorWidth={wrapperInputErrorWidth}
      >
        <Styles.InputIcon>
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
                autoComplete="off"
                isTypeSearch={isTypeSearch}
                notPasswordType={notPasswordType}
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
              autoComplete="off"
              placeholder={placeholder}
              isTypeSearch={isTypeSearch}
              notPasswordType={notPasswordType}
              {...props}
            />
          )}

          {isInputNotEmpty && isTypeSearch && (
            <Styles.WrapperReset onClick={clearInput}>
              <Icon.Close />
            </Styles.WrapperReset>
          )}

          {!notPasswordType && component}
        </Styles.InputIcon>

        {error && <Styles.SpanError error={error}>{error}</Styles.SpanError>}
      </Styles.WrapperInputError>
    </Styles.Label>
  );
};

export { Input };
