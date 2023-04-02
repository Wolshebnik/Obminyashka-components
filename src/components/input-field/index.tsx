import { Field, FieldProps } from 'formik';

import { Input } from '../input';
import { InputProps } from '../input/types';
import { InputOnChangeEventType } from './types';

export const InputField = ({ name, label, ...props }: InputProps) => {
  return (
    <Field name={name}>
      {({ meta, form, field: { onChange, ...fieldProps } }: FieldProps) => {
        const error = meta.touched && meta.error ? meta.error : undefined;
        const change = async (newValue: InputOnChangeEventType) => {
          await form.setFieldValue(name, newValue);
          form.setFieldTouched(name);
        };

        return (
          <Input
            {...props}
            label={label}
            error={error}
            {...fieldProps}
            onChange={(e) => change(typeof e === 'string' ? e : e.target.value)}
          />
        );
      }}
    </Field>
  );
};
