import React, { useState } from 'react';

import { Deals, LanguageSelection, Responsive } from 'components';

import * as Styles from './styles';
import { IBurger } from './types';

const Burger = ({ burgerMenuText }: IBurger) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Responsive.NotDesktop>
      <Styles.BurgerIcon onClick={handleToggleClick}>
        <Styles.BurgerIconLines isOpen={isOpen} />
      </Styles.BurgerIcon>

      {isOpen && (
        <Styles.BurgerMenu>
          {burgerMenuText.map((item, index) => (
            <React.Fragment key={index}>
              <Deals text={item.text} to={item.to} heartIcon={item.icon} />
            </React.Fragment>
          ))}
          <LanguageSelection lang="ua" onClick={() => {}} />
        </Styles.BurgerMenu>
      )}
    </Responsive.NotDesktop>
  );
};

export { Burger };
