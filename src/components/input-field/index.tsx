import { Field } from 'formik';

import { Input } from '../input';
import { InputProps } from '../input/types';
import { fieldProps, InputOnChangeEventType } from './types';

export const InputField = ({ name, label, ...propsField }: InputProps) => {
  return (
    <Field name={name}>
      {({ field: { value, onChange, ...props }, meta, form }: fieldProps) => {
        const error = meta.touched && meta.error ? meta.error : undefined;
        const change = async (newValue: InputOnChangeEventType) => {
          await form.setFieldValue(name, newValue);
          form.setFieldTouched(name);
        };

        return (
          <Input
            label={label}
            error={error}
            onChange={(e) => change(typeof e === 'string' ? e : e.target.value)}
            {...propsField}
            {...props}
            name={name}
          />
        );
      }}
    </Field>
  );
};
