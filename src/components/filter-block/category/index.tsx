/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import * as Styles from '../styles';
import { ICategory } from '../types';
import { SubCategory } from './sub-category';

export const Category = ({
  type,
  getCities,
  categoryName,
  subCategories,
  hiddenCheckbox,
  categoryActive,
}: ICategory) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (
      categoryActive &&
      categoryName.toLowerCase() === categoryActive.toLowerCase()
    ) {
      setIsOpen(true);
    } else {
      if (hiddenCheckbox) {
        setIsDisabled(!isDisabled);
      }
    }
  }, []);

  return (
    <>
      <Styles.CategoryTitle
        isOpen={isOpen}
        className={isDisabled ? 'disabled' : ''}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {categoryName}
        <Styles.Triangle isOpen={isOpen} />
      </Styles.CategoryTitle>

      <Styles.ScrollWrapper type={type}>
        <Styles.SubCategories type={type} isOpen={isOpen}>
          {subCategories.map((subCategory, index) => (
            <SubCategory
              type={type}
              getCities={getCities}
              categoryName={categoryName}
              key={index + subCategory.name}
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
