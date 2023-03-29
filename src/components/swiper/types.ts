import { ReactNode } from 'react';

export interface IMainSlider {
  loop: boolean;
  speed: number;
  autoplay: object;
  children: ReactNode;
  navigation: boolean;
  spaceBetween: number;
  slidesPerView: number;
  direction: 'horizontal' | 'vertical';
}
