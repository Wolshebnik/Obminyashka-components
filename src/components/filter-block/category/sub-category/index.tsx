/* eslint-disable no-console */
//TODO fix the name check on line 21
import { ISubCategory } from 'components/filter-block/types';
import { FilterCheckbox } from 'components/filter-checkbox';

import * as Styles from '../../styles';

export const SubCategory = ({
  name,
  type,
  label,
  hiddenCheckbox,
}: ISubCategory) => {
  return (
    <Styles.SubCategory type={type}>
      {type !== 'input' && type !== undefined && (
        <FilterCheckbox
          type={type}
          label={label}
          name={name ? name : ''}
          hiddenCheckbox={hiddenCheckbox}
        />
      )}

      {type === 'input' && (
        <Styles.FilterInput
          placeholder={label}
          name={name ? name : ''}
        ></Styles.FilterInput>
      )}
    </Styles.SubCategory>
  );
};
