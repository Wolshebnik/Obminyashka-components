import { useState } from 'react';

import { CheckBox } from 'components/checkbox';
import { ISubCategory } from 'components/filter-block/types';

import * as Styles from '../../styles';

export const SubCategory = ({ name, type }: ISubCategory) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Styles.SubCategory
      key={name}
      type={type}
      isActive={isActive}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      {!type && <span>{name}</span>}
      {type === 'checkbox' && <CheckBox text={name} name={'name'} />}
      {type === 'input' && (
        <Styles.CustomInput name="name" placeholder={name} />
      )}
      <Styles.Cross type={type} />
    </Styles.SubCategory>
  );
};
