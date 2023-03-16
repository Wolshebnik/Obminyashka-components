import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CancelEverything } from '.';
import { argTypes } from './arg-types';

export default {
  title: 'CancelEverything',
  component: CancelEverything,
  argTypes: { ...argTypes, onClick: { action: 'onClick' } },
} as ComponentMeta<typeof CancelEverything>;

const Template: ComponentStory<typeof CancelEverything> = (args) => (
  <CancelEverything {...args} />
);

export const CancelEverythingItem = Template.bind({});
CancelEverythingItem.args = {
  text: 'Cancel Everything',
};
