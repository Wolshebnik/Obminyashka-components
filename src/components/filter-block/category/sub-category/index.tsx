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
      <FilterInput
        type={type}
        name={name}
        label={label}
        hiddenCheckbox={hiddenCheckbox}
      />
    </Styles.SubCategory>
  );
};
