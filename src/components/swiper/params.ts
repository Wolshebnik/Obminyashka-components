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
    560: {
      spaceBetween: 20,
      slidesPerView: 2,
    },

    1024: {
      spaceBetween: 44,
      slidesPerView: 2,
    },

    1366: {
      spaceBetween: 20,
      slidesPerView: 3,
    },

    1563: {
      spaceBetween: 16,
      slidesPerView: 3,
    },

    1721: {
      spaceBetween: 20,
      slidesPerView: 3,
    },

    1921: {
      spaceBetween: 42,
      slidesPerView: 4,
    },
  },
};
