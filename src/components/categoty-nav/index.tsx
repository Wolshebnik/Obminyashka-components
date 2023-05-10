import { useState } from 'react';
import { Images, Responsive } from 'components';

import * as Styles from './styles';
import { ICatygoryNav } from './types';

const NavCategory = ({ categoryInfo }: ICatygoryNav) => {
  const [visibleSun, setVisibleBoolean] = useState<boolean>(true);
  // eslint-disable-next-line no-console
  console.log(visibleSun);

  const leave = () => setVisibleBoolean(true);
  const enter = () => {
    setTimeout(() => setVisibleBoolean(false), 500);
  };

  return (
    <Styles.List>
      <Styles.Wrapper onMouseLeave={leave} onMouseEnter={enter}>
        {categoryInfo.map((el: any) => (
          <Styles.NavbarLinkContainer key={el.text}>
            <Responsive.Desktop>
              {visibleSun && el.text === 'clothes' && (
                <Styles.SunMain
                  alt="sun-main"
                  src={Images.sunMain}
                ></Styles.SunMain>
              )}

              <Styles.SunCateory
                clothes={el.text === 'clothes' && el.text}
                visible={visibleSun}
                src={el.sun}
                alt={'sun' + el.text}
              ></Styles.SunCateory>
            </Responsive.Desktop>

            <Styles.NavbarLink to={el.link}>
              <Styles.Img src={el.img} alt={el.text} />
            </Styles.NavbarLink>

            <Styles.Span>{el.text}</Styles.Span>
          </Styles.NavbarLinkContainer>
        ))}
      </Styles.Wrapper>
    </Styles.List>
  );
};

export { NavCategory };
