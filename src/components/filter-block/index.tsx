import * as Styles from './styles';
import { Category } from './category';
import { ICategoryFilterData } from './types';
import { useState } from 'react';

export const FilterBlock = ({
  title,
  getCities,
  categoryBlock,
  categoryActive,
  categoryFilterData,
}: ICategoryFilterData) => {
  const [openCategory, setOpenCategory] = useState<string[]>([]);

  return (
    <Styles.Card>
      <Styles.Title>{title}</Styles.Title>

      <Styles.Categories>
        {categoryFilterData.map((category, index) => (
          <Category
            openCategory={openCategory}
            setOpenCategory={setOpenCategory}
            name={category.name}
            type={category.type}
            getCities={getCities}
            title={category.title}
            categoryId={category.id}
            key={index + category.name}
            categoryBlock={categoryBlock}
            categoryActive={categoryActive}
            subCategories={category.subCategories}
            hiddenCheckbox={category.hiddenCheckbox}
          />
        ))}
      </Styles.Categories>
    </Styles.Card>
  );
};
