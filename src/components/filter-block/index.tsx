/* eslint-disable */
// @ts-nocheck
import React, { useState } from 'react';

import { CheckBox } from 'components/checkbox';

import * as Styles from './styles';

export const FilterBlock = ({ data }) => {
  const [open, setOpen] = useState<number>(-1);
  const { title, categories } = data;

  console.log(open);

  return (
    <Styles.Card>
      <Styles.Title>{title}</Styles.Title>

      <Styles.Categories>
        {categories.map(({ subTitle, subCategories, type }, index) => (
          <Styles.Category key={subTitle}>
            <Styles.SubTitle onClick={() => setOpen(index)}>
              {subTitle}
              <Styles.Triangle isOpen={open === index} />
            </Styles.SubTitle>

            <Styles.SubCategories isOpen={open === index} type={type}>
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
