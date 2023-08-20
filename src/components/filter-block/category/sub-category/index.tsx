import { useState } from 'react';

import { CheckBox } from 'components/checkbox';
import { ISubCategory } from 'components/filter-block/types';

import * as Styles from '../../styles';

export const SubCategory = ({ name, type }: ISubCategory) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      {!type && (
        <Styles.SubCategory
          key={name}
          type={type}
          isActive={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          {name}

          <Styles.Cross type={type} />
        </Styles.SubCategory>
      )}

      {type === 'input' && (
        <Styles.FilterInput name={name} placeholder={name} />
      )}
      {type === 'checkbox' && <CheckBox name="checkbox" text="checkbox" />}

      {type === 'radio' && <CheckBox type="radio" name={name} text={name} />}
    </>
  );
};
