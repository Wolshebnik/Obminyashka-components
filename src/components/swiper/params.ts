import { Autoplay } from 'swiper';

export const swiperParams = {
  loop: true,
  speed: 2000,
  spaceBetween: 15,
  slidesPerView: 1,
  modules: [Autoplay],
  className: 'mySwiper',
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    966: {
      spaceBetween: 34,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 24,
      slidesPerView: 2,
    },
    1367: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
    1920: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
  },
};
