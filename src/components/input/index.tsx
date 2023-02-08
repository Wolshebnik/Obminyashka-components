// import { useField } from 'formik';
// import { useLocation } from 'react-router-dom';
import InputMask from 'react-input-mask';
// import { route } from 'routes/routeConstants';

// const location = useLocation();
// const isPathAuth = location.pathname === route.login;
// const [field, meta] = useField(name);
// const [field, { error, touched }] = useField(name);
// const { error, touched } = meta;
// const inputError = (error && touched) ? error : undefined;

import * as Styles from './styles';
import { InputProps } from './types';
import { showPassword } from './show-password';

const Input = ({
  id,
  name,
  type,
  phone,
  label,
  value,
  error,
  inputMB,
  placeholder,
  labelSpanMB,
  iconTopPosition,
  styleType ='authorization',
  ...props
}: InputProps) => {

  const notPasswordType = type !== 'password';
  const { component, currentType } = showPassword(notPasswordType,iconTopPosition && iconTopPosition);
  const typing = notPasswordType ? type : currentType;

  return (
    <Styles.InputDiv inputMB={inputMB && inputMB}  >
      <Styles.Label styleType={styleType} >
       <Styles.LabelSpan styleType={styleType}>{label && label}</Styles.LabelSpan> {/*styles*/}

        <Styles.WrapperInputError labelSpanMB={labelSpanMB}>
        { (styleType === 'profile' && phone) &&
        <InputMask
            type={typing}
            value={value}
            id={name + id}
            mask="+38(999) 999-99-99"
            placeholder={placeholder}
            // readOnly={props.readOnly}
            {...props}
        >

          {(inputProps)=> <Styles.Input error={ error && error } {...inputProps} disableUnderline/>}

            </InputMask>
        }

        { (styleType === 'profile' && !phone) &&  <Styles.Input  error={ error && error } />}

        { styleType === 'authorization' &&
        <Styles.InputAuth
            name={name}
            value={value}
            type={typing}
            id={id ?? name}
            placeholder={placeholder}
            error={error}
            {...props}
        /> }
          {!notPasswordType && component}

          {error && <Styles.SpanError styleType={styleType} error={ error && error }> { error } </Styles.SpanError>}

        </Styles.WrapperInputError>
      </Styles.Label>

    </Styles.InputDiv>
        );
};

export { Input };
