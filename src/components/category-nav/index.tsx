/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { useState } from 'react';

import { Images, Responsive } from 'components';

import { images } from './config';
import * as Styles from './styles';
import { ICategoryNav } from './types';
import { ICategoryInfo } from '../category-button/types';

const NavCategory = ({ categoryInfo = [], isOpen, delay }: ICategoryNav) => {
  const [isVisibleSun, setVisibleSun] = useState<boolean>(true);
  const [isLeave, setLeave] = useState<boolean>(true);

  const handleMouseEnter = (text: string) => {
    if (text === 'clothes') {
      setTimeout(() => setVisibleSun(false), 500);
      return;
    }

    setVisibleSun(false);
  };

  return (
    <Styles.List isOpen={isOpen} delay={delay}>
      <Styles.Wrapper onMouseLeave={() => setVisibleSun(true)}>
        {categoryInfo.map((el: ICategoryInfo) => {
          return (
            <Styles.NavbarLinkContainer
              key={el.text}
              onMouseLeave={() => setLeave(true)}
              onMouseEnter={() => handleMouseEnter(el.text)}
            >
              <Styles.NavbarLinkBody>
                <Styles.NavbarLink to={el.link}>
                  <Responsive.Desktop>
                    {isVisibleSun && el.text === 'clothes' && (
                      <Styles.SunMain alt="sun-main" src={Images.sunMain} />
                    )}

                    <Styles.SunCategory
                      src={el.sun}
                      isLeave={isLeave}
                      variant={el.text}
                      alt={'sun' + el.text}
                      visible={isVisibleSun}
                    />
                  </Responsive.Desktop>

                  <Styles.Img src={el.img} alt={el.text} />
                </Styles.NavbarLink>
              </Styles.NavbarLinkBody>

              <Styles.Span>{el.text}</Styles.Span>
            </Styles.NavbarLinkContainer>
          );
        })}
      </Styles.Wrapper>
    </Styles.List>
  );
};

export { NavCategory };
