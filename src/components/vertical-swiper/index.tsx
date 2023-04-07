import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import * as Styles from './styles';
import { IVerticalSwiper } from './types';

const VerticalSwiper = ({
  src,
  alt,
  small,
  onClick,
  children,
  selected,
}: IVerticalSwiper) => {
  return (
    <Styles.SwiperWrapper>
      <Swiper>{children}</Swiper>
    </Styles.SwiperWrapper>
  );
};

export { VerticalSwiper };

// <Styles.SwiperImage
//   // key={`index-${photo.id}`}
//   alt={alt}
//   src={src}
//   small={small}
//   onClick={onClick}
//   selected={selected}
//   // selected={bigPhoto.id === photo.id}
//   // onClick={() => showBigImg(photo.id)}
//   // src={`data:image/jpeg;base64,${photo.resource}`}
// />;
