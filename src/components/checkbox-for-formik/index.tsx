import React from 'react';
import { Field, FieldProps } from 'formik';

import { CheckBox } from 'components/checkbox';
import { IInput } from 'components/checkbox/types';

interface ICustomCheckboxProps extends Omit<IInput, 'ref'> {
  name: string;
  label: string;
  values: string[];
}

export const FormikCheckbox = ({
  name,
  values,
  label,
  ...props
}: ICustomCheckboxProps) => {
  const isChecked = values.includes(label);

  return (
    <Field name={name}>
      {({ form }: FieldProps) => (
        <CheckBox
          id={label}
          name={name}
          text={label}
          checked={isChecked}
          onChange={() => {
            const setValues = isChecked
              ? values.filter((item) => item !== label)
              : [...values, label];
            form.setFieldValue(name, setValues);
          }}
          {...props}
        />
      )}
    </Field>
  );
};
