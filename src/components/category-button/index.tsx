import { Responsive } from 'components';
import { NavCategory } from 'components/categoty-nav';
import { useDelayAnimation } from 'hooks/useDelayAnimation';

import * as Icon from '../icon';
import * as Styles from './styles';
import { IBtnCategoryProps } from './types';

const CategoryButton = ({ textBtn, categoryInfo }: IBtnCategoryProps) => {
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(500);

  return (
    <Styles.CategoriesBody>
      <Responsive.Desktop>
        <Styles.CategoriesDesktop
          open={isAnimation}
          onClick={() => setOpen(!isOpen)}
        >
          <Styles.CategoriesText>{textBtn}</Styles.CategoriesText>

          <Styles.CategoriesArrow>
            <Icon.CategoriesArrow />
          </Styles.CategoriesArrow>
        </Styles.CategoriesDesktop>
      </Responsive.Desktop>

      <Responsive.NotDesktop>
        <Styles.Categories onClick={() => setOpen(!isOpen)}>
          <Icon.CategoriesButton />
        </Styles.Categories>
      </Responsive.NotDesktop>

      {isOpen && (
        <NavCategory isOpen={isAnimation} categoryInfo={categoryInfo} />
      )}
    </Styles.CategoriesBody>
  );
};

export { CategoryButton };
