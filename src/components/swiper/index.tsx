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
  slidesPerView,
  spaceBetween,
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
            <SwiperSlide style={item.styles}>
              <Styles.SlideLink to={item.href} key={item.title}>
                <img src={item.src} alt={item.title} style={item.styles} />

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
