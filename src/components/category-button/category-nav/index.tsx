import { useState } from 'react';

import { Images, Responsive } from 'components';

import { images } from './config';
import * as Styles from './styles';
import { ICategoryNav } from './types';

const NavCategory = ({
  delay,
  isOpen,
  // setOpen,
  childRef,
  categoryInfo = [],
}: ICategoryNav) => {
  const [isVisibleSun, setVisibleSun] = useState<boolean>(true);

  const handleMouseEnter = (index: number) => {
    if (index === 0) {
      setTimeout(() => setVisibleSun(false), 500);
      return;
    }

    setVisibleSun(false);
  };

  return (
    <Styles.List delay={delay} ref={childRef} isOpen={isOpen}>
      <Styles.Wrapper onMouseLeave={() => setVisibleSun(true)}>
        {categoryInfo.map(({ text, link }, index) => {
          const { img, sun } = images[index];

          return (
            <Styles.NavbarLinkContainer
              to={link}
              key={text}
              // onClick={() => setOpen(false)}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <Styles.NavbarLinkBody>
                <Responsive.Desktop>
                  {isVisibleSun && index === 0 && (
                    <Styles.SunMain
                      alt="sun-main"
                      variant={index}
                      src={Images.sunMain}
                    />
                  )}

                  <Styles.SunCategory
                    isLeave
                    src={sun}
                    variant={index}
                    alt={'sun' + text}
                    visible={isVisibleSun}
                  />
                </Responsive.Desktop>

                <Styles.NavHover />

                <Styles.Img src={img} alt={text} />
              </Styles.NavbarLinkBody>

              <Styles.Span>{text}</Styles.Span>
            </Styles.NavbarLinkContainer>
          );
        })}
      </Styles.Wrapper>
    </Styles.List>
  );
};

export { NavCategory };
