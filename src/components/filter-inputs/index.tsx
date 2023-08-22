import { Field, FieldProps } from 'formik';

import { CheckBox } from 'components/checkbox';

import * as Styles from './styles';
import { IFilterCheckbox } from './types';

export const FilterInput = ({
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
          <>
            {hiddenCheckbox ? (
              <Styles.StyledLabel isChecked={isChecked}>
                {label}
                <Styles.HiddenCheckbox
                  name={name}
                  onChange={onChange}
                  checked={isChecked}
                />
                <Styles.Cross />
              </Styles.StyledLabel>
            ) : (
              <CheckBox
                name={name}
                type={type}
                text={label}
                onChange={onChange}
                checked={isChecked}
              />
            )}
          </>
        );
      }}
    </Field>
  );
};
