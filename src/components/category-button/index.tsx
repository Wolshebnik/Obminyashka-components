import * as Icon from '../icon';
import * as Styles from './styles';
import { IBtnCategoryProps } from './types';

const CategoryButton = ({
  top,
  left,
  text,
  open,
  setOpen,
}: IBtnCategoryProps) => {
  return (
    <>
      <Styles.WrapCategoriesDesktop
        top={top}
        left={left}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <Styles.WrapCategoriesText>{text}</Styles.WrapCategoriesText>

        <Styles.WrapCategoriesArrow>
          <Icon.CategoriesArrow />
        </Styles.WrapCategoriesArrow>

        {/* {open && <NavCategory />} */}
      </Styles.WrapCategoriesDesktop>

      <Styles.WrapCategories
        top={top}
        left={left}
        onClick={() => setOpen(!open)}
      >
        <Icon.CategoriesButton />

        {/* {open && <NavCategory />} */}
      </Styles.WrapCategories>
    </>
  );
};

export { CategoryButton };
