/* eslint-disable no-console */
import { ISubCategory } from 'components/filter-block/types';
import { FilterCheckbox } from 'components/filter-checkbox';

// import * as Styles from '../../styles';

export const SubCategory = ({
  name,
  type,
  label,
  hiddenCheckbox,
}: ISubCategory) => {
  console.log(name);
  return (
    <>
      <FilterCheckbox
        name={name}
        type={type}
        label={label}
        hiddenCheckbox={hiddenCheckbox}
      />
    </>
  );
};
