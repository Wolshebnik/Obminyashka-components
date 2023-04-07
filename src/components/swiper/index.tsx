import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper';

import 'swiper/css';

import * as Styles from './styles';
import { slidesData } from './mock';
import { IMainSwiper } from './types';

const MainSwiper = ({ translatedTitle, translatedSubtitle }: IMainSwiper) => {
  return (
    <Styles.SwiperWrapper>
      <Swiper
        loop={true}
        speed={2000}
        spaceBetween={42}
        slidesPerView={4}
        className="mySwiper"
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {slidesData.map((item) => (
          <SwiperSlide key={translatedTitle}>
            <Styles.SlideLink to={item.href}>
              <Styles.SlideImage src={item.src} alt={translatedTitle} />

              <Styles.SlideText>
                {translatedSubtitle}

                <Styles.SlideTitle>{translatedTitle}</Styles.SlideTitle>
              </Styles.SlideText>
            </Styles.SlideLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styles.SwiperWrapper>
  );
};

export { MainSwiper };
