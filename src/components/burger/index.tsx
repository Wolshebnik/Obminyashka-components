import React from 'react';

import { Deals, LanguageSelection, Responsive } from 'components';

import { useDelayAnimation } from 'hooks/useDelayAnimation';

import * as Styles from './styles';
import { IBurger } from './types';

const Burger = ({ burgerMenuText }: IBurger) => {
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(600);

  return (
    <Responsive.NotDesktop>
      <Styles.BurgerIcon onClick={() => setOpen()}>
        <Styles.BurgerIconLines isOpen={isOpen} />
      </Styles.BurgerIcon>

      {isOpen && (
        <>
          <Styles.BurgerMenu isAnimation={isAnimation}>
            {burgerMenuText.map((item, index) => (
              <React.Fragment key={index}>
                <Deals text={item.text} to={item.to} heartIcon={item.icon} />
              </React.Fragment>
            ))}
            <LanguageSelection lang="ua" onClick={() => {}} />
          </Styles.BurgerMenu>
          <Styles.BurgerOverlay onClick={() => setOpen()} />
        </>
      )}
    </Responsive.NotDesktop>
  );
};

export { Burger };
