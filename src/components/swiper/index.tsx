import { Swiper, SwiperSlide } from 'swiper/react';

import { useWindowWidth } from 'hooks/useWindowWidth';

import * as Styles from './styles';
import { IMainSwiper } from './types';
import { swiperParams } from './params';

import 'swiper/css';

const MainSwiper = ({ data }: IMainSwiper) => {
  const size = useWindowWidth();

  return (
    <Styles.SwiperWrapper windowWidth={size}>
      <Swiper {...swiperParams}>
        {[...data, ...data].map((item, index) => (
          <SwiperSlide key={index}>
            <Styles.SlideWrapper windowWidth={size}>
              <Styles.SlideLink to={item.href}>
                <Styles.SlideImage
                  src={item.src}
                  alt={item.title}
                  windowWidth={size}
                />

                <Styles.SlideText>
                  {item.subtitle}

                  <Styles.SlideTitle>{item.title}</Styles.SlideTitle>
                </Styles.SlideText>
              </Styles.SlideLink>
            </Styles.SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styles.SwiperWrapper>
  );
};

export { MainSwiper };
