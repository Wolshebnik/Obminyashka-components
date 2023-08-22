import { useState } from 'react';

import * as Styles from '../styles';
import { ICategory } from '../types';
import { SubCategory } from './sub-category';

export const Category = ({
  type,
  categoryTitle,
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
        {categoryTitle}
        <Styles.Triangle isOpen={isOpen} />
      </Styles.CategoryTitle>

      <Styles.ScrollWrapper>
        <Styles.SubCategories type={type} isOpen={isOpen}>
          {subCategories.map((props, index) => (
            <SubCategory
              {...props}
              type={type}
              name={categoryTitle}
              key={index + props.label}
              hiddenCheckbox={hiddenCheckbox}
            />
          ))}
        </Styles.SubCategories>
      </Styles.ScrollWrapper>
    </>
  );
};
