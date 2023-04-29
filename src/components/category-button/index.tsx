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
      <Styles.WrapCategoriesErrow>{text}</Styles.WrapCategoriesErrow>

      {open && <NavCategory />}
    </Styles.WrapCategories>
  );
};

export { CategoryButton };
