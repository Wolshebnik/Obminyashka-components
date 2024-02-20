import { useState } from 'react';

import * as Styles from './styles';
import { ICategoriesData } from './types';

export const CategorySelect = ({
  id,
  title,
  openCategory,
  subCategories,
  setOpenCategory,
}: ICategoriesData) => {
  const [checkedCategory, setCheckedCategory] = useState<string[]>([]);

  const handleCheck = (name: string) => {
    setCheckedCategory((prevCheckCategory) => {
      if (!prevCheckCategory.includes(name)) {
        return [...prevCheckCategory, name];
      } else {
        return prevCheckCategory.filter((el) => el !== name);
      }
    });
  };

  return (
    <>
      <Styles.CategoryTitle onClick={() => setOpenCategory(id)}>
        {title}
        <Styles.Triangle isOpen={openCategory === id && true} />
      </Styles.CategoryTitle>

      <Styles.ScrollWrapper>
        <Styles.SubCategories isOpen={openCategory === id && true}>
          {subCategories.map((subCategory, ind) => (
            <Styles.SubCategory
              isCheck={checkedCategory.includes(subCategory.name) && true}
              key={subCategory.name + ind}
              onClick={() => handleCheck(subCategory.name)}
            >
              {subCategory.name}

              <Styles.Cross />
            </Styles.SubCategory>
          ))}
        </Styles.SubCategories>
      </Styles.ScrollWrapper>
    </>
  );
};
