import { Responsive } from 'components';
import { useDelayAnimation } from 'hooks/useDelayAnimation';
import { NavCategory } from 'components/category-button/category-nav';

import * as Icon from '../icon';
import * as Styles from './styles';
import { IBtnCategoryProps } from './types';

const CategoryButton = ({
  textBtn,
  delay = 500,
  categoryInfo,
}: IBtnCategoryProps) => {
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(delay, true);

  return (
    <>
      <Responsive.Desktop>
        <Styles.CategoriesDesktop
          isOpen={isAnimation}
          onClick={() => setOpen(!isOpen)}
        >
          <Styles.CategoriesText>{textBtn}</Styles.CategoriesText>
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
    </>
  );
};

export { CategoryButton };
