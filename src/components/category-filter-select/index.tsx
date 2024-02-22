import { useEffect, useState } from 'react';

import { CheckBox } from 'components/checkbox';

import * as Styles from './styles';
import { ICategoriesData } from './types';

export const CategoryFilterSelect = ({
  id,
  type,
  title,
  options,
  disabled,
  isOpenCategory,
  selectedCategory,
  setIsOpenCategory,
  setIsSelectedCategory,
}: ICategoriesData) => {
  const [checked, setChecked] = useState<string[]>([]);
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

  const isOpen = isOpenCategory ? isOpenCategory : isOpenFilter;
  const isCheckboxRadio = type === 'checkbox' || type === 'radio';
  const isFilter = type === 'checkbox' || type === 'radio' || type === 'input';

  useEffect(() => {
    if (
      (title === 'size(clothes)' && selectedCategory !== 'clothes') ||
      (title === 'size(shoes)' && selectedCategory !== 'shoes')
    ) {
      setIsOpenFilter(false);
    }
  }, [selectedCategory]);

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
        selectedCategory={selectedCategory}
        disabled={disabled?.includes(title)}
        onClick={() => {
          if (isFilter) {
            setIsOpenFilter(!isOpenFilter);
          }

          if (
            type === 'category' &&
            setIsSelectedCategory &&
            setIsOpenCategory
          ) {
            setIsOpenCategory(id);
            setIsSelectedCategory(title);
          }
        }}
      >
        {title}
        <Styles.Triangle isOpen={isOpen} />
      </Styles.CategoryTitle>

      <Styles.ScrollWrapper>
        <Styles.SubCategories isOpen={isOpen}>
          {type === 'category' && (
            <>
              {options.map((option, idx) => (
                <Styles.SubCategory
                  type={type}
                  key={option.name + idx}
                  isCheck={checked.includes(option.name)}
                  onClick={() => handleCheck(option.name)}
                >
                  {option.name}

                  <Styles.Cross />
                </Styles.SubCategory>
              ))}
            </>
          )}

          {isFilter && (
            <>
              {options.map((option, idx) => (
                <Styles.SubCategory key={option.name + idx}>
                  {isCheckboxRadio && (
                    <CheckBox
                      type={type}
                      name={type}
                      text={option.name}
                      checked={checked.includes(option.name)}
                      onChange={() => handleCheck(option.name)}
                    />
                  )}

                  {type === 'input' && <div>location</div>}
                </Styles.SubCategory>
              ))}
            </>
          )}
        </Styles.SubCategories>
      </Styles.ScrollWrapper>
    </>
  );
};
