import { useState } from 'react';
import { Responsive } from 'components';
import { NavCategory } from 'components/categoty-nav';

import * as Icon from '../icon';
import * as Styles from './styles';
import { IBtnCategoryProps } from './types';

const CategoryButton = ({ textBtn, categoryInfo }: IBtnCategoryProps) => {
  const [open, setOpen] = useState(false);

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

      {open && <NavCategory categoryInfo={categoryInfo} />}
    </Styles.CategoriesBody>
  );
};

export { CategoryButton };
