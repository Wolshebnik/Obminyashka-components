import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import * as Styles from './styles';
import { IMainSwiper } from './types';
import { swiperParams } from './params';

const MainSwiper = ({ data }: IMainSwiper) => {
  return (
    <Styles.SwiperWrapper>
      <Swiper {...swiperParams}>
        {[...data, ...data].map((item, index) => (
          <SwiperSlide key={index}>
            <Styles.SlideWrapper>
              <Styles.SlideLink to={item.href}>
                <Styles.SlideImage src={item.src} alt={item.title} />

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
