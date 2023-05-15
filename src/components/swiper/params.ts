import { Autoplay } from 'swiper';

export const swiperParams = {
  loop: true,
  speed: 2000,
  spaceBetween: 15,
  slidesPerView: 1,
  modules: [Autoplay],
  className: 'mySwiper',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      spaceBetween: 28,
      slidesPerView: 2,
    },

    1366: {
      spaceBetween: 25,
      slidesPerView: 3,
    },

    1600: {
      spaceBetween: 30,
      slidesPerView: 3,
    },

    1920: {
      spaceBetween: 42,
      slidesPerView: 4,
    },
  },
};
