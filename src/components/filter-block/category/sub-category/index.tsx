import { ISubCategory } from 'components/filter-block/types';
import SelectedInputField from 'components/selected-input-field';
import { CheckboxRadioField } from 'components/checkbox-radio-field';

import * as Styles from '../../styles';

export const SubCategory = ({
  type,
  getCities,
  categoryName,
  containerName,
  hiddenCheckbox,
  isOpenCategory,
  subCategoryName,
}: ISubCategory) => {
  return (
    <Styles.SubCategory type={type} hiddenCheckbox={hiddenCheckbox}>
      {type === 'input' ? (
        <SelectedInputField
          getCities={getCities}
          name={subCategoryName}
          placeholder={subCategoryName}
          containerName={containerName}
        />
      ) : (
        <CheckboxRadioField
          type={type}
          name={categoryName}
          label={subCategoryName}
          isOpenCategory={isOpenCategory}
          hiddenCheckbox={hiddenCheckbox}
        />
      )}
    </Styles.SubCategory>
  );
};
