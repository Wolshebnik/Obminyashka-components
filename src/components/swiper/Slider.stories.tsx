import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Slider } from '.';
import * as Styles from './styles';

export default {
  title: 'Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
  return (
    <Styles.Wrapper>
      <Slider {...args} />
    </Styles.Wrapper>
  );
};

export const DefaultSlider = Template.bind({});
DefaultSlider.args = {
  loop: true,
  speed: 1000,
  slidesPerView: 4,
  spaceBetween: 42,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
};
