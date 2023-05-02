import * as Icon from '../icon';
import * as Styles from './styles';
import { Responsive } from 'components';
import { IBtnCategoryProps } from './types';

const CategoryButton = ({ text, open, setOpen }: IBtnCategoryProps) => {
  return (
    <div style={{ margin: '0', padding: '0' }}>
      <Responsive.Desktop>
        <Styles.WrapCategoriesDesktop
          open={open}
          onClick={() => setOpen(!open)}
        >
          <Styles.WrapCategoriesText>{text}</Styles.WrapCategoriesText>

          <Styles.WrapCategoriesArrow>
            <Icon.CategoriesArrow />
          </Styles.WrapCategoriesArrow>
        </Styles.WrapCategoriesDesktop>
      </Responsive.Desktop>

      <Responsive.NotDesktop>
        <Styles.WrapCategories onClick={() => setOpen(!open)}>
          <Icon.CategoriesButton />
        </Styles.WrapCategories>
      </Responsive.NotDesktop>

      {/* {open && <NavCategory />} */}
    </div>
  );
};

export { CategoryButton };
