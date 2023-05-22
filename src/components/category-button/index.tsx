import { Responsive } from 'components';
import { NavCategory } from 'components/category-nav';
import { useDelayAnimation } from 'hooks/useDelayAnimation';

import * as Icon from '../icon';
import * as Styles from './styles';
import { IBtnCategoryProps } from './types';

const CategoryButton = ({
  textBtn,
  categoryInfo,
  delay = 500,
}: IBtnCategoryProps) => {
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(delay, true);

  return (
    <Styles.CategoriesBody>
      <Responsive.Desktop>
        <Styles.CategoriesDesktop
          open={isOpen}
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
        <NavCategory
          delay={delay}
          isOpen={isAnimation}
          categoryInfo={categoryInfo}
        />
      )}
    </Styles.CategoriesBody>
  );
};

export { CategoryButton };
