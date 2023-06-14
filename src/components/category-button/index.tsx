import { useEffect, useRef, useState } from 'react';

import { Responsive } from 'components';
import { useDelayAnimation, useOutsideClick } from 'hooks';

import * as Icon from '../icon';
import * as Styles from './styles';
import { IBtnCategoryProps } from './types';
import { NavCategory } from './category-nav';

const CategoryButton = ({
  textBtn,
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
          onClick={() => setOpen(!isOpen)}
        >
          <Styles.CategoriesText>{textBtn}</Styles.CategoriesText>

          <Styles.triangle isOpen={isOpen} />
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
          childRef={childRef}
          isOpen={isAnimation}
          categoryInfo={categoryInfo}
        />
      )}
    </>
  );
};

export { CategoryButton };
