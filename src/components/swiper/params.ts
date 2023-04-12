import { Autoplay } from 'swiper';

export const swiperParams = {
  loop: true,
  speed: 2000,
  spaceBetween: 42,
  slidesPerView: 4,
  className: 'mySwiper',
  modules: [Autoplay],
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
};
