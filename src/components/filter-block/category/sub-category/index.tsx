import { ISubCategory } from 'components/filter-block/types';
import SelectedInputField from 'components/selected-input-field';
import { CheckboxRadioField } from 'components/checkbox-radio-field';

import * as Styles from '../../styles';

export const SubCategory = ({
  type,
  categoryName,
  hiddenCheckbox,
  subCategoryName,
}: ISubCategory) => {
  return (
    <Styles.SubCategory type={type} hiddenCheckbox={hiddenCheckbox}>
      {type === 'input' ? (
        <SelectedInputField
          name={subCategoryName}
          placeholder={subCategoryName}
        />
      ) : (
        <CheckboxRadioField
          type={type}
          name={categoryName}
          label={subCategoryName}
          hiddenCheckbox={hiddenCheckbox}
        />
      )}
    </Styles.SubCategory>
  );
};
