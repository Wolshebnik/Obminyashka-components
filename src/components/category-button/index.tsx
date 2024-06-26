import { useEffect, useRef, useState } from 'react';

import { Responsive } from 'components';
import { useDelayAnimation, useOutsideClick } from 'hooks';

import * as Icon from '../icon';
import * as Styles from './styles';
import { IBtnCategoryProps } from './types';
import { NavCategory } from './category-nav';

const CategoryButton = ({
  textBtn,
  isDisabled,
  delay = 500,
  categoryInfo,
}: IBtnCategoryProps) => {
  const childRef = useRef(null);
  const [isTouched, setIsTouched] = useState(false);
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(delay, true);

  useOutsideClick(() => {
    if (isTouched) setOpen(false);
  }, childRef);

  useEffect(() => {
    if (isOpen) setIsTouched(true);
    return () => setIsTouched(false);
  }, [isOpen]);

  return (
    <>
      <Responsive.Desktop>
        <Styles.CategoriesDesktop
          isOpen={isAnimation}
          isDisabled={isDisabled}
          onClick={() => setOpen(!isOpen)}
        >
          <Styles.CategoriesText>{textBtn}</Styles.CategoriesText>

          <Styles.triangle isOpen={isAnimation} />
        </Styles.CategoriesDesktop>
      </Responsive.Desktop>

      <Responsive.NotDesktop>
        <Styles.Categories
          isDisabled={isDisabled}
          onClick={() => setOpen(!isOpen)}
        >
          <Icon.CategoriesButton />
        </Styles.Categories>
      </Responsive.NotDesktop>

      {isOpen && (
        <NavCategory
          delay={delay}
          setOpen={setOpen}
          childRef={childRef}
          isOpen={isAnimation}
          categoryInfo={categoryInfo}
        />
      )}
    </>
  );
};

export { CategoryButton };
