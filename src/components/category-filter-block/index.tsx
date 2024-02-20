import { useState } from 'react';

import { categoryData } from './mock';
import { CategorySelect } from './category-select';

export const Select = () => {
  const [openCategory, setOpenCategory] = useState<number>(0);

  return (
    <div>
      {categoryData.map((category) => (
        <CategorySelect
          id={category.id}
          title={category.title}
          openCategory={openCategory}
          setOpenCategory={setOpenCategory}
          subCategories={category.subCategories}
        />
      ))}
    </div>
  );
};
