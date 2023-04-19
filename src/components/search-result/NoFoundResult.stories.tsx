import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NoFoundResult } from '.';
import * as Styles from './styles';
import { argTypes } from './arg-types';

export default {
  title: 'NoFoundResult',
  component: NoFoundResult,
  argTypes,
} as ComponentMeta<typeof NoFoundResult>;

const Template: ComponentStory<typeof NoFoundResult> = (args) => (
  <Styles.Container>
    <NoFoundResult {...args} />
  </Styles.Container>
);

export const NoFoundDefault = Template.bind({});
NoFoundDefault.args = {
  title: 'Ой! Нічого не співпало.',
  text: 'Спробуйте змінити параметри пошуку',
};
