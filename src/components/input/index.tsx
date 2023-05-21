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
  errorGap,
  labelColor,
  inputHeight,
  placeholder,
  errorFontSize,
  inputMaxWidth,
  labelFontSize,
  labelFontWeight,
  inputFlexDirection,
  name = 'inputName',
  autoComplete = 'on',
  inputJustifyContent,
  wrapperInputErrorWidth,
  ...props
}: InputProps) => {
  const maxValue = 255;
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
        errorGap={errorGap}
        isTypeSearch={isTypeSearch}
        wrapperInputErrorWidth={wrapperInputErrorWidth}
      >
        <Styles.InputIcon>
          {type === 'tel' && (
            <InputMask
              value={value}
              id={name + id}
              mask="+99999999999*"
              placeholder={placeholder}
              {...props}
            >
              <Styles.Input
                error={error}
                inputHeight={inputHeight}
                autoComplete={autoComplete}
                isTypeSearch={isTypeSearch}
                notPasswordType={notPasswordType}
              />
            </InputMask>
          )}

          {type === 'textarea' && (
            <Styles.WrapDescription>
              <Styles.TextArea
                value={value}
                error={error}
                id={id ?? name}
                {...props}
              />

              <Styles.ErrorCount error={error}>
                {`${value ? (value as string).length : 0}/${maxValue}`}
              </Styles.ErrorCount>
            </Styles.WrapDescription>
          )}

          {type !== 'tel' && type !== 'textarea' && (
            <Styles.Input
              name={name}
              value={value}
              type={typing}
              error={error}
              id={id ?? name}
              inputHeight={inputHeight}
              placeholder={placeholder}
              autoComplete={autoComplete}
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

        {error && type !== 'textarea' && (
          <Styles.SpanError error={error} errorFontSize={errorFontSize}>
            {error}
          </Styles.SpanError>
        )}
      </Styles.WrapperInputError>
    </Styles.Label>
  );
};

export { Input };
