/* eslint-disable no-console */
import { Field, FieldProps } from 'formik';

import { IFilterCheckbox } from './types';
import { CheckBox } from 'components/checkbox';
import { useEffect } from 'react';

export const CheckboxRadioField = ({
  name,
  type,
  label,
  categoryId,
  subCategoryId,
  hiddenCheckbox,
  isOpenCategory,
}: IFilterCheckbox) => {
  const isRadio = type === 'radio';

  return (
    <Field name={name}>
      {({ form, field }: FieldProps) => {
        const isChecked = isRadio
          ? field.value === label
          : (Array.isArray(field.value) &&
              field.value.includes(subCategoryId)) ||
            (typeof field.value === 'object' &&
              Array.isArray(field.value.subcategories) &&
              field.value.subcategories.includes(subCategoryId));

        useEffect(() => {
          if (typeof field.value === 'object' && !isOpenCategory) {
            form.setFieldValue(name, { id: '', subcategories: [] });
          }

          if (Array.isArray(field.value)) {
            form.setFieldValue(name, []);
          }
        }, [isOpenCategory]);

        const onChange = () => {
          if (isRadio) {
            form.setFieldValue(name, label);
            return;
          }

          if (!isChecked) {
            if (typeof field.value === 'object') {
              form.setFieldValue(name, {
                id: categoryId,
                subcategories: [
                  ...(field.value.subcategories || []),
                  subCategoryId,
                ],
              });
            }

            if (Array.isArray(field.value)) {
              form.setFieldValue(name, [...field.value, subCategoryId]);
            }
          }

          if (isChecked) {
            if (typeof field.value === 'object') {
              form.setFieldValue(name, {
                id: categoryId,
                subcategories: [
                  ...(field.value.subcategories || []).filter(
                    (id: string) => id !== subCategoryId
                  ),
                ],
              });
            }

            if (Array.isArray(field.value)) {
              form.setFieldValue(
                name,
                field.value.filter((id: string) => id !== subCategoryId)
              );
            }
          }
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
