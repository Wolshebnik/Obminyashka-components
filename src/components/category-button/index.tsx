import NavCategory from 'components/categoty-nav';

import * as Icon from '../icon';
import * as Styles from './styles';
import { Responsive } from 'components';
import { IBtnCategoryProps } from './types';

const CategoryButton = ({
  link,
  open,
  setOpen,
  textBtn,
  textToys,
  textBooks,
  textOther,
  textShoes,
  textClothes,
  textFurniture,
  textKidsUpToYear,
  textTransportForChildren,
}: IBtnCategoryProps) => {
  return (
    <Styles.CategoriesBody>
      <Responsive.Desktop>
        <Styles.CategoriesDesktop open={open} onClick={() => setOpen(!open)}>
          <Styles.CategoriesText>{textBtn}</Styles.CategoriesText>

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

      {open && (
        <NavCategory
          link={link}
          textToys={textToys}
          textBooks={textBooks}
          textOther={textOther}
          textShoes={textShoes}
          textClothes={textClothes}
          textFurniture={textFurniture}
          textKidsUpToYear={textKidsUpToYear}
          textTransportForChildren={textTransportForChildren}
        />
      )}
    </Styles.CategoriesBody>
  );
};

export { CategoryButton };
