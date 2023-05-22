import React, { useRef } from 'react';

import { Deals, LanguageSelection, Responsive } from 'components';

import { Overlay } from 'components/overlay';
import * as Icon from 'components/icon/index';
import { useDelayAnimation } from 'hooks/useDelayAnimation';

import { IBurger } from './types';
import * as Styles from './styles';

const duration = 600;

const Burger = ({ data, lang, onSelectLanguage }: IBurger) => {
  const burgerRef = useRef<HTMLDivElement>(null);
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(duration);

  return (
    <Responsive.NotDesktop>
      <Styles.BurgerIcon onClick={() => setOpen(!isOpen)}>
        <Styles.BurgerIconLines isOpen={isOpen} />
      </Styles.BurgerIcon>

      <Overlay
        isHeader
        isOpen={isOpen}
        duration={duration}
        childRef={burgerRef}
        isAnimation={isAnimation}
        setClose={() => setOpen(false)}
      >
        <Styles.BurgerMenu isAnimation={isAnimation} ref={burgerRef}>
          <Responsive.Mobile>
            <Styles.BurgerMenuClose onClick={() => setOpen(false)}>
              <Icon.Close />
            </Styles.BurgerMenuClose>
          </Responsive.Mobile>
          <Styles.BurgerContainer>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <Deals text={item.text} to={item.to} heartIcon={item.icon} />
              </React.Fragment>
            ))}

            <LanguageSelection lang={lang} onClick={onSelectLanguage} />
          </Styles.BurgerContainer>
        </Styles.BurgerMenu>
      </Overlay>
    </Responsive.NotDesktop>
  );
};

export { Burger };
