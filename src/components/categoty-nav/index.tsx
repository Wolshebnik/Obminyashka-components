import { useState } from 'react';
import { Images, Responsive } from 'components';

import * as Styles from './styles';
import { ICatygoryNav } from './types';

const NavCategory = ({ categoryInfo, isOpen }: ICatygoryNav) => {
  const [isVisibleSun, setVisibleSun] = useState<boolean>(true);

  const leave = () => setVisibleSun(true);

  return (
    <Styles.List isOpen={isOpen}>
      <Styles.Wrapper onMouseLeave={leave}>
        {categoryInfo.map((el: any) => {
          return (
            <Styles.NavbarLinkContainer
              onMouseEnter={() => {
                return (
                  el.text !== 'clothes' && setVisibleSun(false),
                  el.text === 'clothes' &&
                    setTimeout(() => setVisibleSun(false), 500)
                );
              }}
              key={el.text}
            >
              <Styles.NavbarLink to={el.link}>
                <Responsive.Desktop>
                  {isVisibleSun && el.text === 'clothes' && (
                    <Styles.SunMain alt="sun-main" src={Images.sunMain} />
                  )}

                  <Styles.SunCateory
                    src={el.sun}
                    variant={el.text}
                    visible={isVisibleSun}
                    alt={'sun' + el.text}
                  />
                </Responsive.Desktop>

                <Styles.Img src={el.img} alt={el.text} />
              </Styles.NavbarLink>

              <Styles.Span>{el.text}</Styles.Span>
            </Styles.NavbarLinkContainer>
          );
        })}
      </Styles.Wrapper>
    </Styles.List>
  );
};

export { NavCategory };
