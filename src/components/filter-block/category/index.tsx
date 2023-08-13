import { useState } from 'react';

import * as Styles from '../styles';
import { ICategory } from '../types';
import { SubCategory } from './sub-category';

export const Category = ({ categoryTitle, subCategories, type }: ICategory) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  return (
    <>
      <Styles.CategoryTitle
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
          setTimeout(() => setIsScroll(!isScroll), 500);
        }}
      >
        {categoryTitle}
        <Styles.Triangle isOpen={isOpen} />
      </Styles.CategoryTitle>

      <Styles.SubCategories type={type} isOpen={isOpen} isScroll={isScroll}>
        {subCategories.map((props, index) => (
          <SubCategory {...props} type={type} key={index + props.name} />
        ))}
      </Styles.SubCategories>
    </>
  );
};
