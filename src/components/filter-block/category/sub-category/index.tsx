/* eslint-disable no-console */
//TODO fix the name check on line 21
import { ISubCategory } from 'components/filter-block/types';
import { FilterInput } from 'components/filter-inputs';

import * as Styles from '../../styles';

export const SubCategory = ({
  name,
  type,
  label,
  hiddenCheckbox,
}: ISubCategory) => {
  return (
    <Styles.SubCategory type={type} hiddenCheckbox={hiddenCheckbox}>
      {type !== 'input' && type !== undefined && (
        <FilterInput
          type={type}
          label={label}
          name={name ? name : ''}
          hiddenCheckbox={hiddenCheckbox}
        />
      )}

      {type === 'input' && (
        <Styles.InputLocation
          placeholder={label}
          name={name ? name : ''}
        ></Styles.InputLocation>
      )}
    </Styles.SubCategory>
  );
};
