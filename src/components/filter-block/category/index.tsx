import { useState } from 'react';

import * as Styles from '../styles';
import { ICategory } from '../types';
import { SubCategory } from './sub-category';

export const Category = ({
  type,
  categoryName,
  subCategories,
  hiddenCheckbox,
}: ICategory) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Styles.CategoryTitle
        isOpen={isOpen}
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
              categoryName={categoryName}
              key={index + subCategory.name}
              hiddenCheckbox={hiddenCheckbox}
              subCategoryName={subCategory.name}
            />
          ))}
        </Styles.SubCategories>
      </Styles.ScrollWrapper>
    </>
  );
};
