import { useState } from 'react';

import { Responsive } from 'components';

import * as Styles from './styles';
import { IBurger } from './types';

const Burger = ({}: IBurger) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Responsive.Mobile>
      <Styles.BurgerMenu onClick={handleToggleClick}>
        <Styles.BurgerMenuLines isOpen={isOpen} />
      </Styles.BurgerMenu>
    </Responsive.Mobile>
  );
};

export { Burger };
