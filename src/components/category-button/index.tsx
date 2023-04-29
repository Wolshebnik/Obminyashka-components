import * as Icon from '../icon';
import * as Styles from './styles';
import { IBtnCatygoryProps } from './types';

const CategoryButton = ({
  top,
  left,
  text,
  open,
  setOpen,
}: IBtnCatygoryProps) => {
  return (
    <Styles.WrapCategories
      top={top}
      left={left}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <Styles.WrapCategoriesText>{text}</Styles.WrapCategoriesText>

      <Styles.WrapCategoriesArrow>
        <Icon.categoriesErrow />
      </Styles.WrapCategoriesArrow>

      {/* {open && <NavCategory />} */}
    </Styles.WrapCategories>
  );
};

export { CategoryButton };
