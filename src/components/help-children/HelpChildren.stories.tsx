import type { Meta, StoryObj } from '@storybook/react';

import { HelpChildren } from '.';
import { Wrapper } from './styles';
import { argTypes } from './arg-types';

const meta = {
  title: 'Help children',
  component: HelpChildren,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
  argTypes,
} satisfies Meta<typeof HelpChildren>;

export default meta;
type Story = StoryObj<typeof HelpChildren>;

export const HelpChildrenDefault: Story = {
  args: {
    name: 'Obminyashka',
    buttonText: 'я хочу допомогти дітям!',
    title: 'Чужих дітей не буває!',
    text: 'cooperates with volunteer organizations for all over Ukraine! You can help too! Give your unnecessary things, they will end up in orphanages and orphanages!cooperates with volunteer organizations for all over Ukraine!',
  },
};
