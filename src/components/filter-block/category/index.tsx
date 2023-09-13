/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import * as Styles from '../styles';
import { ICategory } from '../types';
import { SubCategory } from './sub-category';

export const Category = ({
  type,
  open,
  name,
  title,
  setOpen,
  getCities,
  categoryId,
  categoryIndex,
  subCategories,
  categoryBlock,
  hiddenCheckbox,
  categoryActive,
}: ICategory) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isOpenCategory = open === categoryIndex;

  useEffect(() => {
    if (categoryActive && categoryId === categoryActive) {
      setOpen(categoryIndex);
    }
  }, []);

  return (
    <>
      <Styles.CategoryTitle
        onClick={() => {
          if (categoryBlock) {
            setOpen(categoryIndex);
          } else {
            setIsOpen(!isOpen);
          }
        }}
      >
        {title}
        <Styles.Triangle isOpen={categoryBlock ? isOpenCategory : isOpen} />
      </Styles.CategoryTitle>

      <Styles.ScrollWrapper type={type}>
        <Styles.SubCategories
          type={type}
          isOpen={categoryBlock ? isOpenCategory : isOpen}
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
};
