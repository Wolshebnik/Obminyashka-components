import { useState } from 'react';
import { Images, Responsive } from 'components';

import * as Styles from './styles';
import { ICatygoryNav } from './types';

const NavCategory = ({ categoryInfo }: ICatygoryNav) => {
  const [visibleSun, setVisibleBoolean] = useState<boolean>(true);

  const leave = () => setVisibleBoolean(true);
  const enter = () => {
    setTimeout(() => setVisibleBoolean(false), 500);
  };

  return (
    <Styles.List>
      <Styles.Wrapper onMouseLeave={leave} onMouseEnter={enter}>
        {categoryInfo.map((el: any) => {
          return (
            <Styles.NavbarLinkContainer
              onMouseEnter={() =>
                el.text !== 'clothes' && setVisibleBoolean(false)
              }
              key={el.text}
            >
              <Styles.NavbarLink to={el.link}>
                <Responsive.Desktop>
                  {visibleSun && el.text === 'clothes' && (
                    <Styles.SunMain alt="sun-main" src={Images.sunMain} />
                  )}

                  <Styles.SunCateory
                    src={el.sun}
                    variant={el.text}
                    visible={visibleSun}
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
