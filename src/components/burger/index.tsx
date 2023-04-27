import { useState } from 'react';

import * as Styles from './styles';
import { IBurger } from './types';

const Burger = ({}: IBurger) => {
  const [open, setOpen] = useState(false);
  // const [hideOrShow, setHideOrShow] = useState({});

  // const handleMenu = () => {
  //   setIsOpen((prev) => !prev);
  //   if (open) {
  //     setHideOrShow(() => {
  //       return {};
  //     });
  //   } else {
  //     setHideOrShow(() => {
  //       return { display: 'flex' };
  //     });
  //   }
  // };

  return (
    <>
      <Styles.BurgerMenu onClick={() => setOpen(!open)}>
        <Styles.BurgerMenuLines open={open} />
        <Styles.BurgerMenuLines open={open} />
        <Styles.BurgerMenuLines open={open} />
      </Styles.BurgerMenu>
    </>
  );
};

export { Burger };
