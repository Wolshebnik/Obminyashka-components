import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainSwiper } from '.';
import * as Styles from './styles';

export default {
  title: 'MainSwiper',
  component: MainSwiper,
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
  translatedTitle: 'Toys',
  translatedSubtitle: 'Huge selection of',
};
