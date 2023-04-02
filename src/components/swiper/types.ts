import { ReactNode } from 'react';

export interface IMainSlider {
  loop: boolean;
  speed: number;
  autoplay: object;
  children: ReactNode;
  spaceBetween: number;
  slidesPerView: number;
}
