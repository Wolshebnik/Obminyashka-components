import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import * as Styles from './styles';
import { slidesData } from './mock';
import { IMainSlider } from './types';

const Slider = ({
  loop,
  speed,
  autoplay,
  direction,
  navigation,
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
        direction={direction}
        navigation={navigation}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Autoplay, Navigation]}
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
