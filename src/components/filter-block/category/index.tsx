//TODO make one state per category and filter
import { useEffect, useState } from 'react';

import * as Styles from '../styles';
import { ICategory } from '../types';
import { SubCategory } from './sub-category';
import { Field, FieldProps } from 'formik';

export const Category = ({
  type,
  name,
  title,
  getCities,
  categoryId,
  openCategory,
  subCategories,
  categoryBlock,
  hiddenCheckbox,
  categoryActive,
  setOpenCategory,
}: ICategory) => {
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const isOpenCategory = openCategory.includes(categoryId ? categoryId : '');

  return (
    <Field name={name}>
      {({ form, field }: FieldProps) => {
        const isDisabled =
          (form.values.category.activeCategory !== '1' &&
            name === 'clothingSizes') ||
          (form.values.category.activeCategory !== '2' && name === 'shoesSize');

        useEffect(() => {
          if (
            !Array.isArray(field.value) &&
            typeof field.value !== 'string' &&
            type !== 'input'
          ) {
            form.setFieldValue(name, {
              activeCategory: categoryActive,
            });
          }

          if (
            categoryBlock &&
            categoryActive &&
            categoryId === categoryActive
          ) {
            setOpenCategory([categoryId]);
          }
        }, []);

        useEffect(() => {
          if (isDisabled) {
            if (!categoryBlock) {
              setIsOpenFilter(false);
            }
            form.setFieldValue(name, []);
          }
        }, [form.values.category.activeCategory]);

        const handleClick = () => {
          if (categoryBlock) {
            setOpenCategory([categoryId ? categoryId : '']);

            if (
              !Array.isArray(field.value) &&
              typeof field.value !== 'string' &&
              type !== 'input'
            ) {
              form.setFieldValue(name, {
                activeCategory: categoryId,
              });
            }
          } else {
            setIsOpenFilter(!isOpenFilter);
          }
        };

        return (
          <>
            <Styles.CategoryTitle disabled={isDisabled} onClick={handleClick}>
              {title}
              <Styles.Triangle isOpen={isOpenCategory || isOpenFilter} />
            </Styles.CategoryTitle>

            <Styles.ScrollWrapper type={type}>
              <Styles.SubCategories
                type={type}
                isOpen={isOpenCategory || isOpenFilter}
              >
                {subCategories.map((subCategory, index) => (
                  <SubCategory
                    type={type}
                    name={name}
                    getCities={getCities}
                    categoryId={categoryId}
                    subCategoryId={subCategory.id}
                    key={index + subCategory.name}
                    isOpenCategory={isOpenCategory}
                    hiddenCheckbox={hiddenCheckbox}
                    subCategoryName={subCategory.name}
                    paramToSet={subCategory.paramToSet}
                    containerName={subCategory.containerName}
                  />
                ))}
              </Styles.SubCategories>
            </Styles.ScrollWrapper>
          </>
        );
      }}
    </Field>
  );
};
