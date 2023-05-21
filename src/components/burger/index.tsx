import React from 'react';
import { useArgs } from '@storybook/client-api';
import { useDelayAnimation } from 'hooks/useDelayAnimation';
import { Deals, LanguageSelection, Responsive } from 'components';

import { IBurger } from './types';
import * as Styles from './styles';
import { IOnClickArg } from '../select-lang/types';

const Burger = ({ data }: IBurger) => {
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(600);
  const [, updateArgs] = useArgs();
  const handleChangeLang = ({ lang }: IOnClickArg) => {
    updateArgs({
      lang,
    });
  };

  return (
    <Responsive.NotDesktop>
      <Styles.BurgerIcon onClick={() => setOpen()}>
        <Styles.BurgerIconLines isOpen={isOpen} />
      </Styles.BurgerIcon>

      {isOpen && (
        <>
          <Styles.BurgerMenu isAnimation={isAnimation}>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <Deals text={item.text} to={item.to} heartIcon={item.icon} />
              </React.Fragment>
            ))}

            <LanguageSelection lang="ua" onClick={handleChangeLang} />
          </Styles.BurgerMenu>
          <Styles.BurgerOverlay onClick={() => setOpen()} />
        </>
      )}
    </Responsive.NotDesktop>
  );
};

export { Burger };
