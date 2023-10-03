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
  const isOpenCategory = openCategory.includes(categoryId);

  return (
    <Field name={name}>
      {({ form, field }: FieldProps) => {
        const isDisabled =
          (form.values.category.activeCategory !== '1' &&
            categoryId === '12') ||
          (form.values.category.activeCategory !== '2' && categoryId === '13');

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
          if (form.values.category.activeCategory !== '1') {
            if (!categoryBlock) {
              setOpenCategory([...openCategory.filter((id) => id !== '12')]);
            }
          }

          if (form.values.category.activeCategory !== '2') {
            if (!categoryBlock) {
              setOpenCategory([...openCategory.filter((id) => id !== '13')]);
            }
          }
        }, [form.values.category.activeCategory]);

        const handleClick = () => {
          if (categoryBlock) {
            setOpenCategory([categoryId]);

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
            //TODO make one state per category and filter
            // if (!open.includes(categoryId)) {
            //   setOpen([...open, categoryId]);
            // } else {
            //   setOpen([...open.filter((id) => id !== categoryId)]);
            // }
            // console.log('Hi');
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
