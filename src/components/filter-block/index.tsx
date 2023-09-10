import * as Styles from './styles';
import { Category } from './category';
import { ICategoryFilterData } from './types';

export const FilterBlock = ({
  title,
  getCities,
  categoryActive,
  categoryFilterData,
}: ICategoryFilterData) => {
  return (
    <Styles.Card>
      <Styles.Title>{title}</Styles.Title>

      <Styles.Categories>
        {categoryFilterData.map((category, index) => (
          <Category
            type={category.type}
            getCities={getCities}
            key={index + category.name}
            categoryName={category.name}
            categoryActive={categoryActive}
            subCategories={category.subCategories}
            hiddenCheckbox={category.hiddenCheckbox}
          />
        ))}
      </Styles.Categories>
    </Styles.Card>
  );
};
