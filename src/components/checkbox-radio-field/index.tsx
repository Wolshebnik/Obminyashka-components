import { Field, FieldProps } from 'formik';

import { InputLocation } from './input';
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

        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (isRadio) {
            form.setFieldValue(name, label);
            return;
          }
          if (type === 'input') {
            form.setFieldValue(name, e.target.value);
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
            {type !== 'input' && (
              <CheckBox
                name={name}
                type={type}
                text={label}
                onChange={onChange}
                checked={isChecked}
                hiddenCheckbox={hiddenCheckbox}
              />
            )}

            {type === 'input' && (
              <InputLocation
                name={name}
                label={label}
                onChange={onChange}
                value={field.value}
              />
            )}
          </>
        );
      }}
    </Field>
  );
};
