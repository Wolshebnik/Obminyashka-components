import * as Icon from '../icon';
import * as Styles from './styles';
import { Responsive } from 'components';
import { IBtnCategoryProps } from './types';

const CategoryButton = ({ text, open, setOpen }: IBtnCategoryProps) => {
  return (
    <Styles.CategoriesBody>
      <Responsive.Desktop>
        <Styles.CategoriesDesktop open={open} onClick={() => setOpen(!open)}>
          <Styles.CategoriesText>{text}</Styles.CategoriesText>

          <Styles.CategoriesArrow>
            <Icon.CategoriesArrow />
          </Styles.CategoriesArrow>
        </Styles.CategoriesDesktop>
      </Responsive.Desktop>

      <Responsive.NotDesktop>
        <Styles.Categories onClick={() => setOpen(!open)}>
          <Icon.CategoriesButton />
        </Styles.Categories>
      </Responsive.NotDesktop>

      {/* {open && <NavCategory />} */}
    </Styles.CategoriesBody>
  );
};

export { CategoryButton };
