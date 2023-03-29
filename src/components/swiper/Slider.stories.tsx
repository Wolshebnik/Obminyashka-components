import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Slider } from '.';
// import { argTypes } from './arg-types';
import * as Styles from './styles';

export default {
  title: 'Slider',
  component: Slider,
  // argTypes,
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
  speed: 2000,
  slidesPerView: 4,
  spaceBetween: 42,
  direction: 'horizontal',
  autoplay: {
    delay: 2000,
  },
};

// export const VerticalSlider = Template.bind({});
// VerticalSlider.args = {
//   loop: true,
//   navigation: true,
//   slidesPerView: 4,
//   spaceBetween: 10,
//   direction: 'vertical',
// };
