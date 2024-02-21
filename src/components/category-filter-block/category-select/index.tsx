import { useState } from 'react';

import * as Styles from './styles';
import { ICategoriesData } from './types';

export const CategorySelect = ({
  id,
  title,
  isOpen,
  options,
  setOpen,
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
      <Styles.CategoryTitle onClick={() => setOpen(id)}>
        {title}
        <Styles.Triangle isOpen={isOpen} />
      </Styles.CategoryTitle>

      <Styles.ScrollWrapper>
        <Styles.SubCategories isOpen={isOpen}>
          {options.map((option, idx) => (
            <Styles.SubCategory
              key={option.name + idx}
              onClick={() => handleCheck(option.name)}
              isCheck={checkedCategory.includes(option.name)}
            >
              {option.name}

              <Styles.Cross />
            </Styles.SubCategory>
          ))}
        </Styles.SubCategories>
      </Styles.ScrollWrapper>
    </>
  );
};
