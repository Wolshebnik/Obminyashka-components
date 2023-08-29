import * as Styles from './styles';
import { Category } from './category';
import { ICategoryFilterData } from './types';

export const FilterBlock = ({ title, categories }: ICategoryFilterData) => {
  return (
    <Styles.Card>
      <Styles.Title>{title}</Styles.Title>

      <Styles.Categories>
        {categories.map((category, index) => (
          <Category
            type={category.type}
            key={index + category.name}
            categoryName={category.name}
            hiddenCheckbox={category.hiddenCheckbox}
            subCategories={category.subCategories}
          />
        ))}
      </Styles.Categories>
    </Styles.Card>
  );
};
