/* eslint-disable */
// @ts-nocheck
import React, { useState } from 'react';

import { CheckBox } from 'components/checkbox';

import * as Styles from './styles';

export const FilterBlock = ({ data }) => {
  const [open, setOpen] = useState<number[]>([]);
  const { title, categories } = data;

  const toggleOpen = (index: number) => {
    if (open.includes(index)) {
      setOpen(open.filter((item) => item !== index));
    } else {
      setOpen([...open, index]);
    }
  };

  return (
    <Styles.Card>
      <Styles.Title>{title}</Styles.Title>

      <Styles.Categories>
        {categories.map(({ subTitle, subCategories, type }, index) => (
          <Styles.Category key={subTitle}>
            <Styles.SubTitle onClick={() => toggleOpen(index)}>
              {subTitle}
              <Styles.Triangle isOpen={open.includes(index)} />
            </Styles.SubTitle>

            <Styles.SubCategories isOpen={open.includes(index)} type={type}>
              {subCategories.map(({ name }) => (
                <Styles.SubCategory key={name} type={type}>
                  {!type && <span>{name}</span>}
                  {type === 'checkbox' && <CheckBox text={name} />}
                  {type === 'input' && (
                    <Styles.CustomInput placeholder={name} />
                  )}
                  <Styles.Cross type={type} />
                </Styles.SubCategory>
              ))}
            </Styles.SubCategories>
          </Styles.Category>
        ))}
      </Styles.Categories>
    </Styles.Card>
  );
};
