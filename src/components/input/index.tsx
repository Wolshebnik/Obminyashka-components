// import { useField } from 'formik';
// import { useLocation } from 'react-router-dom';
import InputMask from 'react-input-mask';
// import { route } from 'routes/routeConstants';

// import {Props} from '@types/react-input-mask'
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
  styleType = 'authorization',
  mbInput,
  placeholder,
  iconTopPosition,
  ...props
}: InputProps) => {
  const notPasswordType = type !== 'password';
  const { component, currentType } = showPassword(
    notPasswordType,
    iconTopPosition
  );
  const typing = notPasswordType ? type : currentType;

  return (
    <Styles.InputDiv mbInput={mbInput && mbInput}>
      <Styles.Label styleType={styleType}>
        <span>{label && label}</span> {/*styles*/}
        <div style={{ position: 'relative' }}>
          {styleType === 'profile' && phone && (
            <InputMask
              value={value}
              mask="+38(999) 999-99-99"
              placeholder={placeholder}
              readOnly={props.readOnly}
              {...props}
            >
              <Styles.Input id={name + id} type="tel" />
            </InputMask>
          )}

          {styleType === 'profile' && !phone && (
            <Styles.Input error={error && error} />
          )}

          {styleType === 'authorization' && (
            <Styles.InputAuth
              name={name}
              value={value}
              type={typing}
              id={id ?? name}
              placeholder={placeholder}
              error={error}
              {...props}
            />
          )}
          {!notPasswordType && component}

          {error && (
            <Styles.SpanError styleType={styleType} error={error && error}>
              {' '}
              {error}{' '}
            </Styles.SpanError>
          )}
        </div>
      </Styles.Label>
    </Styles.InputDiv>
  );
};

export { Input };
