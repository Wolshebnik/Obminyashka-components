import { ISubCategory } from 'components/filter-block/types';
import SelectedInputField from 'components/selected-input-field';
import { CheckboxRadioField } from 'components/checkbox-radio-field';

import * as Styles from '../../styles';

export const SubCategory = ({
  type,
  name,
  getCities,
  categoryId,
  subCategoryId,
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
          name={name}
          categoryId={categoryId}
          label={subCategoryName}
          subCategoryId={subCategoryId}
          isOpenCategory={isOpenCategory}
          hiddenCheckbox={hiddenCheckbox}
        />
      )}
    </Styles.SubCategory>
  );
};
