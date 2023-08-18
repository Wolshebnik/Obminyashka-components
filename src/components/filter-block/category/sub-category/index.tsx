import { useState } from 'react';

// import { CheckBox } from 'components/checkbox';
import { FormikCheckbox } from 'components/checkbox-for-formik';
import { ISubCategory } from 'components/filter-block/types';

import * as Styles from '../../styles';

export const SubCategory = ({ name, type }: ISubCategory) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Styles.SubCategory
      key={name}
      type={type}
      isActive={isActive}
      onClick={() => setIsActive(!isActive)}
    >
      {!type && <span>{name}</span>}
      {type === 'checkbox' && (
        <FormikCheckbox name={`${name}`} label={name} values={[]} />
      )}
      {type === 'radio' && (
        <Styles.RadioBlock>
          <input id={name} type="radio" value={name} name="radio" />
          <label htmlFor="radio">{name}</label>
        </Styles.RadioBlock>
      )}
      {type === 'input' && (
        <Styles.FilterInput name={`${name}`} placeholder={name} />
      )}
      <Styles.Cross type={type} />
    </Styles.SubCategory>
  );
};
