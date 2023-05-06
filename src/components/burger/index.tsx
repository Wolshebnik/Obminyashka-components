import React, { useState } from 'react';

import { Deals, LanguageSelection, Responsive } from 'components';

import * as Styles from './styles';
import { IBurger } from './types';

const Burger = ({ burgerMenuText }: IBurger) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Responsive.NotDesktop>
        <Styles.BurgerIcon onClick={handleToggleClick}>
          <Styles.BurgerIconLines isOpen={isOpen} />
        </Styles.BurgerIcon>
      </Responsive.NotDesktop>

      {isOpen && (
        <Styles.BurgerMenu>
          {burgerMenuText.map((item: any, index: number) => (
            <React.Fragment key={index}>
              <Deals text={item.text} to={item.to} heartIcon={item.icon} />
            </React.Fragment>
          ))}
          <LanguageSelection lang="ua" onClick={() => {}} />
        </Styles.BurgerMenu>
      )}
    </>
  );
};

export { Burger };
