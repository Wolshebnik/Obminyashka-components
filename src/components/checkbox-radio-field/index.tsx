import { Field, FieldProps } from 'formik';

import { IFilterCheckbox } from './types';
import { CheckBox } from 'components/checkbox';

export const CheckboxRadioField = ({
  name,
  type,
  label,
  hiddenCheckbox,
}: IFilterCheckbox) => {
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
          <CheckBox
            name={name}
            type={type}
            text={label}
            onChange={onChange}
            checked={isChecked}
            hiddenCheckbox={hiddenCheckbox}
          />
        );
      }}
    </Field>
  );
};
