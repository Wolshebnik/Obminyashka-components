import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper';

import 'swiper/css';

import * as Styles from './styles';
import { slidesData } from './mock';
import { IMainSlider } from './types';

const Slider = ({
  loop,
  speed,
  autoplay,
  spaceBetween,
  slidesPerView,
}: IMainSlider) => {
  return (
    <Styles.SwiperWrapper>
      <Swiper
        loop={loop}
        speed={speed}
        autoplay={autoplay}
        className="mySwiper"
        modules={[Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
      >
        <>
          {slidesData.map((item) => (
            <SwiperSlide key={item.title}>
              <Styles.SlideLink to={item.href}>
                <Styles.SlideImage src={item.src} alt={item.title} />

                <Styles.SlideText>
                  {item.subtitle}
                  <Styles.SlideTitle>{item.title}</Styles.SlideTitle>
                </Styles.SlideText>
              </Styles.SlideLink>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </Styles.SwiperWrapper>
  );
};

export { Slider };
