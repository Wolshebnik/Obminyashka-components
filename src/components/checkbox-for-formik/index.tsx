import React from 'react';
import { Field, FieldProps } from 'formik';

// import { CheckBox } from 'components/checkbox';
import { IInput } from 'components/checkbox/types';

interface ICustomCheckboxProps extends Omit<IInput, 'ref'> {
  name: string;
  label: string;
  value: string[];
}

export const FormikCheckbox = ({
  name,
  value,
  label,
}: // ...props
ICustomCheckboxProps) => {
  const isChecked = value.includes(label);

  return (
    <Field name={name}>
      {({ form }: FieldProps) => (
        // <CheckBox
        //   id={label}
        //   name={name}
        //   text={label}
        //   checked={isChecked}
        //   onChange={() => {
        //     const setValues = isChecked
        //       ? value.filter((item) => item !== label)
        //       : [...value, label];
        //     form.setFieldValue(name, setValues);
        //   }}
        //   {...props}
        // />
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              const setValues = isChecked
                ? value.filter((item) => item !== label)
                : [...value, label];
              form.setFieldValue(name, setValues);
            }}
          />
          {label}
        </label>
      )}
    </Field>
  );
};
