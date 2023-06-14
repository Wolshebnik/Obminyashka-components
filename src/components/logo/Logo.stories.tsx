import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from '.';
import { ILogo } from './types';
import { argTypes } from './arg-types';

const meta = {
  title: 'Logo',
  component: Logo,
  argTypes,
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof Logo>;

const Template = (args: ILogo) => <Logo {...args} />;

export const Header: Story = {
  args: {
    inFooter: false,
  },
  render: (args) => (
    <div
      style={{
        margin: 'auto',
        width: 'fit-content',
      }}
    >
      <Template {...args} />
    </div>
  ),
};

export const Footer: Story = {
  args: {
    inFooter: true,
  },
  render: (args) => (
    <div
      style={{
        padding: 15,
        margin: 'auto',
        width: 'fit-content',
        background: `linear-gradient(180deg, #A2DDE5 21.44%, #52B2D4 100%)`,
      }}
    >
      <Template {...args} />
    </div>
  ),
};
