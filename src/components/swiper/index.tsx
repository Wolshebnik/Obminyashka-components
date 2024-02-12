import { Swiper as MainSwiper, SwiperSlide } from 'swiper/react';

import { useWindowWidth } from 'hooks';

import * as Styles from './styles';
import { IMainSwiper } from './types';
import { swiperParams } from './params';

import 'swiper/css';

const Swiper = ({ data }: IMainSwiper) => {
  const size = useWindowWidth();

  return (
    <div>
      <MainSwiper {...swiperParams}>
        {[...data, ...data].map((item, index) => (
          <SwiperSlide key={index}>
            <Styles.SlideWrapper>
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
      </MainSwiper>
    </div>
  );
};

export { Swiper };
