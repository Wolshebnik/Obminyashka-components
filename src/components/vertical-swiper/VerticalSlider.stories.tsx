import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SwiperSlide } from 'swiper/react';

import { VerticalSwiper } from '.';
import * as Styles from './styles';
import { slidesData } from './mock';

export default {
  title: 'VerticalSwiper',
  component: VerticalSwiper,
} as ComponentMeta<typeof VerticalSwiper>;

const Template: ComponentStory<typeof VerticalSwiper> = (args) => {
  return (
    <Styles.StoryWrapper>
      <VerticalSwiper {...args}>
        {slidesData.map((photo) => (
          <SwiperSlide>text</SwiperSlide>
        ))}
      </VerticalSwiper>
    </Styles.StoryWrapper>
  );
};

export const DefaultSlider = Template.bind({});
DefaultSlider.args = {};
