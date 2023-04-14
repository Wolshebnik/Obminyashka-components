import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainSwiper } from '.';
import * as Styles from './styles';
import { slidesData } from './mock';
import { argTypes } from './arg-types';

export default {
  title: 'MainSwiper',
  component: MainSwiper,
  argTypes,
} as ComponentMeta<typeof MainSwiper>;

const Template: ComponentStory<typeof MainSwiper> = (args) => {
  return (
    <Styles.StoryWrapper>
      <MainSwiper {...args} />
    </Styles.StoryWrapper>
  );
};

export const DefaultSlider = Template.bind({});
DefaultSlider.args = {
  data: slidesData,
};
