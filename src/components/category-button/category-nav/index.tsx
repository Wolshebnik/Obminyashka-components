import { useState } from 'react';

import { Images, Responsive } from 'components';

import { images } from './config';
import * as Styles from './styles';
import { ICategoryNav } from './types';
import { ICategoryInfo } from '../types';

const NavCategory = ({ categoryInfo = [], isOpen, delay }: ICategoryNav) => {
  const [isVisibleSun, setVisibleSun] = useState<boolean>(true);

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
        {categoryInfo.map((el: ICategoryInfo, index) => {
          const { img, sun } = images[index];

          return (
            <Styles.NavbarLinkContainer
              to={el.link}
              key={el.text}
              onMouseEnter={() => handleMouseEnter(el.text)}
            >
              <Styles.NavbarLinkBody>
                <Responsive.Desktop>
                  {isVisibleSun && el.text === 'clothes' && (
                    <Styles.SunMain
                      alt="sun-main"
                      variant={el.text}
                      src={Images.sunMain}
                    />
                  )}

                  <Styles.SunCategory
                    isLeave
                    src={sun}
                    variant={el.text}
                    alt={'sun' + el.text}
                    visible={isVisibleSun}
                  />
                </Responsive.Desktop>

                <Styles.NavHover />

                <Styles.Img src={img} alt={el.text} />
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
