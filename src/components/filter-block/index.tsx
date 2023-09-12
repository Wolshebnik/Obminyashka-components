import { useState } from 'react';

import * as Styles from './styles';
import { Category } from './category';
import { ICategoryFilterData } from './types';

export const FilterBlock = ({
  title,
  getCities,
  categoryBlock,
  categoryActive,
  categoryFilterData,
}: ICategoryFilterData) => {
  const [open, setOpen] = useState<number>(-1);

  return (
    <Styles.Card>
      <Styles.Title>{title}</Styles.Title>

      <Styles.Categories>
        {categoryFilterData.map((category, index) => (
          <Category
            open={open}
            setOpen={setOpen}
            type={category.type}
            categoryIndex={index}
            getCities={getCities}
            key={index + category.name}
            categoryName={category.name}
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
