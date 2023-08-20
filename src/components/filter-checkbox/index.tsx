/* eslint-disable no-console */
import { Field, FieldProps } from 'formik';

import { CheckBox } from 'components/checkbox';

import { INewCheckbox } from './types';

export const FilterCheckbox = ({ name, type, label }: INewCheckbox) => {
  const isRadio = type === 'radio';

  return (
    <Field name={name}>
      {({ form, field }: FieldProps) => {
        const isChecked = isRadio
          ? field.value === label
          : field.value.includes(label);

        const onChange = () => {
          if (isRadio) {
            form.setFieldValue(name, label);
            return;
          }

          if (!isChecked) form.setFieldValue(name, [...field.value, label]);

          if (isChecked)
            form.setFieldValue(name, [
              ...field.value.filter((item: string) => item !== label),
            ]);
        };

        return (
          <>
            <CheckBox
              name={name}
              type={type}
              text={label}
              onChange={onChange}
              checked={isChecked}
            />
          </>
        );
      }}
    </Field>
  );
};
