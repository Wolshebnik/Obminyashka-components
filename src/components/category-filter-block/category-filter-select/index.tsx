import { useState } from 'react';

import { CheckBox } from 'components/checkbox';

import * as Styles from './styles';
import { ICategoriesData } from './types';

export const CategoryFilterSelect = ({
  id,
  type,
  title,
  isOpen,
  options,
  setOpen,
  disabled,
  isClothesShoes,
  setIsClothesShoes,
}: ICategoriesData) => {
  const [checked, setChecked] = useState<string[]>([]);
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

  const isCheckboxRadio = type === 'checkbox' || type === 'radio';

  const handleCheck = (name: string) => {
    if (type === 'checkbox' || type === 'category') {
      setChecked((prevCheck) => {
        if (!prevCheck.includes(name)) {
          return [...prevCheck, name];
        } else {
          return prevCheck.filter((el) => el !== name);
        }
      });
    }

    if (type === 'radio') {
      setChecked([name]);
    }
  };

  return (
    <>
      <Styles.CategoryTitle
        open={title}
        isClothesShoes={isClothesShoes}
        disabled={disabled?.includes(title)}
        onClick={() => {
          if (isCheckboxRadio) {
            setIsOpenFilter(!isOpenFilter);
          }

          if (setOpen) {
            setOpen(id);
          }

          if (setIsClothesShoes) {
            setIsClothesShoes(title);
          }
        }}
      >
        {title}
        <Styles.Triangle
          isOpen={isCheckboxRadio ? isOpenFilter : isOpen && isOpen}
        />
      </Styles.CategoryTitle>

      <Styles.ScrollWrapper>
        {type === 'category' && (
          <Styles.SubCategories isOpen={isOpen && isOpen}>
            {options.map((option, idx) => (
              <Styles.SubCategory
                key={option.name + idx}
                isCheck={checked.includes(option.name)}
                onClick={() => handleCheck(option.name)}
              >
                {option.name}

                <Styles.Cross />
              </Styles.SubCategory>
            ))}
          </Styles.SubCategories>
        )}

        {isCheckboxRadio && (
          <Styles.SubCategories isOpen={isOpenFilter}>
            {options.map((option, idx) => (
              <Styles.SubCategory key={option.name + idx}>
                <CheckBox
                  type={type}
                  name={type}
                  text={option.name}
                  checked={checked.includes(option.name)}
                  onChange={() => handleCheck(option.name)}
                />
              </Styles.SubCategory>
            ))}
          </Styles.SubCategories>
        )}
      </Styles.ScrollWrapper>
    </>
  );
};
