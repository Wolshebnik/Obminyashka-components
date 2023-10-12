/* eslint-disable no-console */
import { Field, FieldProps } from 'formik';

import { IFilterCheckbox } from './types';
import { CheckBox } from 'components/checkbox';
import { useEffect } from 'react';

export const CheckboxRadioField = ({
  name,
  type,
  label,
  paramToSet,
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
          ? field.value === paramToSet
          : (Array.isArray(field.value) &&
              field.value.includes(paramToSet || label)) ||
            (typeof field.value === 'object' &&
              Array.isArray(field.value.subcategories) &&
              field.value.subcategories.includes(subCategoryId));

        useEffect(() => {
          if (typeof field.value === 'object' && !isOpenCategory) {
            form.setFieldValue(name, {
              id: '',
              subcategories: [],
              activeCategory: form.values.category.activeCategory,
            });
          }

          if (Array.isArray(field.value)) {
            form.setFieldValue(name, []);
          }
        }, [isOpenCategory]);

        const onChange = () => {
          if (isRadio) {
            form.setFieldValue(name, paramToSet);
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
                activeCategory: categoryId,
              });
            }

            if (Array.isArray(field.value)) {
              form.setFieldValue(name, [
                ...field.value,
                paramToSet ? paramToSet : label,
              ]);
            }
          }

          if (isChecked) {
            if (typeof field.value === 'object') {
              form.setFieldValue(name, {
                id: field.value.subcategories?.length === 0 ? categoryId : '',
                subcategories: [
                  ...(field.value.subcategories || []).filter(
                    (id: string) => id !== subCategoryId
                  ),
                ],
                activeCategory: form.values.category.activeCategory,
              });
            }

            if (Array.isArray(field.value)) {
              form.setFieldValue(
                name,
                field.value.filter((item: string) =>
                  name === 'age' ? item !== label : item !== paramToSet
                )
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
