/* eslint-disable no-console */
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
  type,
  label,
  values,
  ...props
}: ICustomCheckboxProps) => {
  const isChecked = values.includes(label);
  console.log(values);

  return (
    <Field name={name}>
      {({ form }: FieldProps) => (
        <CheckBox
          id={label}
          type={type}
          name={name}
          text={label}
          checked={isChecked}
          onChange={() => {
            let setValues;
            if (type === 'checkbox') {
              setValues = isChecked
                ? values.filter((item) => item !== label)
                : [...values, label];
            } else if (type === 'radio') {
              setValues = [label];
            }
            form.setFieldValue(name, setValues);
          }}
          {...props}
        />
      )}
    </Field>
  );
};
