import * as Styles from './styles';
import { IBtnCatygoryProps } from './types';

const ButtonCategory = ({ open, text, setOpen }: IBtnCatygoryProps) => {
  // eslint-disable-next-line no-console
  console.log(open);
  return (
    <Styles.WrapCategories open={open} onClick={() => setOpen(!open)}>
      <Styles.WrapCategoriesErrow>{text}</Styles.WrapCategoriesErrow>

      {/* {open && <NavCategory />} */}
    </Styles.WrapCategories>
  );
};

export { ButtonCategory };
