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
  speed: 2000,
  loop: true,
  // slidesPerView: 4,
  // spaceBetween: 42,
  autoplay: {
    delay: 2000,
  },
};
