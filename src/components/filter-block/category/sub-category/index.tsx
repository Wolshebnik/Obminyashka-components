import { ISubCategory } from 'components/filter-block/types';
import { CheckboxRadioField } from 'components/checkbox-radio-field';

import * as Styles from '../../styles';

export const SubCategory = ({
  name,
  type,
  label,
  hiddenCheckbox,
}: ISubCategory) => {
  return (
    <Styles.SubCategory type={type} hiddenCheckbox={hiddenCheckbox}>
      <CheckboxRadioField
        type={type}
        name={name}
        label={label}
        hiddenCheckbox={hiddenCheckbox}
      />
    </Styles.SubCategory>
  );
};
