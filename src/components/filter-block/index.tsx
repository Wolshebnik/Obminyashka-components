import * as Styles from './styles';
import { Category } from './category';
import { ICategoryData } from './types';

export const FilterBlock = ({ data }: { data: ICategoryData }) => {
  const { title, categories } = data;

  return (
    <Styles.Card>
      <Styles.Title>{title}</Styles.Title>

      <Styles.Categories>
        {categories.map((props, index) => (
          <Category key={index + props.categoryTitle} {...props} />
        ))}
      </Styles.Categories>
    </Styles.Card>
  );
};
