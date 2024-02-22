import { useState } from 'react';

import { CheckBox } from 'components/checkbox';

import * as Styles from './styles';
import { IFilterData } from './types';

export const FilterSelect = ({ type, title, options }: IFilterData) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [checkedFilter, setCheckedFilter] = useState<string[]>([]);

  const handleCheck = (name: string) => {
    if (type === 'checkbox') {
      setCheckedFilter((prevCheckCategory) => {
        if (!prevCheckCategory.includes(name)) {
          return [...prevCheckCategory, name];
        } else {
          return prevCheckCategory.filter((el) => el !== name);
        }
      });
    }

    if (type === 'radio') {
      setCheckedFilter([name]);
    }
  };

  return (
    <>
      <>
        <Styles.CategoryTitle onClick={() => setIsOpen(!isOpen)}>
          {title}
          <Styles.Triangle isOpen={isOpen} />
        </Styles.CategoryTitle>

        <Styles.ScrollWrapper>
          <Styles.SubCategories isOpen={isOpen}>
            {options.map((option) => (
              <Styles.SubCategory>
                {type !== 'input' && (
                  <CheckBox
                    type={type}
                    name={type}
                    text={option.name}
                    onChange={() => handleCheck(option.name)}
                    checked={checkedFilter.includes(option.name)}
                  />
                )}
              </Styles.SubCategory>
            ))}
          </Styles.SubCategories>
        </Styles.ScrollWrapper>
      </>
    </>
  );
};
